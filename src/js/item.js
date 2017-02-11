
/**
 * @namespace olexp.item
 */
window.olexp.item = window.olexp.item || {};

//==================================================
// Explorer managed item
//--------------------------------------------------
(function(olexp) {

    "use strict";

    /**
     * Item icons
     * @enum {string}
     * @memberOf olexp.item
     * @public
     * @readonly
     */
    olexp.item.icons = {
                            /**
                             * Group icon css selector
                             * @type string
                             */
                            group   : 'olexp-item-group',
                            /**
                             * Heat Map icon css selector
                             * @type string
                             */
                            heatmap : 'olexp-item-heatmap',
                            /**
                             * Image icon css selector
                             * @type string
                             */
                            image   : 'olexp-item-image',
                            /**
                             * Overlay icon css selector
                             * @type string
                             */
                            overlay : 'olexp-item-overlay',
                            /**
                             * Tile Map icon css selector
                             * @type string
                             */
                            tile    : 'olexp-item-tile',
                            /**
                             * Vector icon css selector
                             * @type string
                             */
                            vector  : 'olexp-item-vector'
                       };

    /**
     * Item managed
     * @param {string} id Item ID
     * @param {string} name Item name
     * @param {ol.layer.Layer|ol.Overlay} layer ol3 layer/overlay object
     * @private
     */
    var Item = function(id, name, layer)
    {

        /**
         * Item id
         * @field
         * @private
         * @type {string}
         */
        this.id = id;

        /**
         * ol3 layer/overlay object
         * @field
         * @private
         * @type {ol.layer.Layer|ol.Overlay}
         */
        this.layer = layer;

        /**
         * Indicates if item is currently being moved in manager
         * @field
         * @private
         * @type {string}
         */
        this.moving = false;

        /**
         * Item name
         * @field
         * @private
         * @type {string}
         */
        this.name = name;

        /**
         * Item type
         * @field
         * @private
         * @readonly
         * @type {olexp.item.Type}
         */
        this.type = Item.getType(this.layer);

        /**
         * Item icon
         * @field
         * @private
         * @readonly
         * @type {string}
         */
        this.icon = Item.getIcon(this.type);

    };

    /**
     * Get item details
     * @memberOf Item.prototype
     * @private
     * @returns {object} Object of item properties
     */
    Item.prototype.getDetails = function()
    {
        var properties = {};

        // ==================================================
        // Generic properties
        // --------------------------------------------------
        properties.Name = this.name;

        var layerProperties = this.layer.getProperties();
        if (layerProperties.hasOwnProperty(olexp.measure.properties.area))
        {
            properties.Area = layerProperties[olexp.measure.properties.area];
        }
        else if (layerProperties.hasOwnProperty(olexp.measure.properties.length))
        {
            properties.Length = layerProperties[olexp.measure.properties.length];
        }

        // ==================================================
        // Group properties
        // --------------------------------------------------
        if (this.type === olexp.item.Type.GROUP)
        {
            var layers = this.layer.getLayers();
            properties['Layer Count'] = layers.getLength();
        }

        // ==================================================
        // Vector properties
        // --------------------------------------------------
        if (this.type === olexp.item.Type.VECTOR)
        {
            var source = this.layer.getSource();
            var features = source.getFeatures();
            properties['Feature Count'] = features.length;
        }

        // ==================================================
        // Convert properties to records
        // --------------------------------------------------
        var records = olexp.util.toRecords(properties);

        return records;
    };

    /**
     * Get item extent
     * @memberOf Item.prototype
     * @private
     * @returns {ol.Extent|null} Item extent or null if undefined
     */
    Item.prototype.getExtent = function()
    {
        
        if (this.type === olexp.item.Type.OVERLAY)
        {
            return null;
        }
        else if (this.type === olexp.item.Type.GROUP)
        {
            var extent = null;
            var layers = this.layer.getLayers();
            layers.forEach(function(layer, index, array)
            {
                var layerExtent = Item.getLayerExtent(layer);
                if ((extent === null) &&
                    (layerExtent !== null))
                {
                    extent = layerExtent;
                }
                else if ((extent !== null) &&
                         (layerExtent !== null))
                {
                    extent = ol.extent.extend(extent, layerExtent);
                }
            }, this);
            return extent;
        }

        return Item.getLayerExtent(this.layer);

    };

    /**
     * Get item icon based on type
     * @memberOf Item
     * @param {olexp.item.Type} type Item type
     * @private
     * @returns {string} CSS selector of icon
     */
    Item.getIcon = function(type)
    {
        if (type === olexp.item.Type.GROUP)
        {
            return olexp.item.icons.group;
        }
        else if (type === olexp.item.Type.HEATMAP)
        {
            return olexp.item.icons.heatmap;
        }
        else if (type === olexp.item.Type.IMAGE)
        {
            return olexp.item.icons.image;
        }
        else if (type === olexp.item.Type.OVERLAY)
        {
            return olexp.item.icons.overlay;
        }
        else if (type === olexp.item.Type.TILE)
        {
            return olexp.item.icons.tile;
        }
        else if (type === olexp.item.Type.VECTOR)
        {
            return olexp.item.icons.vector;
        }
        return 'icon-page';
    };

    /**
     * Get layer extent
     * @memberOf Item.prototype
     * @param {ol.layer.Layer} layer Source layer
     * @private
     * @returns {ol.Extent|null} Layer extent or null if undefined
     */
    Item.getLayerExtent = function(layer)
    {

        // ==================================================
        // Check if layer has extent defined
        // --------------------------------------------------
        var extent = layer.getExtent();
        if (typeof extent === 'undefined')
        {
            // ==================================================
            // Check if source has extent defined
            // --------------------------------------------------
            var source = layer.getSource();
            if (source !== null &&
                (source instanceof ol.source.Cluster ||
                source instanceof ol.source.VectorTile ||
                source instanceof ol.source.Vector))
            {
                extent = source.getExtent();
            }
        }
        if (typeof extent === 'undefined') return null;
        return extent;

    };

    /**
     * List of editable properties of layer/overlay
     * @memberOf Item.prototype
     * @private
     * @returns {object} Item properties names
     */
    Item.prototype.getPropertyTypes = function()
    {
        if (this.layer instanceof ol.layer.Layer)
        {
            return olexp.item.LayerProperties;
        }
        else if (this.layer instanceof ol.Overlay)
        {
            return olexp.item.OverlayProperties;
        }
        return {};
    };

    /**
     * Update item editable properties
     * @memberOf Item.prototype
     * @private
     * @returns {object} Item properties
     */
    Item.prototype.getProperties = function()
    {
        var properties = {name: this.name};
        var types = this.getPropertyTypes();
        for (var key in types)
        {
            properties[key] = this.layer.get(key);
        }
        return properties;
    };

    /**
     * Get item type for given layer
     * @memberOf Item
     * @param {ol.layer.Layer|ol.Overlay} layer Source layer
     * @private
     * @returns {olexp.item.Type} Type of item
     */
    Item.getType = function(layer)
    {
        if (layer instanceof ol.layer.Group)
        {
            return olexp.item.Type.GROUP;
        }
        else if (layer instanceof ol.layer.Heatmap)
        {
            return olexp.item.Type.HEATMAP;
        }
        else if (layer instanceof ol.layer.Image)
        {
            return olexp.item.Type.IMAGE;
        }
        else if (layer instanceof ol.layer.Tile)
        {
            return olexp.item.Type.TILE;
        }
        else if (layer instanceof ol.layer.Vector)
        {
            return olexp.item.Type.VECTOR;
        }
        else if (layer instanceof ol.Overlay)
        {
            return olexp.item.Type.OVERLAY;
        }
        return null;
    };

    /**
     * Update item editable properties
     * @memberOf Item.prototype
     * @param {Object} properties Item properties to update
     * @private
     */
    Item.prototype.setProperties = function(properties)
    {
        if (properties.hasOwnProperty('name')) this.name = properties.name;
        var types = this.getPropertyTypes();
        for (var key in types)
        {
            if (properties.hasOwnProperty(key)) this.layer.set(key, properties[key]);
        }
    };

    /**
     * Get/set item property
     * @memberOf Item.prototype
     * @param {string} name Property name
     * @param {object} value Property value
     * @private
     */
    Item.prototype.property = function(name, value)
    {
        if (typeof this[name] === 'undefined') return;
        if (typeof value !== 'undefined') this[name] = value;
        return this[name];
    };

    /**
     * Get item extent
     * @memberOf Item.prototype
     * @param {ol.Map} map ol3 map to zoom
     * @private
     */
    Item.prototype.zoomTo = function(map)
    {

        var view = map.getView();

        if (this.type === olexp.item.Type.OVERLAY)
        {

            // ==================================================
            // Check if overlay has position defined
            // --------------------------------------------------
            var position = this.layer.getPosition();
            if (typeof position !== 'undefined')
            {
                view.setCenter(position);
                return;
            }

            w2alert('Overlay has no position defined to which to zoom.', 'Warning');

        }
        else
        {

            // ==================================================
            // Check if layer has extent defined
            // --------------------------------------------------
            var extent = this.getExtent();
            if (extent !== null)
            {
                view.fit(extent, map.getSize());
                return;
            }

            w2alert('Layer has no extent defined to which to zoom.', 'Warning');

        }

    };

    /**
     * Item managed
     * @memberOf olexp.item
     * @param {string} id Item ID
     * @param {string} name Item name
     * @param {external:ol.layer.Layer|external:ol.Overlay} layer ol3 layer or
     *        overlay object
     * @public
     */
    olexp.item.Item = function(id, name, layer) {
        var item = new Item(id, name, layer);
        return {
            getDetails       : item.getDetails.bind(item),
            getProperties    : item.getProperties.bind(item),
            getPropertyTypes : item.getPropertyTypes.bind(item),
            icon             : item.icon,
            id               : item.id,
            layer            : item.layer,
            moving           : function(moving) {
                                   return item.property('moving', moving);
                               },
            name             : function(name) {
                                   return item.property('name', name);
                                },
            setProperties    : item.setProperties.bind(item),
            type             : item.type,
            zoomTo           : item.zoomTo.bind(item)
        };
    };

    /**
     * Enumeration of Overlay properties
     * @enum {string}
     * @memberOf olexp.item
     * @public
     * @readonly
     */
    olexp.item.OverlayProperties =
    {
    };

    /**
     * Enumeration of Layer properties
     * @enum {string}
     * @memberOf olexp.item
     * @public
     * @readonly
     */
    olexp.item.LayerProperties =
    {
        /**
         * Opacity property
         * @type object
         */
        opacity : {
            /**
             * Opacity title
             * @type string
             */
            title : 'Opacity'
        }
    };

    /**
     * Enumeration of types of allowable managed items
     * @enum {string}
     * @memberOf olexp.item
     * @public
     * @readonly
     */
    olexp.item.Type = {
       /**
        * Group managed item
        * @type number
        */
       GROUP   : 0,
       /**
        * Heat Map managed item
        * @type number
        */
       HEATMAP : 1,
       /**
        * Image managed item
        * @type number
        */
       IMAGE   : 2,
       /**
        * Overlay managed item
        * @type number
        */
       OVERLAY : 3,
       /**
        * Tile managed item
        * @type number
        */
       TILE    : 4,
       /**
        * Vector managed item
        * @type number
        */
       VECTOR  : 5
    };

    return olexp;

}(olexp || {}));
