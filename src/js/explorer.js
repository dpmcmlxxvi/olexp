
/* global ol, w2ui */

/**
 * @namespace olexp
 */
window.olexp = window.olexp || {};

//==================================================
// Documentation definitions
//--------------------------------------------------

/**
 * jQuery
 * @external jQuery
 * @see {@link https://api.jquery.com}
 */

/**
 * jQuery plugin namespace
 * @memberof external:jQuery
 * @namespace fn
 */

/**
 * ol3 main namespace
 * @external ol
 * @see {@link http://openlayers.org/en/v3.14.2/apidoc/ol.html}
 */

/**
 * ol3 Collection
 * @class Collection
 * @memberof external:ol
 * @see {@link http://openlayers.org/en/v3.14.2/apidoc/ol.Collection.html}
 */

/**
 * ol3 format namespace
 * @memberof external:ol
 * @namespace format
 * @see {@link http://openlayers.org/en/v3.14.2/apidoc/ol.format.html}
 */

/**
 * ol3 Feature
 * @class Feature
 * @memberof external:ol
 * @see {@link http://openlayers.org/en/v3.14.2/apidoc/ol.Feature.html}
 */

/**
 * ol3 format feature
 * @class Feature
 * @memberof external:ol.format
 * @see {@link http://openlayers.org/en/v3.14.2/apidoc/ol.format.Feature.html}
 */

/**
 * ol3 graticule
 * @class Graticule
 * @memberof external:ol
 * @see {@link http://openlayers.org/en/v3.14.2/apidoc/ol.Graticule.html}
 */

/**
 * ol3 interaction namespace
 * @memberof external:ol
 * @namespace interaction
 * @see {@link http://openlayers.org/en/v3.14.2/apidoc/ol.interaction.html}
 */

/**
 * ol3 selection interaction
 * @class Select
 * @memberof external:ol.interaction
 * @see {@link http://openlayers.org/en/v3.14.2/apidoc/ol.interaction.Select.html}
 */

/**
 * ol3 layer namespace
 * @memberof external:ol
 * @namespace layer
 * @see {@link http://openlayers.org/en/v3.14.2/apidoc/ol.layer.html}
 */

/**
 * ol3 layer base class
 * @class Layer
 * @memberof external:ol.layer
 * @see {@link http://openlayers.org/en/v3.14.2/apidoc/ol.layer.Layer.html}
 */

/**
 * ol3 map
 * @class Map
 * @memberof external:ol
 * @see {@link http://openlayers.org/en/v3.14.2/apidoc/ol.Map.html}
 */

/**
 * ol3 overlay
 * @class Overlay
 * @memberof external:ol
 * @see {@link http://openlayers.org/en/v3.14.2/apidoc/ol.Overlay.html}
 */

/**
 * ol3 style namespace
 * @memberof external:ol
 * @namespace style
 * @see {@link http://openlayers.org/en/v3.14.2/apidoc/ol.style.html}
 */

/**
 * ol3 Style
 * @class Style
 * @memberof external:ol.style
 * @see {@link http://openlayers.org/en/v3.14.2/apidoc/ol.style.Style.html}
 */

/**
 * ol3 view
 * @class View
 * @memberof external:ol
 * @see {@link http://openlayers.org/en/v3.14.2/apidoc/ol.View.html}
 */

/**
 * w2ui form
 * @function w2form
 * @memberof external:jQuery.fn
 * @see {@link http://w2ui.com/web/docs/form}
 */

/**
 * w2ui form properties
 * @memberof external:jQuery.fn.w2form
 * @name properties
 * @type object
 * @see {@link http://w2ui.com/web/docs/form/properties}
 */

/**
 * w2ui grid
 * @function w2grid
 * @memberof external:jQuery.fn
 * @see {@link http://w2ui.com/web/docs/grid}
 */

/**
 * w2ui layout
 * @function w2layout
 * @memberof external:jQuery.fn
 * @see {@link http://w2ui.com/web/docs/layout}
 */

/**
 * w2ui layout panels
 * @memberof external:jQuery.fn.w2layout
 * @name panels
 * @type object
 * @see {@link http://w2ui.com/web/docs/w2layout.panels}
 */

/**
 * w2ui popup
 * @function w2popup
 * @memberof external:jQuery.fn
 * @see {@link http://w2ui.com/web/docs/popup}
 */

/**
 * w2ui popup properties
 * @memberof external:jQuery.fn.w2popup
 * @name properties
 * @type object
 * @see {@link http://w2ui.com/web/docs/w2popup.defaults}
 */

/**
 * w2ui sidebar
 * @function w2sidebar
 * @memberof external:jQuery.fn
 * @see {@link http://w2ui.com/web/docs/sidebar}
 */

/**
 * w2ui sidebar nodes
 * @memberof external:jQuery.fn.w2sidebar
 * @name nodes
 * @type object
 * @see {@link http://w2ui.com/web/docs/w2sidebar.nodes}
 */

/**
 * w2ui toolbar
 * @function w2toolbar
 * @memberof external:jQuery.fn
 * @see {@link http://w2ui.com/web/docs/toolbar}
 */

/**
 * w2ui toolbar properties
 * @memberof external:jQuery.fn.w2toolbar
 * @name properties
 * @type object
 * @see {@link http://w2ui.com/web/docs/w2toolbar.items}
 */

/**
 * w2ui common name
 * @external w2ui.common.name
 * @ignore
 * @see {@link http://w2ui.com/web/docs/common.name}
 */

/**
 * @description Advanced settings for customizing various controls and menus
 *              look and feel.
 * @typedef {object} ExplorerSettings
 * @memberOf olexp
 * 
 * @property {object} [control] olexp.control settings
 * 
 * @property {object} [control.EditSettings] Edit Settings control settings
 * @property {external:jQuery.fn.w2form.properties} [control.EditSettings.form]
 *           w2form properties
 * @property {string} [control.EditSettings.hint='Edit Controls'] Control button
 *           hover hint text
 * @property {external:jQuery.fn.w2popup.properties} [control.EditSettings.popup]
 *           w2popup properties
 * @property {number} [control.EditSettings.span=6] Span size of control fields
 * 
 * @property {object} [control.ExportMap] Export Map control settings
 * @property {string} [control.ExportMap.filename='map.png'] Default filename of
 *           saved map
 * @property {string} [control.ExportMap.hint='Export map'] Control button hover
 *           hint text
 * 
 * @property {object} [control.Graticule] Graticule control settings
 * @property {boolean} [control.Graticule.enable=false] Enable grid line display
 * @property {external:jQuery.fn.w2form.properties} [control.Graticule.form]
 *           w2form properties
 * @property {string} [control.Graticule.hint='Edit Controls'] Control button
 *           hover hint text
 * @property {object} [control.Graticule.options] ol.style.Stroke options
 * @property {external:jQuery.fn.w2popup.properties} [control.Graticule.popup]
 *           w2popup properties
 * @property {number} [control.Graticule.span=6] Span size of control fields
 * 
 * @property {object} [control.LayerControlTile] Layer Control Tile control
 *           settings
 * @property {external:jQuery.fn.w2form.properties} [control.LayerControlTile.form]
 *           w2form properties
 * @property {string} [control.LayerControlTile.hint='Edit Controls'] Control
 *           button hover hint text
 * @property {external:jQuery.fn.w2popup.properties} [control.LayerControlTile.popup]
 *           w2popup properties
 * @property {number} [control.LayerControlTile.span=6] Span size of control
 *           fields
 * 
 * @property {object} [control.LayerControlVector] Layer Control Vector control
 *           settings
 * @property {external:jQuery.fn.w2form.properties} [control.LayerControlVector.form]
 *           w2form properties
 * @property {string} [control.LayerControlVector.hint='Edit Controls'] Control
 *           button hover hint text
 * @property {external:jQuery.fn.w2popup.properties} [control.LayerControlVector.popup]
 *           w2popup properties
 * @property {number} [control.LayerControlVector.span=6] Span size of control
 *           fields
 * 
 * @property {object} [control.LayerManager] Layer Manager control settings
 * @property {string} [control.LayerManager.hintDetailsHide='Hide details'] Hide
 *           details control button hover hint text 
 * @property {string} [control.LayerManager.hintDetailsShow='Show details'] Show
 *           details control button hover hint text
 * @property {string} [control.LayerManager.hintMoveDown='Move item down'] Move
 *           item down control button hover hint text
 * @property {string} [control.LayerManager.hintMoveUp='Move item up'] Move item
 *           up control button hover hint text
 * @property {string} [control.LayerManager.hintOutlineHide='Hide outline'] Hide
 *           outline control button hover hint text
 * @property {string} [control.LayerManager.hintOutlineShow='Show outline'] Show
 *           outline control button hover hint text
 * 
 * @property {object} [control.LayerMenu] Layer Menu control settings
 * @property {string} [control.LayerMenu.arrow=true] Display arrow for drop down
 *           menu 
 * @property {string} [control.LayerMenu.hint='Item Properties'] Control button
 *           hover hint text
 * @property {string} [control.LayerMenu.text=''] Button text
 * 
 * @property {object} [control.Measurement] Measurement control settings
 * @property {string} [control.Measurement.hintArea='Measure area'] Area
 *           measurement control button hover hint text 
 * @property {string} [control.Measurement.hintLength='Measure length'] Length
 *           measurement control button hover hint text
 * 
 * @property {object} [control.ToolbarHide] Toolbar Hide control settings
 * @property {string} [control.ToolbarHide.hint='Hide toolbar'] Hide toolbar
 *           control button hover hint text
 * 
 * @property {object} [measure] olexp.measure settings
 * 
 * @property {object} [measure.Tool] Properties menu settings
 * @property {string} [measure.Tool.continueLineMsg='Click to continue drawing the line']
 *           Message displayed to continue drawing line
 * @property {string} [measure.Tool.continuePolygonMsg='Click to continue drawing the polygon']
 *           Message displayed to continue drawing polygon
 * @property {Array} [measure.Tool.helpTooltipOffset=[20, 0]] Pixel offset of
 *           help tooltip
 * @property {string} [measure.Tool.helpTooltipPositioning='center-left']
 *           Position of help tooltip
 * @property {external:ol.style.Style} [measure.Tool.measuredStyle] Style of a
 *           measurement vector after completed.
 * @property {external:ol.style.Style} [measure.Tool.measuredStyle] Style of a
 *           measurement vector during drawing.
 * @property {Array} [measure.Tool.measureTooltipOffset=[0, -20]] Pixel offset
 *           of measuring tooltip
 * @property {string} [measure.Tool.measureTooltipPositioning='bottom-center']
 *           Position of measuring tooltip
 * @property {string} [measure.Tool.messageStart='Click to start drawing. Double click to stop.']
 *           Message to display to start drawing.
 * 
 * @property {object} [menu] olexp.menu settings
 * 
 * @property {object} [menu.Properties] Properties menu settings
 * @property {number} [menu.Properties.field=35] Field size
 * @property {external:jQuery.fn.w2form.properties} [menu.Properties.form]
 *           w2form properties
 * @property {external:jQuery.fn.w2popup.properties} [menu.Properties.popup]
 *           w2popup properties
 * @property {number} [menu.Properties.span=4] Span size of control fields
 * @property {string} [menu.Properties.text='Properties'] Context menu text 
 * 
 * @property {object} [menu.Remove] Remove menu settings
 * @property {string} [menu.Remove.text='Remove'] Context menu text 
 * 
 * @property {object} [menu.Zoom] Zoom menu settings
 * @property {string} [menu.Zoom.text='Zoom'] Context menu text
 * 
 * @property {object} [ol] olexp.ol settings
 * 
 * @property {object} [ol.ToolbarShow] ol3 map control settings
 * @property {string} [ol.ToolbarShow.html='T'] HTML to display in control
 * @property {string} [ol.ToolbarShow.title='Show toolbar'] Control hover hint
 * 
 * @property {object} [util] olexp.util settings
 * 
 * @property {function} [util.Cluster] Function that returns ol.style.Style for
 *           a given cluster size.
 * @property {external:ol.style.Style} [util.Point] Point style
 * @property {external:ol.style.Style} [util.LineString] LineString style
 * @property {external:ol.style.Style} [util.Polygon] Polygon style
 * @property {external:ol.style.Style} [util.MultiPoint] MultiPoint style
 * @property {external:ol.style.Style} [util.MultiLineString] MultiLineString
 *           style
 * @property {external:ol.style.Style} [util.MultiPolygon] MultiPolygon style
 */

//==================================================
// OpenLayers Explorer
//--------------------------------------------------
/**
 * olexp main module
 */
(function(olexp) {
    "use strict";

    /**
     * Main OpenLayers Explorer object that provides a layout manager to an
     * Open Layers 3 map.
     * @param {string} id DOM id of the element containing the Explorer.
     * @param {olexp.ExplorerOptions} [options] Explorer options
     * @throws {Error} id must be defined and exist
     */
    var Explorer = function(id, options)
    {

        // ==================================================
        // Parse arguments
        // --------------------------------------------------

        if (typeof id === "undefined")
        {
            throw new Error("olexp.Explorer: id not defined");
        }
        else if ($("#"+id).length === 0)
        {
            throw new Error("olexp.Explorer: id not found");
        }

        // ==================================================
        // Default options
        // --------------------------------------------------
        
        // Prefix is used to create DOM ids and w2ui names. This ensures they
        // are unique and can have multiple instances on the same page
        var prefix = "olexp-" + id;

        /**
         * @description Explorer constructor options to override default
         *              behavior.
         * @typedef {object} ExplorerOptions
         * @memberOf olexp
         * 
         * @property {object} [controls] Enables built-in toolbar controls
         * @property {boolean} [controls.editsettings=true] Enable settings
         *           editor control
         * @property {boolean} [controls.exportmap=true] Enable map exporting
         *           control
         * @property {boolean} [controls.graticule=true] Enable graticule
         *           control
         * @property {boolean} [controls.layercontrol=true] Enable Layer Control
         *           control
         * @property {boolean} [controls.layermanager=true] Enable Layer Manager
         *           control
         * @property {boolean} [controls.layermenu=true] Enable Layer Menu
         *           control
         * @property {boolean} [controls.measure=true] Enable measurement
         *           control
         * @property {boolean} [controls.toolbarhide=true] Enable toolbar hide
         *           control
         * 
         * @property {external:jQuery.fn.w2layout.panels} [details] Options for
         *           details panel. Below are only those different from w2ui
         *           defaults.
         * @property {boolean} [details.hidden=true] Visibility
         * @property {boolean} [details.resizable=true] Resizability
         * @property {string} [details.size='25%'] Size
         * @property {string} [details.type='preview'] Type of panel
         * 
         * @property {external:jQuery.fn.w2sidebar.nodes} [layers] Options for
         *           layers node. Below are only those different from w2ui defaults.
         * @property {boolean} [layers.expanded=true] Indicate if initially
         *           expanded
         * @property {boolean} [layers.group=true] Indicate if a group
         * @property {string} [layers.img='icon-folder'] CSS selector of node
         *           image
         * @property {string} [layers.text='Layers'] Node text
         * 
         * @property {external:jQuery.fn.w2layout.panels} [map] Options for map
         *           panel. Below are only those different from w2ui defaults.
         * @property {string} [map.type='main'] Type of panel
         * 
         * @property {external:jQuery.fn.w2layout.panels} [navigation] Options
         *           for navigation panel. Below are only those different from
         *           w2ui defaults.
         * @property {boolean} [navigation.resizable=true] Resizability
         * @property {string} [navigation.size='15%'] Size
         * @property {string} [navigation.type='left'] Type of panel
         * 
         * @property {object} [olcontrols] Enables OpenLayers map controls
         * @property {boolean} [olcontrols.fullscreen=true] Enable full screen
         * @property {boolean} [olcontrols.mouseposition=true] Enable mouse position
         * @property {boolean} [olcontrols.overviewmap=true] Enable overview map
         * @property {boolean} [olcontrols.rotate=true] Enable rotation
         * @property {boolean} [olcontrols.scaleline=true] Enable scale line
         * @property {boolean} [olcontrols.zoom=true] Enable zoom
         * @property {boolean} [olcontrols.zoomslider=true] Enable zoom slider
         * @property {boolean} [olcontrols.zoomtoextent=true] Enable zoom to extent
         * 
         * @property {object} [olinteractions] Enables OpenLayers map interactions
         * @property {boolean} [olinteractions.draganddrop=true] Enable drag and drop
         * 
         * @property {external:ol.Map} [olmap] Options for ol3 map.
         *           Below are only those different from ol3 defaults.
         * @property {array} [olmap.controls=[]] Controls initially added to the
         *           map.
         * @property {external:ol.View | undefined} [olmap.view=new ol.View({center: [0,0], zoom: 4})]
         *           The map's initial view.
         * 
         * @property {external:jQuery.fn.w2layout.panels} [outline] Options for
         *           outline panel. Below are only those different from w2ui
         *           defaults.
         * @property {string} [outline.type='main'] Type of panel
         * 
         * @property {external:jQuery.fn.w2sidebar.nodes} [overlays] Options for
         *           overlays node. Below are only those different from w2ui
         *           defaults.
         * @property {boolean} [overlays.expanded=true] Indicate if initially
         *           expanded
         * @property {boolean} [overlays.group=true] Indicate if a group
         * @property {string} [overlays.img='icon-folder'] CSS selector of node
         *           image
         * @property {string} [overlays.text='Overlays'] Node text
         * 
         * @property {olexp.ExplorerSettings} [settings] Advanced settings for
         *           customizing various controls and menus look and feel.
         * 
         * @property {external:jQuery.fn.w2layout.panels} [toolbar] Options for
         *           toolbar panel. Below are only those different from w2ui
         *           defaults.
         * @property {string} [toolbar.size='40'] Size
         * @property {string} [toolbar.style='padding: 5px;'] Additional CSS
         *           style
         * @property {string} [toolbar.type='top'] Type of panel
         */
        this.options = {
            controls : {
                editsettings : true,
                exportmap    : true,
                graticule    : true,
                layercontrol : true,
                layermanager : true,
                layermenu    : true,
                measure      : true,
                toolbarhide  : true
            },
            details : {
                hidden    : true,
                resizable : true,
                size      : "25%",
                type      : "preview"
            },
            layers : {
                expanded : true,
                group    : true,
                img      : "icon-folder",
                text     : "Layers"
            },
            map : {
                type    : "main"
            },
            navigation : {
                resizable : true,
                size      : "15%",
                type      : "left"
            },
            olcontrols : {
                fullscreen    : true,
                mouseposition : true,
                overviewmap   : true,
                rotate        : true,
                scaleline     : true,
                zoom          : true,
                zoomslider    : true,
                zoomtoextent  : true
            },
            olinteractions : {
                draganddrop : true
            },
            olmap : {
                controls : [],
                view     : new ol.View({center: [0,0], zoom: 3})
            },
            outline : {
                type  : "main"
            },
            overlays : {
                expanded : true,
                group    : true,
                img      : "icon-folder",
                text     : "Overlays"
            },
            settings: {},
            toolbar : {
                size  : "40",
                style : "padding: 5px;",
                type  : "top"
            },
        };

        // Override default options with user options
        $.extend(true, this.options, options);

        /**
         * @description Explorer options the user can not override (DOM ids and
         *              w2ui names)
         * @memberOf olexp
         * 
         * @property {object} [explorer] Explorer properties
         * @property {string} [explorer.cls='olexp-explorer-content'] Explorer
         *           div class
         * @property {string} [explorer.id='olexp-' + id +
         *           '-explorer-id-content'] Explorer div id
         * @property {external:w2ui.common.name} [explorer.details='olexp-' + id
         *           + '-explorer-name-details'] w2ui name of details panel
         * @property {external:w2ui.common.name} [explorer.layout='olexp-' + id
         *           + '-explorer-name-layout'] w2ui name of main layout
         * @property {external:w2ui.common.name} [explorer.navigation='olexp-'
         *           + id + '-explorer-name-navigation'] w2ui name of navigation
         *           panel
         * @property {external:w2ui.common.name} [explorer.outline='olexp-' + id
         *           + '-explorer-name-outline'] w2ui name of outline panel
         * @property {external:w2ui.common.name} [explorer.toolbar='olexp-' + id
         *           + '-explorer-name-toolbar'] w2ui name of toolbar
         * 
         * @property {external:jQuery.fn.w2sidebar.nodes} [layers] Options for
         *           layers node
         * @property {string} [layers.id='olexp-' + id + '-explorer-id-layers']
         *           Unique ID of node
         * 
         * @property {external:jQuery.fn.w2layout.panels} [map] Options for map
         *           panel
         * @property {string} [map.content='<div id="olexp-' + id +
         *           '-explorer-id-map'" class="olexp-explorer-map"></div>']
         *           Panel content. Should be div containing ol.Map and
         *           referenced by olmap.target.
         * 
         * @property {external:ol.Map} [olmap] Options for ol3 map
         * @property {Element|string|undefined} [olmap.target=options.map.id]
         *           The container for the map, either the element itself or the
         *           id of the element.
         * 
         * @property {external:jQuery.fn.w2sidebar.nodes} [overlays] Options for
         *           overlays node
         * @property {string} [overlays.id='olexp-' + id +
         *           '-explorer-id-overlays'] Unique ID of node
         */
        $.extend(true, this.options, {
            explorer : {
                cls        : "olexp-explorer-content",
                id         : prefix + "-explorer-id-content",
                details    : prefix + "-explorer-name-details",
                layout     : prefix + "-explorer-name-layout",
                navigation : prefix + "-explorer-name-navigation",
                outline    : prefix + "-explorer-name-outline",
                toolbar    : prefix + "-explorer-name-toolbar"
            },
            layers : {
                id : prefix + "-explorer-id-layers",
            },
            map : {
                content : ("<div id=\"" + prefix + "-explorer-id-map\"" +
                           " class=\"olexp-explorer-map\"></div>"),
            },
            olmap : {
                target   : prefix + "-explorer-id-map",
            },
            overlays : {
                id : prefix + "-explorer-id-overlays",
            },
            settings : {
                prefix : prefix
            }
        });

        // ==================================================
        // Store current object
        // --------------------------------------------------
        var me = this;

        // ==================================================
        // Create main layout content div
        // --------------------------------------------------

        var div = $("<div>", {"id": this.options.explorer.id,
                              "class": this.options.explorer.cls});
        $("#"+id).append(div);

        // ==================================================
        // Main Layout
        // --------------------------------------------------

        this.layout = $("#"+this.options.explorer.id).w2layout({
            name   : this.options.explorer.layout,
            panels : [
                          this.options.navigation,
                          this.options.map,
                          this.options.toolbar
                     ]
        });

        // ==================================================
        // Main Toolbar
        // --------------------------------------------------

        this.toolbar = $("").w2toolbar({
            name: this.options.explorer.toolbar
        });

        // ==================================================
        // Navigation pane Layout
        // --------------------------------------------------

        this.navigation = $("").w2layout({
            name     : this.options.explorer.navigation,
            onResize : function() {
                           if (me.hasOwnProperty("map"))
                           {
                               me.map.updateSize();
                           }
                           if (me.hasOwnProperty("details"))
                           {
                               me.details.resize();
                           }
                       },
            panels   : [
                        this.options.outline,
                        this.options.details
                       ]
        });

        // ==================================================
        // Outline sidebar
        // --------------------------------------------------

        this.outline = $("").w2sidebar({
            name       : this.options.explorer.outline,
            nodes      : [
                              this.options.layers,
                              this.options.overlays
                         ],
            onClick    : function (event) {
                             var id = event.target;
                             var records = me.manager.getDetails(id);
                             me.details.clear();
                             me.details.add(records);
                             me.manager.onItemSelected(id);
                         },
            onDblClick : function (event) {
                             var id = event.target;
                             me.manager.toggleNode(id);
                             me.manager.onItemSelected(id);
                         },
            onRender   : function(event) {
                             event.onComplete = function()
                             {
                                 var id = me.outline.selected;
                                 me.manager.onItemSelected(id);
                             };
                         }
        });

        // ==================================================
        // Details table
        // --------------------------------------------------

        this.details = $("").w2grid({
            columns : [
                          {
                              field    : "property",
                              caption  : "Property",
                              size     : "100%",
                              sortable : true
                          },
                          {
                               field    : "value",
                               caption  : "Value",
                               size     : "100%",
                               sortable : true
                          }
                      ],
            name    : this.options.explorer.details,
        });

        // ==================================================
        // Add Content
        // --------------------------------------------------

        this.navigation.content(this.options.outline.type, this.outline);
        this.navigation.content(this.options.details.type, this.details);
        this.layout.content(this.options.navigation.type, this.navigation);

        // ==================================================
        // Define map
        // --------------------------------------------------

        this.map = new ol.Map(this.options.olmap);

        // ==================================================
        // Layer manager
        // --------------------------------------------------

        this.manager = new olexp.manager.Manager(this.map,
                                                 this.outline,
                                                 this.details,
                                                 this.options.layers.id,
                                                 this.options.overlays.id);

        // ==================================================
        // Create menu items and callbacks in outline
        // --------------------------------------------------

        var zoom = olexp.menu.Zoom(this.manager, this.options.settings);
        var properties = olexp.menu.Properties(this.manager, this.options.settings);
        var remove = olexp.menu.Remove(this.manager, this.options.settings);

        this.menu = {items: [], callbacks: {}};

        this.menu.items.push(zoom.menu);
        this.menu.items.push(properties.menu);
        this.menu.items.push(remove.menu);

        this.menu.callbacks[zoom.menu.id] = zoom.click;
        this.menu.callbacks[properties.menu.id] = properties.click;
        this.menu.callbacks[remove.menu.id] = remove.click;

        // Add menu items and callbacks to outline
        this.outline.menu = this.menu.items;
        this.outline.onMenuClick = function (event)
        {
            var id = event.menuItem.id;
            if (id in me.menu.callbacks)
            {
                me.menu.callbacks[id](event);
            }
        };

        // ==================================================
        // Define map interactions
        // --------------------------------------------------

        this.util = new olexp.util.Util(this.options.settings);

        // Add map interactions
        var interactions = this.util.getInteractions(this.map);
        for (var iname in this.options.olinteractions)
        {
            var interaction = interactions[iname];
            if (this.options.olinteractions[iname]) this.map.addInteraction(interaction);
        }

        // Add map controls
        var controls = this.util.getControls();
        for (var cname in this.options.olcontrols)
        {
            var control = controls[cname];
            this.map.addControl(control);
            control.setMap((this.options.olcontrols[cname] ? this.map : null));
        }

        // ==================================================
        // Feature selector
        // --------------------------------------------------

        this.selector = new olexp.selection.Feature(this.map, this.details);
        this.selector.setEnable(true);

        // ==================================================
        // All layout and map components are defined so we
        // can define the main Explorer API.
        // --------------------------------------------------

        /**
         * @description The objects exposed by the Explorer API
         * @typedef {object} ExplorerAPI
         * @memberOf olexp
         * @property {external:jQuery.fn.w2grid} details Layer details panels.
         *           Display the details of the later that is currently selected
         *           in the outline sidebar.
         * @property {external:jQuery.fn.w2layout} layout Explorer layout
         *           object. Contains the map, toolbar, and navigation panels.
         *           Can maintain up to 3 additional panels that are stretchable
         *           and resizable. 
         * @property {olexp.manager.ManagerAPI} manager Explorer item manager
         * @property {external:ol.Map} map ol3 map object used to add layers,
         *           overlays, controls, etc.
         * @property {external:jQuery.fn.w2layout} navigation Layer manager
         *           navigation panel. The panel that contains the outline
         *           sidebar and detail grid.
         * @property {olexp.ExplorerOptions} options Explorer options object
         *           that contains the options argument passed to the explorer
         *           constructor.
         * @property {external:jQuery.fn.w2sidebar} outline Layer manager
         *           outline panel that allows the user to manage the ordering
         *           and properties of the map layers.
         * @property {external:jQuery.fn.w2toolbar} toolbar Explorer toolbar
         *           that contains map and layers controls.
         */
        this.api = {
                        details    : this.details,
                        layout     : this.layout,
                        manager    : this.manager,
                        map        : this.map,
                        navigation : this.navigation,
                        options    : this.options,
                        outline    : this.outline,
                        toolbar    : this.toolbar
                    };

        // ==================================================
        // Add built-in controls to toolbar
        // --------------------------------------------------

        if (this.options.controls.toolbarhide)
        {
            this.toolbar.add(olexp.control.ToolbarHide(this.api,
                                                       {hidden   : this.options.toolbar.hidden,
                                                        settings : this.options.settings}));
            this.toolbar.add({id: "break-toolbar-hide", type: "break"});
        }

        if (this.options.controls.layermanager)
        {
            this.toolbar.add(olexp.control.LayerManager(this.api,
                                                        this.manager,
                                                        {details: {checked: !this.options.details.hidden},
                                                         navigation: {checked: !this.options.navigation.hidden},
                                                         settings : this.options.settings}));
            this.toolbar.add({id: "break-layer-manager", type: "break"});
        }

        if (this.options.controls.layermenu)
        {
            this.toolbar.add(olexp.control.LayerMenu(this.api,
                                                     this.manager,
                                                     this.menu,
                                                     {settings : this.options.settings}));
            this.toolbar.add({id: "break-item-menu", type: "break"});
        }

        if (this.options.controls.layercontrol)
        {
            this.toolbar.add(olexp.control.LayerControl(this.api,
                                                        {settings : this.options.settings}));
            this.toolbar.add({id: "break-layer-control", type: "break"});
        }

        if (this.options.controls.graticule)
        {
            this.toolbar.add(olexp.control.Graticule(this.api,
                                                     {settings : this.options.settings}));
            this.toolbar.add({id: "break-graticule", type: "break"});
        }

        if (this.options.controls.measure)
        {
            this.toolbar.add(olexp.control.Measure(this.api,
                                                   {settings : this.options.settings}));
            this.toolbar.add({id: "break-measure", type: "break"});
        }

        if (this.options.controls.exportmap)
        {
            this.toolbar.add(olexp.control.ExportMap(this.api,
                                                     {settings : this.options.settings}));
            this.toolbar.add({id: "break-export-map", type: "break"});
        }

        if (this.options.controls.editsettings)
        {
            this.toolbar.add(olexp.control.EditSettings(this.api,
                                                        {settings : this.options.settings}));
            this.toolbar.add({id: "break-edit-settings", type: "break"});
        }

        this.layout.set(this.options.toolbar.type, {content: "",
                                                    show : {toolbar : true},
                                                    toolbar: this.toolbar});

    };

    /**
     * Destroy all w2ui and openlayer resources. The explorer is no longer
     * valid after calling this method.
     * @memberOf olexp
     * @param {olexp.ExplorerAPI} explorer Explorer API object
     * @public
     */
    olexp.destroy = function(explorer)
    {

        if (explorer.map !== undefined) explorer.map.setTarget(null);
        if (explorer.details !== undefined) explorer.details.destroy();
        if (explorer.outline !== undefined) explorer.outline.destroy();
        if (explorer.navigation !== undefined) explorer.navigation.destroy();
        if (explorer.toolbar !== undefined) explorer.toolbar.destroy();
        if (explorer.layout !== undefined) explorer.layout.destroy();

    };

    // ==================================================
    // Explorer API
    // --------------------------------------------------

    /**
     * Constructor to create an Explorer.
     * @class Explorer
     * @memberOf olexp
     * @param {string} id DOM id of the element div containing the Explorer.
     * @param {olexp.ExplorerOptions} [options] Explorer options
     * @public
     * @returns {olexp.ExplorerAPI} Explorer API
     * @throws {Error} DOM id must be defined and exist
     */
    olexp.Explorer = function(id, options) {
        var explorer = new Explorer(id, options);
        return explorer.api;
    };

}(olexp || {}));
