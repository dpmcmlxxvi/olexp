
/**
 * @namespace olexp.measure
 */
olexp.measure = olexp.measure || {};

//==================================================
// Measuring Tool
//--------------------------------------------------
(function(olexp) {

    /**
     * Enumeration of item measurements types. Object key where measurement is stored.
     * @enum {string}
     * @memberOf olexp.measure
     * @public
     * @readonly
     */
    olexp.measure.properties = {
                                    /**
                                     * Area measurement property name
                                     * @type string
                                     */
                                    area: 'olexp-measure-property-area',
                                    /**
                                     * Length measurement property name
                                     * @type string
                                     */
                                    length: 'olexp-measure-property-length'
                               };

    /**
     * Measure tool Overlay hidden from map
     * @param {object} options ol.Overlay options
     * @private
     */
    var Overlay = function (options)
    {
        ol.Overlay.call(this, options);
    };
    Overlay.prototype = Object.create(ol.Overlay.prototype);

    /**
     * Measuring Tool
     * @param {ol.Map} map Map on which to render measurements
     * @param {olexp.measure.Type} type Measuring tool type.
     *                                  (Default = olexp.measure.Type.LINE)
     * @param {Object} settings olexp settings
     * @private
     */
    var Tool = function(map, type, settings)
    {

        //==================================================
        // Override Measure Tool option defaults
        // with user provided values. 
        //--------------------------------------------------
        var olexpSettings = $.extend(true, {measure : {
            Tool : {
                continueLineMsg              : 'Click to continue drawing the line',
                continuePolygonMsg           : 'Click to continue drawing the polygon',
                helpTooltipOffset            : [20, 0],
                helpTooltipPositioning       : 'center-left',
                measuredStyle                : new ol.style.Style({
                                                   fill:   new ol.style.Fill({
                                                               color: 'rgba(255, 255, 255, 0.2)'
                                                           }),
                                                   stroke: new ol.style.Stroke({
                                                               color: '#ffcc33',
                                                               width: 2
                                                           }),
                                                   image: new ol.style.Circle({
                                                              radius: 7,
                                                              fill: new ol.style.Fill({
                                                                        color: '#ffcc33'
                                                                    })
                                                          })
                                                  }),
                measuringStyle               : new ol.style.Style({
                                                   fill: new ol.style.Fill({
                                                             color: 'rgba(255, 255, 255, 0.2)'
                                                         }),
                                                   stroke: new ol.style.Stroke({
                                                               color: 'rgba(0, 0, 0, 0.5)',
                                                               lineDash: [10, 10],
                                                               width: 2
                                                      }),
                                                   image: new ol.style.Circle({
                                                              radius: 5,
                                                              stroke: new ol.style.Stroke({
                                                                          color: 'rgba(0, 0, 0, 0.7)'
                                                                      }),
                                                              fill: new ol.style.Fill({
                                                                       color: 'rgba(255, 255, 255, 0.2)'
                                                                    })
                                                          })
                                               }),
                measureTooltipOffset         : [0, -20],
                measureTooltipPositioning    : 'bottom-center',
                messageStart                 : 'Click to start drawing. Double click to stop.'
             }}}, settings);

        /**
         * Measurement control settings
         * @field
         * @private
         * @type {Object}
         */
        this.settings = olexpSettings.measure.Tool;

        /**
         * Message to show when the user is drawing a line.
         * @type {string}
         */
        this.continueLineMsg = this.settings.continueLineMsg;

        /**
         * Message to show when the user is drawing a polygon.
         * @type {string}
         */
        this.continuePolygonMsg = this.settings.continuePolygonMsg;

        /**
         * Keeps track of number of measurements taken
         * @type {Number}
         */
        this.count = 0;
        
        /**
         * Draw interaction
         * @type {ol.interaction.Draw}
         */
        this.draw = null;

        /**
         * Drawing is active
         * @type {boolean}
         */
        this.drawing = false;

        /**
         * Do geodesic measurement
         * @type {boolean}
         */
        this.geodesic = false;

        /**
         * Overlay to show the help messages.
         * @type {ol.Overlay}
         */
        this.helpTooltip = null;

        /**
         * The help tooltip element.
         * @type {Element}
         */
        this.helpTooltipElement = null;

        /**
         * Map on which to render measurements
         * @type {ol.Map}
         */
        this.map = map;

        /**
         * Overlay to show the measurement.
         * @type {ol.Overlay}
         */
        this.measureTooltip = null;

        /**
         * The measure tooltip element.
         * @type {Element}
         */
        this.measureTooltipElement = null;

        /**
         * Callback when pointer moves
         * @type {function}
         */
        this.pointerMoveCallback = this.onPointerMove.bind(this);

        /**
         * Currently drawn feature.
         * @type {external:ol.Feature}
         */
        this.sketch = null;

        /**
         * Draw vector source.
         * @type {ol.source.Vector}
         */
        this.source = null;

        /**
         * WGS84 ellipsoid on which to perform measurements
         * @type {ol.Sphere}
         */
        this.sphere = new ol.Sphere(6378137);

        /**
         * Measurement tool type
         * @type {olexp.measure.Type}
         */
        this.type = type;

        /**
         * Draw vector.
         * @type {ol.layer.Vector}
         */
        this.vector = null;

    };

    /**
     * Creates a new help tooltip
     * @memberOf Tool.prototype
     * @private
     */
    Tool.prototype.createHelpTooltip = function ()
    {

        // ==================================================
        // Remove existing help overlay element
        // --------------------------------------------------
        if (this.helpTooltipElement)
        {
            this.helpTooltipElement.parentNode.removeChild(this.helpTooltipElement);
        }

        // ==================================================
        // Create new help tooltip
        // --------------------------------------------------
        this.helpTooltipElement = document.createElement('div');
        this.helpTooltipElement.className = 'olexp-measure olexp-measure-hidden';
        this.helpTooltip = new olexp.measure.Overlay({
            element: this.helpTooltipElement,
            offset: this.settings.helpTooltipOffset,
            positioning: this.settings.helpTooltipPositioning
        });

        // ==================================================
        // Add overlay to map
        // --------------------------------------------------
        this.map.addOverlay(this.helpTooltip);

    };

    /**
     * Creates a new measure vector
     * @memberOf Tool.prototype
     * @private
     */
    Tool.prototype.createMeasureVector = function ()
    {

        this.vector = new ol.layer.Vector({
            source: this.source,
            style: this.settings.measuredStyle
        });
        this.vector.set('name','Measurement #' + (this.count + 1));
        this.map.addLayer(this.vector);

    };
    
    /**
     * Creates a new measure tooltip
     * @memberOf Tool.prototype
     * @private
     */
    Tool.prototype.createMeasureTooltip = function ()
    {

        // ==================================================
        // Remove existing help overlay element
        // --------------------------------------------------
        if (this.measureTooltipElement)
        {
            this.measureTooltipElement.parentNode.removeChild(this.measureTooltipElement);
        }

        // ==================================================
        // Create new measure tooltip
        // --------------------------------------------------
        this.measureTooltipElement = document.createElement('div');
        this.measureTooltipElement.className = 'olexp-measure olexp-measure-active';
        this.measureTooltip = new olexp.measure.Overlay({
            element: this.measureTooltipElement,
            offset: this.settings.measureTooltipOffset,
            positioning: this.settings.measureTooltipPositioning
        });
        this.measureTooltip.set('name','Measurement #' + (this.count+1));

        // ==================================================
        // Add overlay to map
        // --------------------------------------------------
        this.map.addOverlay(this.measureTooltip);

    };

    /**
     * Format length output
     * @memberOf Tool.prototype
     * @param {ol.geom.Polygon} polygon
     * @private
     * @return {string}
     */
    Tool.prototype.formatArea = function (polygon)
    {

        var area = 0;
        if (this.geodesic)
        {

            var projection = this.map.getView().getProjection();
            var geometry = polygon.clone().transform(projection, 'EPSG:4326');
            var coordinates = geometry.getLinearRing(0).getCoordinates();
            area = Math.abs(this.sphere.geodesicArea(coordinates));

        }
        else
        {
            area = polygon.getArea();
        }
        
        var output = '';
        if (area > 10000)
        {
            output = (Math.round(area / 1000000 * 100) / 100) + ' km<sup>2</sup>';
        }
        else
        {
            output = (Math.round(area * 100) / 100) + ' m<sup>2</sup>';
        }

        return output;

    };

    /**
     * Format length output
     * @memberOf Tool.prototype
     * @param {ol.geom.LineString} line
     * @private
     * @return {string}
     */
    Tool.prototype.formatLength = function (line)
    {

        var length = 0;
        if (this.geodesic)
        {
            var projection = this.map.getView().getProjection();
            var coordinates = line.getCoordinates();
            var numCoordinates = coordinates.length;
            for (var i = 0; i < numCoordinates - 1; ++i) {
                var c1 = ol.proj.transform(coordinates[i], projection, 'EPSG:4326');
                var c2 = ol.proj.transform(coordinates[i + 1], projection, 'EPSG:4326');
                length += this.sphere.haversineDistance(c1, c2);
            }
        }
        else
        {
            length = Math.round(line.getLength() * 100) / 100;
        }

        var output;
        if (length > 100)
        {
            output = (Math.round(length / 1000 * 100) / 100) + ' ' + 'km';
        }
        else
        {
            output = (Math.round(length * 100) / 100) + ' ' + 'm';
        }

        return output;

    };

    /**
     * Handle pointer move.
     * @memberOf Tool.prototype
     * @param {ol.MapBrowserEvent} event
     * @private
     */
    Tool.prototype.onPointerMove = function (event)
    {
        
        if (event.dragging)
        {
            return;
        }
        
        var message = this.settings.messageStart;

        if (this.sketch)
        {
            var geometry = this.sketch.getGeometry();
            if (geometry instanceof ol.geom.Polygon)
            {
                message = this.continuePolygonMsg;
            }
            else if (geometry instanceof ol.geom.LineString)
            {
                message = this.continueLineMsg;
            }
        }

        this.helpTooltipElement.innerHTML = message;
        this.helpTooltip.setPosition(event.coordinate);

        $(this.helpTooltipElement).removeClass('olexp-measure-hidden');

    };

    /**
     * Enable/disable tool
     * @memberOf Tool.prototype
     * @param {boolean} enable True if measurement tool is enabled otherwise false
     * @private
     */
    Tool.prototype.setEnable = function (enable)
    {
        if (enable)
        {
            this.map.on('pointermove', this.pointerMoveCallback);
        }
        else
        {
            this.map.un('pointermove', this.pointerMoveCallback);
        }
        this.setInteraction(enable);
    };

    /**
     * Add drawing interaction to map
     * @memberOf Tool.prototype
     * @param {boolean} enable True if drawing should be set otherwise false
     * @private
     */
    Tool.prototype.setInteraction = function (enable)
    {

        if (typeof enable === 'undefined') enable = true;
        
        var me = this;
        
        // ==================================================
        // Remove interactions and hidden overlays
        // --------------------------------------------------
        if (this.draw)
        {
            this.map.removeInteraction(this.draw);
        }
     
        if (enable)
        {
            $(this.helpTooltipElement).removeClass('olexp-measure-hidden');
        }
        else
        {
            $(this.helpTooltipElement).addClass('olexp-measure-hidden');
            
            // If measure tool is disabled while drawing then clean up vector
            if (this.drawing)
            {
                // Remove drawing vector
                this.map.removeLayer(this.vector);
                this.vector = null;

                // Remove measure tooltip
                this.measureTooltipElement.parentNode.removeChild(this.measureTooltipElement);
                this.measureTooltipElement = null;
                
                this.drawing = false;
            }
            return;
        }

        // ==================================================
        // Define drawing interaction
        // --------------------------------------------------
        this.source = new ol.source.Vector();
        this.draw = new ol.interaction.Draw({
            source: this.source,
            type: this.type,
            style: this.settings.measuringStyle
        });

        this.map.addInteraction(this.draw);

        // ==================================================
        // Define tooltips
        // --------------------------------------------------
        this.createMeasureTooltip();
        this.createHelpTooltip();

        // ==================================================
        // Define behavior when drawing starts and ends
        // --------------------------------------------------
        var listener = null;
        this.draw.on('drawstart',
            function(event)
            {
                this.drawing = true;

                // ==================================================
                // Create measurement vector
                // --------------------------------------------------
                me.createMeasureVector();

                // ==================================================
                // Update measurement tooltip when on change
                // --------------------------------------------------
                var tooltipCoord = event.coordinate;
                me.sketch = event.feature;
                listener = me.sketch.getGeometry().on('change',
                    function(event)
                    {
                        // ==================================================
                        // Compute new measurement
                        // --------------------------------------------------
                        var output = '';
                        var geometry = event.target;
                        if (geometry instanceof ol.geom.Polygon)
                        {
                            output = me.formatArea(geometry);
                            tooltipCoord = geometry.getInteriorPoint().getCoordinates();
                        }
                        else if (geometry instanceof ol.geom.LineString)
                        {
                            output = me.formatLength(geometry);
                            tooltipCoord = geometry.getLastCoordinate();
                        }
                        me.measureTooltipElement.innerHTML = output;
                        me.measureTooltip.setPosition(tooltipCoord);
                    });
            }, this);

        this.draw.on('drawend',
            function(event)
            {
                this.drawing = false;
                me.count += 1;

                // ==================================================
                // Store final measurement as layer attribute
                // --------------------------------------------------
                var geometry = me.sketch.getGeometry();
                var property = {};
                if (geometry instanceof ol.geom.Polygon)
                {
                    property[olexp.measure.properties.area] = me.formatArea(geometry);
                    me.vector.setProperties(property);
                }
                else if (geometry instanceof ol.geom.LineString)
                {
                    property[olexp.measure.properties.length] = me.formatLength(geometry);
                    me.vector.setProperties(property);
                }

                // ==================================================
                // Unset sketch
                // --------------------------------------------------
                me.sketch = null;

                // ==================================================
                // Unset tooltip so that a new one can be created
                // --------------------------------------------------
                me.measureTooltipElement.parentNode.removeChild(me.measureTooltipElement);
                me.measureTooltipElement = null;
                me.createMeasureTooltip();
                
                ol.Observable.unByKey(listener);

                me.setInteraction(true);

            }, this);

    };

    /**
     * Set measurement type
     * @memberOf Tool.prototype
     * @param {olexp.measure.Type} type Measuring tool type
     * @private
     */
    Tool.prototype.setType = function (type)
    {
        this.type = type;
    };

    /**
     * Measurement tool
     * @memberOf olexp.measure
     * @param {external:ol.Map} map Source map
     * @param {Object} options Measurement options
     * @param {olexp.measure.Type} options.type Type of measurement to compute
     * @param {olexp.ExplorerSettings} options.settings Explorer settings
     * @public
     */
    olexp.measure.Tool = function(map, options) {

        if (typeof options === 'undefined') options = {};
        if (typeof options.type === 'undefined') options.type = olexp.measure.Type.LINE;
        if (typeof options.settings === "undefined") options.settings = {};

        var tool = new Tool(map, options.type, options.settings);

        /**
         * olexp.measure.Tool API
         */
        return {
            setEnable: function (enable) {
                tool.setEnable(enable);
            },
            setType: function (type) {
                tool.setType(type);
            }
        };

    };

    /**
     * Enumeration of allowable measurement types
     * @enum {string}
     * @memberOf olexp.measure
     * @public
     * @readonly
     */
     olexp.measure.Type = {
        /**
         * Area measurement type
         * @type string
         */
        AREA : 'Polygon',
        /**
         * Line measurement type
         * @type string
         */
        LINE : 'LineString'
    };

    /**
     * Measurement tool overlay
     * @memberOf olexp.measure
     * @param {object} options ol.Overlay options
     * @public
     */
    olexp.measure.Overlay = Overlay;

    return olexp;
    
}(olexp || {}));
