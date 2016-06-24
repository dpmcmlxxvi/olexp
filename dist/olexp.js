/* olexp 0.1.3 (c) Daniel Pulido <dpmcmlxxvi@gmail.com> */

/* global ol, w2ui */

/**
 * @namespace olexp
 */
var olexp = olexp || {};

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

        if (typeof id === 'undefined')
        {
            throw new Error('olexp.Explorer: id not defined');
        }
        else if ($('#'+id).length === 0)
        {
            throw new Error('olexp.Explorer: id not found');
        }

        // ==================================================
        // Default options
        // --------------------------------------------------
        
        // Prefix is used to create DOM ids and w2ui names. This ensures they
        // are unique and can have multiple instances on the same page
        var prefix = 'olexp-' + id;

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
                size      : '25%',
                type      : 'preview'
            },
            layers : {
                expanded : true,
                group    : true,
                img      : 'icon-folder',
                text     : 'Layers'
            },
            map : {
                type    : 'main'
            },
            navigation : {
                resizable : true,
                size      : '15%',
                type      : 'left'
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
                type  : 'main'
            },
            overlays : {
                expanded : true,
                group    : true,
                img      : 'icon-folder',
                text     : 'Overlays'
            },
            settings: {},
            toolbar : {
                size  : '40',
                style : 'padding: 5px;',
                type  : 'top'
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
                cls        : 'olexp-explorer-content',
                id         : prefix + '-explorer-id-content',
                details    : prefix + '-explorer-name-details',
                layout     : prefix + '-explorer-name-layout',
                navigation : prefix + '-explorer-name-navigation',
                outline    : prefix + '-explorer-name-outline',
                toolbar    : prefix + '-explorer-name-toolbar'
            },
            layers : {
                id : prefix + '-explorer-id-layers',
            },
            map : {
                content : ('<div id="' + prefix + '-explorer-id-map"' +
                           ' class="olexp-explorer-map"></div>'),
            },
            olmap : {
                target   : prefix + '-explorer-id-map',
            },
            overlays : {
                id : prefix + '-explorer-id-overlays',
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

        var div = $('<div>', {'id': this.options.explorer.id,
                              'class': this.options.explorer.cls});
        $('#'+id).append(div);

        // ==================================================
        // Main Layout
        // --------------------------------------------------

        this.layout = $('#'+this.options.explorer.id).w2layout({
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

        this.toolbar = $('').w2toolbar({
            name: this.options.explorer.toolbar
        });

        // ==================================================
        // Navigation pane Layout
        // --------------------------------------------------

        this.navigation = $('').w2layout({
            name     : this.options.explorer.navigation,
            onResize : function() {
                           if (me.hasOwnProperty('map'))
                           {
                               me.map.updateSize();
                           }
                           if (me.hasOwnProperty('details'))
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

        this.outline = $('').w2sidebar({
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

        this.details = $('').w2grid({
            columns : [
                          {
                              field    : 'property',
                              caption  : 'Property',
                              size     : '100%',
                              sortable : true
                          },
                          {
                               field    : 'value',
                               caption  : 'Value',
                               size     : '100%',
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
            this.toolbar.add({id: 'break-toolbar-hide', type: 'break'});
        }

        if (this.options.controls.layermanager)
        {
            this.toolbar.add(olexp.control.LayerManager(this.api,
                                                        this.manager,
                                                        {details: {checked: !this.options.details.hidden},
                                                         navigation: {checked: !this.options.navigation.hidden},
                                                         settings : this.options.settings}));
            this.toolbar.add({id: 'break-layer-manager', type: 'break'});
        }

        if (this.options.controls.layermenu)
        {
            this.toolbar.add(olexp.control.LayerMenu(this.api,
                                                     this.manager,
                                                     this.menu,
                                                     {settings : this.options.settings}));
            this.toolbar.add({id: 'break-item-menu', type: 'break'});
        }

        if (this.options.controls.layercontrol)
        {
            this.toolbar.add(olexp.control.LayerControl(this.api,
                                                        {settings : this.options.settings}));
            this.toolbar.add({id: 'break-layer-control', type: 'break'});
        }

        if (this.options.controls.graticule)
        {
            this.toolbar.add(olexp.control.Graticule(this.api,
                                                     {settings : this.options.settings}));
            this.toolbar.add({id: 'break-graticule', type: 'break'});
        }

        if (this.options.controls.measure)
        {
            this.toolbar.add(olexp.control.Measure(this.api,
                                                   {settings : this.options.settings}));
            this.toolbar.add({id: 'break-measure', type: 'break'});
        }

        if (this.options.controls.exportmap)
        {
            this.toolbar.add(olexp.control.ExportMap(this.api,
                                                     {settings : this.options.settings}));
            this.toolbar.add({id: 'break-export-map', type: 'break'});
        }

        if (this.options.controls.editsettings)
        {
            this.toolbar.add(olexp.control.EditSettings(this.api,
                                                        {settings : this.options.settings}));
            this.toolbar.add({id: 'break-edit-settings', type: 'break'});
        }

        this.layout.set(this.options.toolbar.type, {content: '',
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


/**
 * @namespace olexp.event
 */
olexp.event = olexp.event || {};

//==================================================
// Event Handler
//--------------------------------------------------
(function(olexp) {

    "use strict";

    /**
     * Handles listening for registered events
     * @param {object} listeners Initial listeners
     * @private
     */
    var Event = function(listeners)
    {

        // ==================================================
        // Collection of event listeners that are keyed by
        // the event name and valued by an array of callback
        // functions (e.g., {'name': [function1, function2]})
        // --------------------------------------------------
        this.listeners = $.extend({}, listeners);

    };

    /**
     * Add listener to event type
     * @memberOf Event.prototype
     * @param {string} type The event type.
     * @param {function} listener The listener function.
     * @param {object} opt_this The object to use as this in listener.
     * @private
     * @warning If event type is not already registered then listener is not. 
     */
    Event.prototype.on = function(type, listener, opt_this)
    {

        if (!(type in this.listeners)) return;

        var callback = listener;
        if (typeof opt_this !== 'undefined') callback = listener.bind(opt_this);
        this.listeners[type].push(callback);

    };

    /**
     * Register event to which to listen
     * @memberOf Event.prototype
     * @param {string} type The event type.
     * @private
     * @warning If event type is already registered then nothing is done.
     */
    Event.prototype.register = function(type)
    {

        if (type in this.listeners) return;
        this.listeners[type] = [];

    };

    /**
     * Trigger event and call listeners
     * @memberOf Event.prototype
     * @param {string} type The event type.
     * @private
     */
    Event.prototype.trigger = function()
    {
        var args = Array.prototype.slice.call(arguments);
        var type = args.shift();
        if (!(type in this.listeners)) return;
        
        // Call listeners with remaining arguments
        for (var i = 0; i < this.listeners[type].length; i++)
        {
            this.listeners[type][i].apply(this, args);
        }
    };

    /**
     * Unregister event to which to listen
     * @memberOf Event.prototype
     * @param {string} type The event type.
     * @private
     * @returns Listeners registered with given type
     * @warning If event type is already registered then nothing is done.
     */
    Event.prototype.unregister = function(type)
    {

        if (!(type in this.listeners)) return;
        var listeners = this.listeners[type];
        delete this.listeners[type];
        return listeners;

    };

    /**
     * Remove listener from event type
     * @memberOf Event.prototype
     * @param {string} type The event type.
     * @param {function} listener The listener function.
     * @param {object} opt_this The object to use as this in listener.
     * @private
     */
    Event.prototype.off = function(type, listener, opt_this)
    {

        if (!(type in this.listeners)) return;

        var callback = listener;
        if (typeof opt_this !== 'undefined') callback = listener.bind(opt_this);
        var index = this.listeners[type].indexOf(callback);
        if (index > -1) this.listeners[type].splice(index, 1);

    };

    /**
     * Event handler
     * @memberOf olexp.event
     * @param {object} listeners Initial listeners
     * @public
     */
    olexp.event.Event = function(listeners) {

        var handler = new Event(listeners);
        return handler;

    };

    return olexp;

}(olexp || {}));


/**
 * @namespace olexp.control
 */
olexp.control = olexp.control || {};

//==================================================
// Edit Settings Control
//--------------------------------------------------
(function(olexp) {

    "use strict";

    /**
     * Control to edit settings
     * @param {ol.Map} map Source map
     * @param {olexp.ExplorerSettings} settings olexp settings
     * @private
     */
    var EditSettings = function(map, settings)
    {

        //==================================================
        // Override Edit Settings Control default settings
        // with user provided values. 
        //--------------------------------------------------
        var olexpSettings = $.extend(true, {control : {
            EditSettings : {
                form   : {
                             header : '',
                             style  : 'border: 0px; background-color: transparent;'
                         },
                hint   : 'Edit Controls',
                popup  : {
                             height : 380,
                             style  : 'width: 100%; height: 100%;',
                             title  : 'Edit Controls',
                             width  : 225
                         },
                span   : 6
            }}}, settings);

        /**
         * Edit Settings control settings
         * @field
         * @private
         * @type {Object}
         */
        this.settings = olexpSettings.control.EditSettings;

        /**
         * Button element id
         * @field
         * @private
         * @type {string}
         */
        this.button = settings.prefix + '-control-edit-settings-button';

        /**
         * Control icon
         * @field
         * @private
         * @type {string}
         */
        this.icon = 'olexp-control-edit-settings';

        /**
         * Control element id
         * @field
         * @private
         * @type {string}
         */
        this.id = settings.prefix + '-control-edit-settings-form';

        /**
         * Map on which to edit controls
         * @field
         * @private
         * @type {ol.Map}
         */
        this.map = map;

        /**
         * Control w2ui name
         * @field
         * @private
         * @type {string}
         */
        this.name = settings.prefix + '-control-edit-settings-form';

    };

    /**
     * Display settings editor
     * @private
     */
    EditSettings.prototype.display = function()
    {
        var me = this;

        // ==================================================
        // Form fields
        // --------------------------------------------------
        var fields = [
            {
                html : {
                    caption : 'Full Screen',
                    span    : this.settings.span
                },
                name : 'fullscreen',
                type : 'checkbox'
            },
            {
                html : {
                    caption : 'Mouse Position',
                    span    : this.settings.span
                },
                name : 'mouseposition',
                type : 'checkbox'
            },
            {
                html : {
                           caption : 'Overview Map',
                           span    : this.settings.span
                       },
                name : 'overviewmap',
                type : 'checkbox'
            },
            {
                html : {
                    caption : 'Rotate',
                    span    : this.settings.span
                },
                name : 'rotate',
                type: 'checkbox'
            },
            {
                html : {
                    caption : 'Scale Line',
                    span    : this.settings.span
                },
                name : 'scaleline',
                type : 'checkbox'
            },
            {
                html : {
                    caption : 'Zoom',
                    span    : this.settings.span
                },
                name : 'zoom',
                type : 'checkbox'
            },
            {
                html : {
                    caption : 'Zoom Slider',
                    span    : this.settings.span
                },
                name : 'zoomslider',
                type : 'checkbox'
            },
            {
                html : {
                    caption : 'Zoom To Extent',
                    span    : this.settings.span
                },
                name : 'zoomtoextent',
                type : 'checkbox'
            }
        ];
        
        // ==================================================
        // Extract controls to be edited
        // --------------------------------------------------
        var record = {
            fullscreen    : this.isControlActive('fullscreen'),
            mouseposition : this.isControlActive('mouseposition'),
            overviewmap   : this.isControlActive('overviewmap'),
            rotate        : this.isControlActive('rotate'),
            scaleline     : this.isControlActive('scaleline'),
            zoom          : this.isControlActive('zoom'),
            zoomslider    : this.isControlActive('zoomslider'),
            zoomtoextent  : this.isControlActive('zoomtoextent')
        };

        // ==================================================
        // Function to process form changes
        // --------------------------------------------------
        var onChanges = function(changes)
        {
            for (var name in changes)
            {
                var enable = changes[name];
                me.setControl(name, enable);
            }
        };

        // ==================================================
        // Process popup form
        // --------------------------------------------------

        var formOptions = $.extend(this.settings.form, {
                              fields : fields,
                              name   : this.name,
                              record : record
                          });
        
        var popupOptions = this.settings.popup;

        olexp.util.popup(this.id, onChanges, formOptions, popupOptions);

    };

    /**
     * Get control with given name
     * @param {string} name Name of control to check if active
     * @private
     * @returns {ol.control.Control} Current control with given name or null if none
     */
    EditSettings.prototype.getControl = function(name)
    {
        var controls = this.map.getControls().getArray();
        for (var i = 0; i < controls.length; i++)
        {
            var control = controls[i];
            if (name === 'fullscreen' && control instanceof ol.control.FullScreen) return control;
            if (name === 'mouseposition' && control instanceof ol.control.MousePosition) return control;
            if (name === 'overviewmap' && control instanceof ol.control.OverviewMap) return control;
            if (name === 'rotate' && control instanceof ol.control.Rotate) return control;
            if (name === 'scaleline' && control instanceof ol.control.ScaleLine) return control;
            if (name === 'zoom' && control instanceof ol.control.Zoom) return control;
            if (name === 'zoomslider' && control instanceof ol.control.ZoomSlider) return control;
            if (name === 'zoomtoextent' && control instanceof ol.control.ZoomToExtent) return control;
        }
        return null;
    };

    /**
     * Check if control is active
     * @param {string} name Name of control to check if active
     * @private
     * @returns {boolean} True if control is active otherwise false
     */
    EditSettings.prototype.isControlActive = function(name)
    {
        var control = this.getControl(name);
        if (control !== null && control.getMap() !== null) return true;
        return false;
    };

    /**
     * Set control with given name
     * @param {string} name Name of control to check if active
     * @param {boolean} enable True if control is to be enabled otherwise false
     * @private
     */
    EditSettings.prototype.setControl = function(name, enable)
    {
        var control = this.getControl(name);
        if (control === null) return;
        var map = (enable ? this.map : null);
        control.setMap(map);
    };

    /**
     * Control to edit settings to enable/disable ol3 controls displayed on map.
     * @memberOf olexp.control
     * @param {olexp.Explorer} explorer Source explorer
     * @param {object} options Control options
     * @param {olexp.ExplorerSettings} options.settings Explorer settings
     * @public
     * @returns {external:jQuery.fn.w2toolbar.properties} EditSettings toolbar
     *          control
     */
    olexp.control.EditSettings = function(explorer, options) {

        var control = new EditSettings(explorer.map, options.settings);

        return {
            hint    : control.settings.hint,
            id      : control.button,
            img     : control.icon,
            onClick : function (event) {
                          control.display();
                      },
            type    : 'button'
        };

    };
    
    return olexp;
    
}(olexp || {}));

// ==================================================
// Export Map Control
// --------------------------------------------------
(function(olexp) {

    /**
     * Control to export map to image
     * @param {ol.Map} map Map on which to render measurements
     * @param {olexp.ExplorerSettings} settings olexp settings
     * @private
     */
    var ExportMap = function(map, settings)
    {

        //==================================================
        // Override Export Map Control option defaults
        // with user provided values. 
        //--------------------------------------------------
        var olexpSettings = $.extend(true, {control : {
            ExportMap : {
                filename : 'map.png',
                hint     : 'Export map'
            }}}, settings);

        /**
         * Export Map control settings
         * @field
         * @private
         * @type {Object}
         */
        this.settings = olexpSettings.control.ExportMap;

        /**
         * Anchor element id
         * @field
         * @private
         * @type {string}
         */
        this.anchor = settings.prefix + '-control-export-map-anchor';

        /**
         * Button element id
         * @field
         * @private
         * @type {string}
         */
        this.button = settings.prefix + '-control-export-map-button';

        /**
         * Filename of map to download
         * @field
         * @private
         * @type {string}
         */
        this.filename = this.settings.filename;

        /**
         * Icon selectors
         * @field
         * @private
         * @type {string}
         */
        this.icon = 'olexp-control-export-map';

        /**
         * Map on which to render measurements
         * @field
         * @private
         * @type {ol.Map}
         */
        this.map = map;

    };

    /**
     * Export current map to image. Activates anchor link download.
     * @private
     */
    ExportMap.prototype.toImage = function()
    {
        // ==================================================
        // Create a temporary anchor, click it, then remove it
        // --------------------------------------------------
        var id = this.anchor;
        var filename = this.filename;

        // Create callback when anchor is clicked
        var callback = function(e)
            {
                this.map.once('postcompose', function(event)
                {
                    anchor.href = event.context.canvas.toDataURL('image/png');
                });
                this.map.renderSync();
             };

        // Create anchor
        $('body').append('<a id="' + id + '" download="' + filename + '"></a>');
        var anchor = document.getElementById(id);
        anchor.addEventListener('click', callback.bind(this), false);

        // Click then remove
        $('#' + id)[0].click();
        $('#' + id).remove();
    };

    /**
     * Export map to image
     * @memberOf olexp.control
     * @param {olexp.Explorer} explorer Source explorer
     * @param {object} options Control options
     * @param {olexp.ExplorerSettings} options.settings Explorer settings
     * @public
     * @returns {external:jQuery.fn.w2toolbar.properties} ExportMap toolbar
     *          control
     */
    olexp.control.ExportMap = function(explorer, options) {

        var control = new ExportMap(explorer.map, options.settings);

        return {
            hint    : control.settings.hint,
            id      : control.button,
            img     : control.icon,
            onClick : function (event) {
                          control.toImage();
                      },
            type    : 'button'
        };

    };
    
    return olexp;
    
}(olexp || {}));

//==================================================
// Graticule Controls
//--------------------------------------------------
(function(olexp) {

    /**
     * Control to display graticule
     * @param {ol.Map} map Source map
     * @param {olexp.ExplorerSettings} settings olexp settings
     * @private
     */
    var Graticule = function(map, settings)
    {

        //==================================================
        // Override Graticule Control option defaults
        // with user provided values. 
        //--------------------------------------------------
        var olexpSettings = $.extend(true, {control : {
            Graticule : {
                enable  : false,
                form    : {
                              header : '',
                              style  : 'border: 0px; background-color: transparent;'
                          },
                hint    : 'Edit Grid Lines',
                options : {
                              color    : '000000',
                              lineDash : [0.5, 4],
                              width    : 2
                          },
                popup   : {
                              height : 225,
                              style  : 'border: 0px; background-color: transparent;',
                              title  : 'Edit Grid Lines',
                              width  : 300
                          },
                span    : 3
            }}}, settings);

        /**
         * Tile control settings
         * @field
         * @private
         * @type {Object}
         */
        this.settings = olexpSettings.control.Graticule;

        /**
         * Button element id
         * @field
         * @private
         * @type {string}
         */
        this.button = settings.prefix + '-control-graticule-button';

        /**
         * Control icon
         * @field
         * @private
         * @type {string}
         */
        this.icon = 'olexp-control-graticule';

        /**
         * Form element id
         * @field
         * @private
         * @type {string}
         */
        this.id = settings.prefix + '-control-graticule';

        /**
         * Parent explorer
         * @field
         * @private
         * @type {ol.Map}
         */
        this.map = map;

        /**
         * Form w2ui name
         * @field
         * @private
         * @type {string}
         */
        this.name = settings.prefix + '-control-graticule-form';

        /**
         * Utility tool
         * @field
         * @private
         * @type {olexp.util.Util}
         */
        this.util = new olexp.util.Util(olexpSettings);

        /**
         * Graticule tool
         * @field
         * @private
         * @type {ol.Graticule}
         */
        this.graticule = this.util.getGraticule((this.settings.enable ? this.map : null),
                                                $.extend({}, this.settings.options));

    };

    /**
     * Display graticule form
     * @private
     */
    Graticule.prototype.display = function()
    {

        var me = this;

        // ==================================================
        // Form fields
        // --------------------------------------------------
        var fields = [
            {
                html     : {
                    caption : 'Enable',
                    span    : this.settings.span
                },
                name     : 'enable',
                required : true,
                type     : 'checkbox'
            },
            {
                html     : {
                    caption : 'Color',
                    span    : this.settings.span
                },
                name     : 'color',
                options  : {
                    silent: false
                },
                required : true, 
                type     : 'color',
            },
            {
                html     : {
                    caption : 'Width',
                    span    : this.settings.span
                },
                name     : 'width',
                options  : {
                    arrows      : true,
                    max         : 4,
                    min         : 0.25,
                    placeholder : '0.25 - 4',
                    silent      : false,
                    step        : 0.25
                },
                required : true, 
                type     : 'float',
            }
        ];

        // ==================================================
        // Define allowable tile types
        // --------------------------------------------------
        var record = this.graticule.olexp_record;

        // ==================================================
        // Function to process form changes
        // --------------------------------------------------
        var onChanges = function(changes)
        {
            for (var name in changes)
            {
                record[name] = changes[name];
            }
            var options = $.extend({}, record);
            delete options.enable;
            me.graticule.setMap(null);
            me.graticule = me.util.getGraticule((record.enable ? me.map : null), options);
        };

        // ==================================================
        // Process popup form
        // --------------------------------------------------

        var formOptions = $.extend(this.settings.form, {
            fields : fields,
            name   : this.name,
            record : record
        });

        var popupOptions = this.settings.popup;

        olexp.util.popup(this.id, onChanges, formOptions, popupOptions);

    };

     /**
      * Control to edit grid lines.
      * @memberOf olexp.control
      * @param {olexp.Explorer} explorer Source Explorer
      * @param {object} options Control options
      * @param {olexp.ExplorerSettings} options.settings Explorer settings
      * @public
      * @returns {external:jQuery.fn.w2toolbar.properties} Graticule toolbar
      *          control
      */
     olexp.control.Graticule = function(explorer, options) {

         if (typeof options === "undefined") options = {};
         if (typeof options.settings === "undefined") options.settings = {};

         var control = new Graticule(explorer.map, options.settings);
        
         return {
             hint    : control.settings.hint,
             id      : control.button,
             img     : control.icon,
             onClick : function (event) {
                           control.display();
                       },
             type    : 'button'
         };

    };

    return olexp;
    
}(olexp || {}));

//==================================================
// Layer Controls
//--------------------------------------------------
(function(olexp) {

    /**
     * Control to add layers
     * @param {ol.Map} map
     * @param {olexp.ExplorerSettings} settings olexp settings
     * @private
     */
    var LayerControl = function(map, settings)
    {

        //==================================================
        // Override Layer Control Tile option defaults
        // with user provided values. 
        //--------------------------------------------------
        var olexpSettings = $.extend(true, {control : {
            LayerControlTile : {
                form   : {
                    header : '',
                    style  : 'border: 0px; background-color: transparent;'
                },
                hint   : 'Add Tile Layer',
                popup  : {
                    height : 165,
                    style  : 'border: 0px; background-color: transparent;',
                    title  : 'Add Tile Layer',
                    width  : 290
                },
                span   : 3
            },
            LayerControlVector : {
                form   : {
                    header : ('File Types: ' + $.map(olexp.util.FileTypes,
                             function(o) { return ' ' + o.name; })),
                    style  : 'border: 0px; background-color: transparent;'
                },
                hint   : 'Add Vector Layer',
                popup  : {
                    height : 195,
                    style  : 'border: 0px; background-color: transparent;',
                    title  : 'Add Vector Layer',
                    width  : 350
                },
                span   : 4
            }}}, settings);

        /**
         * Tile control settings
         * @field
         * @private
         * @type {Object}
         */
        this.settingsTile = olexpSettings.control.LayerControlTile;

        /**
         * Vector control settings
         * @field
         * @private
         * @type {Object}
         */
        this.settingsVector = olexpSettings.control.LayerControlVector;

        /**
         * Control icons
         * @field
         * @private
         * @type {string}
         */
        this.icons = {
            tile   : 'olexp-control-layer-control-add-tile',
            vector : 'olexp-control-layer-control-add-vector'
        };

        /**
         * Button element ids
         * @field
         * @private
         * @type {string}
         */
        this.buttons = {
            tile   : settings.prefix + '-control-layer-control-add-tile-button',
            vector : settings.prefix + '-control-layer-control-add-vector-button'
        };

        /**
         * Controls element ids
         * @field
         * @private
         * @type {string}
         */
        this.ids = {
            tile   : settings.prefix + '-control-layer-control-add-tile',
            vector : settings.prefix + '-control-layer-control-add-vector'
        };

        /**
         * Parent map
         * @field
         * @private
         * @type {ol.Map}
         */
        this.map = map;

        /**
         * w2ui form names
         * @field
         * @private
         * @type {object}
         */
        this.names = {
            tile   : settings.prefix + '-control-tile-form',
            vector : settings.prefix + '-control-vector-form'
        };

        /**
         * Utility tool
         * @field
         * @private
         * @type {olexp.util.Util}
         */
        this.util = new olexp.util.Util(this.map);

    };

    /**
     * Display add tile form
     * @private
     */
    LayerControl.prototype.tile = function()
    {
        var me = this;

        // ==================================================
        // Define allowable tile types
        // --------------------------------------------------
        var tileTypes = this.util.getTileTypes();
        var items = $.map(tileTypes, function(val) { return val.name; });

        // ==================================================
        // Form fields
        // --------------------------------------------------
        var fields = [
            {
                field    : 'tile_source',
                html     : {
                               caption : 'Source',
                               span    : this.settingsTile.span
                           },
                options  : {
                               items: items
                           },
                required : true, 
                type     : 'list'
             }
         ];

        // ==================================================
        // Form record
        // --------------------------------------------------
        var record = {};
        record[fields[0].field] = null;

        // ==================================================
        // Function to process form changes
        // --------------------------------------------------
        var onChanges = function(changes)
        {
            for (var fieldName in changes)
            {
                if (fieldName === fields[0].field)
                {
                    // Search for selected tile in list
                    var typeName = changes[fieldName].id;
                    for (var key in tileTypes)
                    {
                        if (typeName !== tileTypes[key].name) continue;
                        var tileType = tileTypes[key];
                        var tileClass = tileType['class'];
                        var tile = new ol.layer.Tile({
                            source: new tileClass(tileType.settings)
                        });
                        tile.set('name', typeName);
                        me.map.addLayer(tile);
                    }
                }
            }
        };

        // ==================================================
        // Process popup form
        // --------------------------------------------------

        var formOptions = $.extend(this.settingsTile.form, {
            fields : fields,
            name   : this.names.tile,
            record : record
        });

        var popupOptions = this.settingsTile.popup;

        olexp.util.popup(this.ids.tile, onChanges, formOptions, popupOptions);

    };

    /**
     * Display add vector form
     * @private
     */
    LayerControl.prototype.vector = function()
    {
        var me = this;

        // ==================================================
        // Form fields
        // --------------------------------------------------
        var fields = [
            {
                field    : 'vector_source',
                html     : {
                               caption : 'Source',
                               span    : this.settingsVector.span
                           },
                options  : {
                               placeholder : 'Click to add file',
                               silent      : false
                           },
                required : true, 
                type     : 'file'
            }
        ];

        // ==================================================
        // Form record
        // --------------------------------------------------
        var record = {};
        record[fields[0].field] = null;

        // ==================================================
        // Function to process form changes
        // --------------------------------------------------
        var onChanges = function(changes)
        {
            for (var fieldName in changes)
            {
                if (fieldName === fields[0].field)
                {
                    // Search for selected tile in list
                    for (var change in changes[fieldName])
                    {

                        // Check that file contents are valid
                        var content = changes[fieldName][change].content;
                        if (typeof content === 'undefined' || content === null) continue;

                        // Extract filename and contents
                        var filename = changes[fieldName][change].name;
                        var name = filename.replace(/\.[^/.]+$/, "");

                        // Get file reader
                        var reader = olexp.util.getReader(filename);
                        if (reader === null)
                        {
                            w2alert('Unable to open file ' + filename, 'Error');
                            return;
                        }

                        // Convert file contents from base64 to text
                        // Read features and convert to map coordinates
                        var text = atob(content);
                        var projection = me.map.getView().getProjection();
                        var options = {'featureProjection' : projection};
                        var features = reader.readFeatures(text, options);

                        // Add features to map
                        me.util.addLayerVector(me.map, name, features);
                    }
                }
            }
        };

        // ==================================================
        // Process popup form
        // --------------------------------------------------

        var formOptions = $.extend(this.settingsVector.form, {
            fields : fields,
            name   : this.names.vector,
            record : record
        });

        var popupOptions = this.settingsVector.popup;
        
        olexp.util.popup(this.ids.vector, onChanges, formOptions, popupOptions);

    };

    /**
     * Control to add layers
     * @memberOf olexp.control
     * @param {olexp.Explorer} explorer Source Explorer
     * @param {object} options Control options
     * @param {boolean} options.tile Enable tile control
     * @param {boolean} options.vector Enable vector control
     * @param {olexp.ExplorerSettings} options.settings Explorer settings
     * @public
     * @returns {array} Array of w2toolbar properties
     */
    olexp.control.LayerControl = function(explorer, options) {
        
        if (typeof options === "undefined") options = {};
        if (typeof options.tile === "undefined") options.tile = true;
        if (typeof options.vector === "undefined") options.vector = true;
        if (typeof options.settings === "undefined") options.settings = {};

        var tool = new LayerControl(explorer.map, options.settings);
        
        // Add controls for those selected
        var controls = [];
        if (options.tile)
        {
            controls.push({
                hint    : tool.settingsTile.hint,
                id      : tool.buttons.tile,
                img     : tool.icons.tile,
                onClick : function (event) {
                              tool.tile();
                          },
                type    : 'button'
            });
        }
        if (options.vector)
        {
            controls.push({
                hint    : tool.settingsVector.hint,
                id      : tool.buttons.vector,
                img     : tool.icons.vector,
                onClick : function (event) {
                              tool.vector();
                          },
                type    : 'button'
            });
        }

       return controls;

    };

    return olexp;
    
}(olexp || {}));

//==================================================
// Layer Manager Controls
//--------------------------------------------------
olexp = (function(olexp) {

    /**
     * Control to manage layers
     * @param {olexp.Explorer} explorer Explorer
     * @param {olexp.manager.Manager} manager Explorer manager
     * @param {olexp.ExplorerSettings} settings olexp settings
     * @private
     */
    var LayerManager = function(explorer, manager, settings)
    {

        //==================================================
        // Override Layer Manager option defaults
        // with user provided values. 
        //--------------------------------------------------
        var olexpSettings = $.extend(true, {control : {
            LayerManager : {
                hintDetailsHide : 'Hide details',
                hintDetailsShow : 'Show details',
                hintMoveDown    : 'Move item down',
                hintMoveUp      : 'Move item up',
                hintOutlineHide : 'Hide outline',
                hintOutlineShow : 'Show outline'
            }}}, settings);

        /**
         * Button element ids
         * @field
         * @private
         * @type {string}
         */
        this.buttons = {
            details    : settings.prefix + '-control-layer-manager-button-details',
            down       : settings.prefix + '-control-layer-manager-button-down',
            navigation : settings.prefix + '-control-layer-manager-button-navigation',
            up         : settings.prefix + '-control-layer-manager-button-up'
        };

        /**
         * Explorer
         * @field
         * @private
         * @type {olexp.Explorer}
         */
        this.explorer = explorer;

        /**
         * Control icon
         * @field
         * @private
         * @type {string}
         */
        this.icons = {
            details    : 'olexp-control-layer-manager-details',
            down       : 'olexp-control-layer-manager-down',
            navigation : 'olexp-control-layer-manager-navigation',
            up         : 'olexp-control-layer-manager-up'
        };

        /**
         * Explorer manager
         * @field
         * @private
         * @type {olexp.manager.Manager}
         */
        this.manager = manager;

        /**
         * Layer Manager control settings
         * @field
         * @private
         * @type {string}
         */
        this.settings = olexpSettings.control.LayerManager;

        // ==================================================
        // Add layer callback events
        // --------------------------------------------------
        this.manager.on('remove:item', this.onItemRemoved, this);
        this.manager.on('select:item', this.onItemSelected, this);

    };

    /**
     * Show details
     * @private
     */
    LayerManager.prototype.details = function()
    {
        this.explorer.navigation.toggle(this.explorer.options.details.type);
        // Set control tooltip based on navigation panel visibility
        var details = this.explorer.navigation.get(this.explorer.options.details.type);
        var item = this.explorer.toolbar.get(this.buttons.details);
        item.hint = this.hintDetails(details.hidden);
        this.explorer.toolbar.refresh();
    };

    /**
     * Move layer down
     * @private
     */
    LayerManager.prototype.down = function()
    {
        this.manager.moveDown();
    };

    /**
     * Set details control hint text
     * @param {boolean} hidden True if details is hidden otherwise false
     * @private
     */
    LayerManager.prototype.hintDetails = function(hidden)
    {
        return (hidden ? this.settings.hintDetailsShow : this.settings.hintDetailsHide);
    };

    /**
     * Set navigation control hint text
     * @param {boolean} hidden True if navigation is hidden otherwise false
     * @private
     */
    LayerManager.prototype.hintNavigation = function(hidden)
    {
        return (hidden ? this.settings.hintOutlineShow : this.settings.hintOutlineHide);
    };

    /**
     * Show navigation
     * @private
     */
    LayerManager.prototype.navigation = function()
    {
        this.explorer.layout.toggle(this.explorer.options.navigation.type);
        // Set control tooltip based on navigation panel visibility
        var navigation = this.explorer.layout.get(this.explorer.options.navigation.type);
        var item = this.explorer.toolbar.get(this.buttons.navigation);
        item.hint = this.hintNavigation(navigation.hidden);
        this.explorer.toolbar.refresh();
    };

    /**
     * Callback when layer removed
     * @param {olexp.item.Item} item OpenLayers Explorer Item
     * @private
     */
    LayerManager.prototype.onItemRemoved = function(item)
    {

        if (this.manager.isSelected(item.id))
        {
            this.explorer.toolbar.disable(this.buttons.up);
            this.explorer.toolbar.disable(this.buttons.down);
        }

    };

    /**
     * Callback when node is selected either by click or double click
     * @param {string} id Layer ID
     * @private
     */
    LayerManager.prototype.onItemSelected = function(id)
    {
        if (typeof id === 'undefined') return;
        var item = this.manager.getById(id);
        if (item === null) return;
        var node = this.manager.getNode(item.id);
        if (node.disabled)
        {
            this.explorer.toolbar.disable(this.buttons.up);
            this.explorer.toolbar.disable(this.buttons.down);
        }
        else
        {
            this.explorer.toolbar.enable(this.buttons.up);
            this.explorer.toolbar.enable(this.buttons.down);
        }
    };

    /**
     * Move layer up
     * @private
     */
    LayerManager.prototype.up = function()
    {
        this.manager.moveUp();
    };

    /**
     * Control to manage layers
     * @memberOf olexp.control
     * @param {olexp.Explorer} explorer Explorer
     * @param {olexp.manager.Manager} manager Explorer manager
     * @param {object} options Control options
     * @param {object} options.details Enable details panel options
     * @param {boolean} options.details.enabled Enable details control
     * @param {boolean} options.details.checked Indicate checked state
     * @param {boolean} options.down Enable down control
     * @param {object} options.navigation Enable navigation options
     * @param {boolean} options.navigation.enabled Enable navigation control
     * @param {boolean} options.navigation.checked Indicate checked state
     * @param {olexp.ExplorerSettings} options.settings Explorer settings 
     * @param {boolean} options.up Enable up control
     * @public
     * @returns {array} Array of external:jQuery.fn.w2toolbar.properties
     */
    olexp.control.LayerManager = function(explorer, manager, options) {
        
        if (typeof options === "undefined") options = {};
        
        if (typeof options.details === "undefined") options.details = {};
        if (typeof options.details.enabled === "undefined") options.details.enabled = true;
        if (typeof options.details.checked === "undefined") options.details.checked = true;
        if (typeof options.down === "undefined") options.down = true;
        if (typeof options.navigation === "undefined") options.navigation = {};
        if (typeof options.navigation.enabled === "undefined") options.navigation.enabled = true;
        if (typeof options.navigation.checked === "undefined") options.navigation.checked = true;
        if (typeof options.up === "undefined") options.up = true;

        var tool = new LayerManager(explorer, manager, options.settings);
        
        // Add controls for those selected
        var controls = [];
        if (options.navigation.enabled)
        {
            // Determine control tooltip based on navigation panel visibility
            controls.push({
                checked : options.navigation.checked,
                hint    : tool.hintNavigation(!options.navigation.checked),
                id      : tool.buttons.navigation,
                img     : tool.icons.navigation,
                onClick : function (event) {
                              tool.navigation();
                          },
                type    : 'check'
            });
        }
        if (options.details.enabled)
        {
            // Determine control tooltip based on details panel visibility
            controls.push({
                checked : options.details.checked,
                hint    : tool.hintDetails(!options.details.checked),
                id      : tool.buttons.details,
                img     : tool.icons.details,
                onClick : function (event) {
                              tool.details();
                          },
                type    : 'check'
            });
        }
        if (options.up)
        {
            controls.push({
                disabled : true,
                hint     : tool.settings.hintMoveUp,
                id       : tool.buttons.up,
                img      : tool.icons.up,
                onClick  : function (event) {
                              tool.up();
                          },
                type     : 'button'
            });
        }
        if (options.down)
        {
            controls.push({
                disabled : true,
                hint     : tool.settings.hintMoveDown,
                id       : tool.buttons.down,
                img      : tool.icons.down,
                onClick  : function (event) {
                               tool.down();
                           },
                type     : 'button'
            });
        }

       return controls;

    };

    return olexp;
    
}(olexp || {}));

//==================================================
// Layer Menu Control
//--------------------------------------------------
(function(olexp) {

    /**
     * Control to display layer menu properties
     * @param {olexp.Explorer} explorer Explorer
     * @param {olexp.manager.Manager} manager Explorer manager
     * @param {object} menu Item Menus {items     : list of menu item,
     *                                  callbacks : list of menu item callbacks} 
     * @param {olexp.ExplorerSettings} settings olexp.ExplorerSettings
     * @private
     */
    var LayerMenu = function(explorer, manager, menu, settings)
    {

        //==================================================
        // Override Layer Menu Control option defaults
        // with user provided values. 
        //--------------------------------------------------
        var olexpSettings = $.extend(true, {control : {
            LayerMenu : {
                arrow    : true,
                hint     : 'Item Options',
                text     : ''
            }}}, settings);

        /**
         * Button element id
         * @field
         * @private
         * @type {string}
         */
        this.button = settings.prefix + '-control-layer-menu';

        /**
         * Explorer
         * @field
         * @private
         * @type {olexp.Explorer}
         */
        this.explorer = explorer;

        /**
         * Control icon
         * @field
         * @private
         * @type {string}
         */
        this.icon = 'olexp-control-layer-menu';

        /**
         * Explorer manager
         * @field
         * @private
         * @type {olexp.manager.Manager}
         */
        this.manager = manager;

        /**
         * Menu items and callbacks
         * @field
         * @private
         * @type {Object}
         */
        this.menu = menu;

        /**
         * Layer Menu control settings
         * @field
         * @private
         * @type {Object}
         */
        this.settings = olexpSettings.control.LayerMenu;

        // ==================================================
        // Add layer callback events
        // --------------------------------------------------
        this.manager.on('remove:item', this.onItemRemoved, this);
        this.manager.on('select:item', this.onItemSelected, this);

    };

    /**
     * Callback when layer removed
     * @param {olexp.item.Item} item OpenLayers Explorer Item
     * @private
     */
    LayerMenu.prototype.onItemRemoved = function(item)
    {

        if (this.manager.isSelected(item.id))
        {
            this.explorer.toolbar.disable(this.button);
        }

    };

    /**
     * Callback when node is selected either by click or double click
     * @param {string} id Layer ID
     * @private
     */
    LayerMenu.prototype.onItemSelected = function(id)
    {
        if (typeof id === 'undefined') return;
        var item = this.manager.getById(id);
        if (item === null) return;
        var node = this.manager.getNode(item.id);
        if (node.disabled)
        {
            this.explorer.toolbar.disable(this.button);
        }
        else
        {
            this.explorer.toolbar.enable(this.button);
        }
    };

    /**
     * Display layer properties menu control
     * @memberOf olexp.control
     * @param {olexp.Explorer} explorer Source explorer
     * @param {olexp.manager.Manager} manager Explorer manager
     * @param {object} menu Item Menu items and callbacks 
     * @param {Array} menu.items List of menu items
     * @param {Array} menu.callbacks List of menu item callbacks
     * @param {object} options Control options
     * @param {olexp.ExplorerSettings} options.settings Explorer settings
     * @public
     * @returns {external:jQuery.fn.w2toolbar.properties} LayerMenu toolbar
     *          control
     */
    olexp.control.LayerMenu = function(explorer, manager, menu, options) {

        var control = new LayerMenu(explorer, manager, menu, options.settings);

        explorer.toolbar.on('click', function(event) {

            // Check if any item is selected
            if (explorer.outline.selected === null) return;

            // Check if layer menu item was selected
            var id = control.button + ':';
            if (event.target.indexOf(id) < 0) return;
            var menuid = event.target.replace(id, "");

            // Create dummy menu event
            if (menuid in menu.callbacks)
            {
                menu.callbacks[menuid]({target : explorer.outline.selected});
            }

        });

        return {
            arrow    : control.settings.arrow,
            disabled : true,
            hint     : control.settings.hint,
            id       : control.button,
            img      : control.icon,
            items    : control.menu.items,
            text     : control.settings.text,
            type     : 'menu'
        };

    };

    return olexp;

}(olexp || {}));

//==================================================
// Measurement Controls
//--------------------------------------------------
(function(olexp) {

    /**
     * Control to calculate measurements
     * @param {olexp.Explorer} explorer Explorer
     * @param {olexp.ExplorerSettings} settings olexp settings
     * @private
     */
    var Measurement = function(explorer, settings)
    {

        //==================================================
        // Override Measurement option defaults
        // with user provided values. 
        //--------------------------------------------------
        var olexpSettings = $.extend(true, {control : {
            Measurement : {
                hintArea   : 'Measure area',
                hintLength : 'Measure length'
            }}}, settings);

        /**
         * Parent explorer
         * @field
         * @private
         * @type {olexp.Explorer}
         */
        this.explorer = explorer;

        /**
         * Control icon
         * @field
         * @private
         * @type {string}
         */
        this.icons = {
            area   : 'olexp-control-measure-area',
            length : 'olexp-control-measure-length'
        };

        /**
         * Button element id
         * @field
         * @private
         * @type {string}
         */
        this.ids = {
            area   : settings.prefix + '-control-measure-area-button',
            length : settings.prefix + '-control-measure-length-button'
        };

        /**
         * Measurement control settings
         * @field
         * @private
         * @type {Object}
         */
        this.settings = olexpSettings.control.Measurement;

        /**
         * Measurement tool
         * @field
         * @private
         * @type {olexp.measure.Tool}
         */
        this.tool = new olexp.measure.Tool(explorer.map,
                                           {type: olexp.measure.Type.LINE,
                                            settings: settings});

    };

    /**
     * Start area measurement
     * @memberOf Measurement.prototype
     * @private
     */
    Measurement.prototype.area = function() {
        var enable = !this.explorer.toolbar.get(this.ids.area).checked;
        this.measure(olexp.measure.Type.AREA, enable);
    };

    /**
     * Start length measurement
     * @memberOf Measurement.prototype
     * @private
     */
    Measurement.prototype.length = function()
    {
        var enable = !this.explorer.toolbar.get(this.ids.length).checked;
        this.measure(olexp.measure.Type.LINE, enable);
    };

    /**
     * Run measurement tool
     * @memberOf Measurement.prototype
     * @param {olexp.measure.Type} type Measurement type to start.
     * @param {boolean} enable True if measurement is started otherwise false
     * @private
     */
    Measurement.prototype.measure = function(type, enable)
    {
        this.tool.setEnable(false);
        if (enable)
        {
            this.tool.setType(type);
            this.tool.setEnable(true);
        }
    };

    /**
     * Control to export map to image
     * @memberOf olexp.control
     * @param {olexp.Explorer} explorer Explorer
     * @param {object} options Control options
     * @param {boolean} options.area Enable area measurement control
     * @param {boolean} options.length Enable length measurement control
     * @param {olexp.ExplorerSettings} options.settings Explorer settings
     * @public
     * @returns {array} Array of w2toolbar properties
     */
    olexp.control.Measure = function(explorer, options) {
        
        if (typeof options === "undefined") options = {};
        if (typeof options.area === "undefined") options.area = true;
        if (typeof options.length === "undefined") options.length = true;
        if (typeof options.settings === "undefined") options.settings = {};

        var tool = new Measurement(explorer, options.settings);
        
        // Add controls for those selected
        var controls = [];
        if (options.area)
        {
            controls.push({
                hint    : tool.settings.hintArea,
                id      : tool.ids.area,
                img     : tool.icons.area,
                onClick : function (event) {
                              if (options.length)
                              {
                                  explorer.toolbar.uncheck(tool.ids.length);
                              }
                              tool.area();
                          },
                type    : 'check'
            });
        }
        if (options.length)
        {
            controls.push({
                hint    : tool.settings.hintLength,
                id      : tool.ids.length,
                img     : tool.icons.length,
                onClick : function (event) {
                              if (options.area)
                              {
                                  explorer.toolbar.uncheck(tool.ids.area);
                              }
                              tool.length();
                           },
                type    : 'check'
            });
        }

       return controls;

    };

    return olexp;
    
}(olexp || {}));

//==================================================
// Toolbar Hide Control
//--------------------------------------------------
(function(olexp) {

    /**
     * Control to hide toolbar
     * @param {olexp.Explorer} explorer Source explorer
     * @param {object} options Control options {hidden   : True if toolbar is
     *                                                     initially hidden,
     *                                          settings : olexp.ExplorerSettings}
     * @private
     */
    var ToolbarHide = function(explorer, options)
    {
    
        //==================================================
        // Override Toolbar Hide option defaults
        // with user provided values. 
        //--------------------------------------------------
        var olexpSettings = $.extend(true, {control : {
            ToolbarHide : {
                hint : 'Hide toolbar'
            }}}, options.settings);
    
        /**
         * Button element id
         * @field
         * @private
         * @type {string}
         */
        this.button = options.settings.prefix + '-control-toolbar-hide-button';
    
        /**
         * Source explorer
         * @field
         * @private
         * @type {olexp.Explorer}
         */
        this.explorer = explorer;
    
        /**
         * Control icon
         * @field
         * @private
         * @type {string}
         */
        this.icon = 'olexp-control-toolbar-hide';
    
        /**
         * ToolbarHide control settings
         * @field
         * @private
         * @param {Object} settings
         */
        this.settings = olexpSettings.control.ToolbarHide;
    
        /**
         * ol.control to show toolbar when hidden
         * @field
         * @private
         * @type {olexp.ol.ToolbarShow}
         */
        this.show = olexp.ol.ToolbarShow(this.explorer, options);
    
    };

    /**
     * Toolbar visibility
     * @private
     */
    ToolbarHide.prototype.hide = function()
    {
        this.explorer.layout.hide(this.explorer.options.toolbar.type);
        this.show.setMap(this.explorer.map);
    };
    
     /**
      * Control to set toolbar visibility
      * @memberOf olexp.control
      * @param {olexp.Explorer} explorer Source Explorer
      * @param {object} options Control options
      * @param {boolean} options.hidden True if toolbar is initially hidden
      * @param {olexp.ExplorerSettings} options.settings Explorer settings
      * @public
      * @returns {external:jQuery.fn.w2toolbar.properties} ToolbarHide toolbar
      *          control
      */
    olexp.control.ToolbarHide = function(explorer, options) {
    
        var control = new ToolbarHide(explorer, options);

         return {
             hint    : control.settings.hint,
             id      : control.button,
             img     : control.icon,
             onClick : function (event) {
                           control.hide();
                       },
             type    : 'button'
         };
    };
    
    return olexp;

}(olexp || {}));


/**
 * @namespace olexp.item
 */
olexp.item = olexp.item || {};

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


/**
 * @namespace olexp.manager
 */
olexp.manager = olexp.manager || {};

//==================================================
// Manager
//--------------------------------------------------
(function(olexp) {

    "use strict";

    /**
     * Item manager that synchronizes adding and removing items from the map
     * sidebar and the corresponding layers on the ol3 map
     * @class
     * @memberOf olexp.manager
     * @param {external:ol.Map} map Managed map
     * @param {external:jQuery.fn.w2sidebar} outline Managed outline sidebar
     * @param {external:jQuery.fn.w2grid} details Details grid
     * @param {string} layersId w2ui name of layers node
     * @param {string} overlaysId w2ui name of overlays node
     * @private
     */
    var ManagerAPI = function(map, outline, details, layersId, overlaysId)
    {

        /**
         * Event listeners
         * @ignore
         * @type {olexp.event.Event}
         */
        this.event = new olexp.event.Event({'select:item' : []});

        /**
         * Layer Manager
         * @ignore
         * @type {olexp.manager.NodeManager}
         */
        this.managerLayers = new olexp.manager.NodeManager(layersId, 
                                                           map.getLayers(),
                                                           outline,
                                                           details);

        /**
         * Layers node id prefix
         * @ignore
         * @type {string}
         */
        this.layersId = layersId;

        /**
         * Overlay Manager
         * @ignore
         * @type {olexp.manager.NodeManager}
         */
        this.managerOverlays = new olexp.manager.NodeManager(overlaysId,
                                                             map.getOverlays(),
                                                             outline,
                                                             details);

        /**
         * Managed map
         * @ignore
         * @type {ol.Map}
         */
        this.map = map;
        this.map.on('change:layergroup', this.onLayerGroupChanged, this);

        /**
         * Managed outline sidebar
         * @ignore
         * @type {external:jQuery.fn.w2sidebar}
         */
        this.outline = outline;

        /**
         * Overlays node id prefix
         * @ignore
         * @type {string}
         */
        this.overlaysId = overlaysId;

    };

    /**
     * Check if id is a Layer node
     * @ignore
     * @memberOf olexp.manager.ManagerAPI.prototype
     * @param {string} id Item ID
     * @private
     * @returns True if id a Layer node otherwise false
     */
    ManagerAPI.prototype.isIdLayerNode = function(id)
    {
        if (typeof id !== 'string') return false;
        return id.indexOf(this.layersId) === 0;
    };

    /**
     * Check if id is a Overlay node
     * @ignore
     * @memberOf olexp.manager.ManagerAPI.prototype
     * @param {string} id Item ID
     * @private
     * @returns True if id is a Overlay node otherwise false
     */
    ManagerAPI.prototype.isIdOverlayNode = function(id)
    {
        if (typeof id !== 'string') return false;
        return id.indexOf(this.overlaysId) === 0;
    };

    /**
     * Check if item is selected
     * @function isSelected
     * @memberOf olexp.manager.ManagerAPI.prototype
     * @param {string} id Item ID
     * @public
     * @returns True if item is selected otherwise false
     */
    ManagerAPI.prototype.isSelected = function(id)
    {
        return id === this.outline.selected;
    };

    /**
     * Get item based on id
     * @function getById
     * @memberOf olexp.manager.ManagerAPI.prototype
     * @param {string} id Item ID
     * @public
     * @returns {null|olexp.item.Item} Managed item or null if not found
     */
    ManagerAPI.prototype.getById = function(id)
    {

        // Check if this is a layer node
        if (this.isIdLayerNode(id))
        {
            return this.managerLayers.getById(id);
        }
        // Check if this is a overlay node
        else if (this.isIdOverlayNode(id))
        {
            return this.managerOverlays.getById(id);
        }

        return null;

    };

    /**
     * Get layer details
     * @function getDetails
     * @memberOf olexp.manager.ManagerAPI.prototype
     * @param {string} id Layer ID
     * @public
     * @returns {array} Item details
     */
    ManagerAPI.prototype.getDetails = function(id)
    {

        // Check if this is a layer node
        if (this.isIdLayerNode(id))
        {
            var itemLayer = this.managerLayers.getById(id);
            if (itemLayer !== null) return itemLayer.getDetails();
        }
        // Check if this is a overlay node
        else if (this.isIdOverlayNode(id))
        {
            var itemOverlay = this.managerOverlays.getById(id);
            if (itemOverlay !== null) return itemOverlay.getDetails();
        }

        return [];

    };

    /**
     * Get node for item
     * @function getNode
     * @memberOf olexp.manager.ManagerAPI.prototype
     * @param {string} id Item ID
     * @public
     * @returns {external:jQuery.fn.w2sidebar.nodes} w2ui sidebar node
     */
    ManagerAPI.prototype.getNode = function(id)
    {
        return this.outline.get(id);
    };

    /**
     * Move item down in map list
     * @function moveDown
     * @memberOf olexp.manager.ManagerAPI.prototype
     * @param {string} id Item ID
     * @public
     * @returns {boolean} True if moved otherwise false
     */
    ManagerAPI.prototype.moveDown = function(id)
    {

        // If no id provided use selected
        if (typeof id === 'undefined') id = this.outline.selected;

        // Check if this is a layer node
        if (this.isIdLayerNode(id))
        {
            return this.managerLayers.moveDown(id);            
        }
        // Check if this is a overlay node
        else if (this.isIdOverlayNode(id))
        {
            return this.managerOverlays.moveDown(id);
        }

        return false;

    };

    /**
     * Move item up in map list
     * @function moveUp
     * @memberOf olexp.manager.ManagerAPI.prototype
     * @param {string} id Item ID
     * @public
     * @returns {boolean} True if moved otherwise false
     */
    ManagerAPI.prototype.moveUp = function(id)
    {

        // If no id provided use selected
        if (typeof id === 'undefined') id = this.outline.selected;

        // Check if this is a layer node
        if (this.isIdLayerNode(id))
        {
            return this.managerLayers.moveUp(id);
        }
        // Check if this is a overlay node
        else if (this.isIdOverlayNode(id))
        {
            return this.managerOverlays.moveUp(id);
        }

        return false;

    };

    /**
     * Remove listener
     * @function off
     * @memberOf olexp.manager.ManagerAPI.prototype
     * @param {string} type The event type.
     * @param {function} listener The listener function.
     * @param {object} opt_this The object to use as this in listener.
     * @public
     */
    ManagerAPI.prototype.off = function(type, listener, opt_this)
    {
        this.event.off(type, listener, opt_this);
        this.managerLayers.off(type, listener, opt_this);
        this.managerOverlays.off(type, listener, opt_this);
    };

    /**
     * Add listener
     * @function on
     * @memberOf olexp.manager.ManagerAPI.prototype
     * @param {string} type The event type.
     * @param {function} listener The listener function.
     * @param {object} opt_this The object to use as this in listener.
     * @public
     */
    ManagerAPI.prototype.on = function(type, listener, opt_this)
    {
        this.event.on(type, listener, opt_this);
        this.managerLayers.on(type, listener, opt_this);
        this.managerOverlays.on(type, listener, opt_this);
    };

    /**
     * Callback when node is selected either by click or double click
     * @function onItemSelected
     * @memberOf olexp.manager.ManagerAPI.prototype
     * @param {string} id Layer ID
     * @public
     */
    ManagerAPI.prototype.onItemSelected = function(id)
    {
        this.event.trigger('select:item', id);
    };

    /**
     * Callback when map layer group is changed
     * @function onLayerGroupChanged
     * @memberOf olexp.manager.ManagerAPI.prototype
     * @param {external:ol.ObjectEvent} event The change event.
     * @private
     */
    ManagerAPI.prototype.onLayerGroupChanged = function(event)
    {

        this.managerLayers.setLayers(event.target.getLayers());

    };

    /**
     * Remove item from map
     * @function removeFromMap
     * @memberOf olexp.manager.ManagerAPI.prototype
     * @param {olexp.item.Item} item Item to remove from map
     * @public
     * @returns {null|external:ol.layer.Layer|external:ol.Overlay} Layer removed
     *          from map or null if not found
     */
    ManagerAPI.prototype.removeFromMap = function(item)
    {

        // If no id provided use selected
        if (!(item.hasOwnProperty('id'))) return null;

        // Check if this is a layer node
        if (this.isIdLayerNode(item.id))
        {
            return this.managerLayers.removeFromMap(item);
        }
        // Check if this is a overlay node
        else if (this.isIdOverlayNode(item.id))
        {
            return this.managerOverlays.removeFromMap(item);
        }

        return null;

    };

    /**
     * Toggle node enable and corresponding layer visibility
     * @function toggleNode
     * @memberOf olexp.manager.ManagerAPI.prototype
     * @param {string} id Item ID of node to toggle
     * @public
     */
    ManagerAPI.prototype.toggleNode = function(id)
    {

        if (typeof id !== 'string') return;

        // ==================================================
        // Toggle sidebar node enabled state
        // --------------------------------------------------
        var node = this.outline.get(id);
        var enable = node.disabled;
        if (enable)
        {
            this.outline.enable(id);
        }
        else
        {
            this.outline.disable(id);
        }

        // ==================================================
        // Toggle map layer visibility
        // --------------------------------------------------

        // Check if this is a layer node
        if (this.isIdLayerNode(id))
        {
            var itemLayer = this.managerLayers.getById(id);
            if (itemLayer !== null) itemLayer.layer.setVisible(enable);
        }
        // Check if this is a overlay node
        else if (this.isIdOverlayNode(id))
        {
            var itemOverlay = this.managerOverlays.getById(id);
            if (itemOverlay !== null)
            {
                // Overlays don't have visibility so we hide DOM element
                var properties = itemOverlay.layer.getProperties();
                if (properties.hasOwnProperty('element'))
                {
                    var dom = $(properties.element);
                    if (enable)
                    {
                        dom.show();
                    }
                    else
                    {
                        dom.hide();
                    }
                }
            }
        }

    };

    /**
     * Update item editable properties
     * @function updateItem
     * @memberOf olexp.manager.ManagerAPI.prototype
     * @param {string} id ID of item to edit
     * @param {object} properties Item properties to update
     * @public
     */
    ManagerAPI.prototype.updateItem = function(id, properties)
    {
        var item = this.getById(id);
        if (item !== null)
        {
            item.setProperties(properties);

            // Update node
            var node = this.outline.get(id);
            node.text = item.name();

            this.outline.refresh();
        }
    };

    /**
     * Zoom to given item on map
     * @function zoomTo
     * @memberOf olexp.manager.ManagerAPI.prototype
     * @param {string} id ID of item on which to zoom
     * @public
     */
    ManagerAPI.prototype.zoomTo = function(id)
    {
        var item = this.getById(id);
        item.zoomTo(this.map);
    };

    /**
     * Item manager that synchronizes adding and removing items from the map
     * sidebar and the corresponding layers on the ol3 map
     * @function
     * @memberOf olexp.manager
     * @param {external:ol.Map} map Managed map
     * @param {external:jQuery.fn.w2sidebar} outline Managed outline sidebar
     * @param {external:jQuery.fn.w2grid} details Details grid
     * @param {string} layers w2ui name of layers node
     * @param {string} overlays w2ui name of overlays node
     * @public
     * @returns {olexp.manager.ManagerAPI}
     */
    olexp.manager.Manager = function(map, outline, details, layers, overlays) {
        var manager = new ManagerAPI(map, outline, details, layers, overlays);
        return {
            getById        : manager.getById.bind(manager),
            getDetails     : manager.getDetails.bind(manager),
            getNode        : manager.getNode.bind(manager),
            isSelected     : manager.isSelected.bind(manager),
            moveDown       : manager.moveDown.bind(manager),
            moveUp         : manager.moveUp.bind(manager),
            off            : manager.off.bind(manager),
            on             : manager.on.bind(manager),
            onItemSelected : manager.onItemSelected.bind(manager),
            removeFromMap  : manager.removeFromMap.bind(manager),
            toggleNode     : manager.toggleNode.bind(manager),
            updateItem     : manager.updateItem.bind(manager),
            zoomTo         : manager.zoomTo.bind(manager)
        };
    };

    return olexp;

}(olexp || {}));

//==================================================
// Node Manager
//--------------------------------------------------
(function(olexp) {

    /**
     * Node manager that synchronizes adding and removing items
     * @param {string} id Node id
     * @param {external:ol.Collection} layers Managed map layers
     * @param {external:jQuery.fn.w2sidebar} outline Managed outline sidebar
     * @param {external:jQuery.fn.w2grid} details Details grid
     * @private
     */
    var NodeManager = function(id, layers, outline, details)
    {

        /**
         * Total count of items added
         * @type {number}
         */
        this.count = 0;

        /**
         * Details grid
         * @type {external:jQuery.fn.w2grid}
         */
        this.details = details;

        /**
         * Event listeners
         * @type {olexp.event.Event}
         */
        this.event = new olexp.event.Event({'remove:item' : []});

        /**
         * Node id
         * @type {string}
         */
        this.id = id;

        /**
         * List of managed items
         * @type {number}
         */
        this.items = [];

        /**
         * Managed map layers
         * @type {ol.Collection}
         */
        this.layers = layers;
        this.layers.on('change:length', this.onLayerChanged, this);

        /**
         * Node managers
         * @type {object}
         * @example {item.id: NodeManager}
         */
        this.managers = {};

        /**
         * Managed outline sidebar
         * @type {external:jQuery.fn.w2sidebar}
         */
        this.outline = outline;

    };

    /**
     * Add layer to node manager
     * @memberOf NodeManager.prototype
     * @param {ol.layer.Layer|ol.Overlay} layer ol3 layer/overlay to add
     * @private
     * @returns {olexp.item.Item} Managed item for added layer
     */
    NodeManager.prototype.addLayer = function(layer)
    {

        // ==================================================
        // Create managed item
        // --------------------------------------------------

        // Create item id, name, and properties
        this.count += 1;
        var id = this.id + '-' + this.count;
        var name = 'Item ' + this.count;
        var properties = layer.getProperties();
        if (properties.hasOwnProperty('name')) name = properties.name;

        // Store managed item
        var item = new olexp.item.Item(id, name, layer);
        this.items.push(item);

        // ==================================================
        // Create w2ui node for item
        // --------------------------------------------------
        var node = {
            id   : item.id,
            img  : item.icon,
            text : item.name()
        };

        // ==================================================
        // Add item to outline
        // --------------------------------------------------

        // Always prepend new node to top
        var nodes = this.outline.get(this.id).nodes;
        if (nodes.length === 0)
        {
            this.outline.add(this.id, [node]);
        }
        else
        {
            this.outline.insert(this.id, nodes[0].id, [node]);
        }

        // ==================================================
        // Check layer is group and create a sub-manager and add its
        // layers
        // --------------------------------------------------
        if (item.type === olexp.item.Type.GROUP)
        {

            var layers = layer.getLayers();
            var manager = new NodeManager(item.id,
                                          layers,
                                          this.outline,
                                          this.details);

            layers.forEach(function(childLayer)
            {
                manager.addLayer(childLayer);
            }, this);
            this.managers[item.id] = manager;
            this.outline.expand(item.id);

        }

        return item;

    };

    /**
     * Get item based on id
     * @memberOf NodeManager.prototype
     * @param {string} id Item ID
     * @param {boolean} recursive True for recursive search otherwise false
     * @private
     * @returns {null|olexp.item.Item} Managed item or null if not found
     */
    NodeManager.prototype.getById = function(id, recursive)
    {

        if (typeof recursive === 'undefined') recursive = true;

        var numItems = this.getSize();
        for (var i = 0; i < numItems; i++)
        {
            if (this.items[i].id === id) return this.items[i];
            if (this.items[i].type === olexp.item.Type.GROUP && recursive)
            {
                var item = this.managers[this.items[i].id].getById(id);
                if (item === null) continue;
                if (item.id === id) return item;
            }
        }
        return null;

    };

    /**
     * Get item based on layer reference
     * @memberOf NodeManager.prototype
     * @param {ol.layer.Layer|ol.Overlay} layer ol3 layer/overlay
     * @param {boolean} recursive True for recursive search otherwise false
     * @private
     * @returns {null|olexp.item.Item} Managed item or null if not found
     */
    NodeManager.prototype.getByLayer = function(layer, recursive)
    {

        if (typeof recursive === 'undefined') recursive = true;

        var numItems = this.getSize();
        for (var i = 0; i < numItems; i++)
        {
            if (this.items[i].layer === layer) return this.items[i];
            if (this.items[i].type === olexp.item.Type.GROUP && recursive)
            {
                var item = this.managers[this.items[i].id].getByLayer(layer);
                if (item === null) continue;
                if (item.layer === layer) return item;
            }
        }
        return null;
    };

    /**
     * Get size of manager list
     * @memberOf NodeManager.prototype
     * @private
     * @returns {number} Size
     */
    NodeManager.prototype.getSize = function()
    {
        return this.items.length;
    };

    /**
     * Check if item is selected
     * @memberOf NodeManager.prototype
     * @param {string} id Item ID
     * @private
     * @returns {boolean} True if item is selected otherwise false
     */
    NodeManager.prototype.isSelected = function(id)
    {
        return id === this.outline.selected;
    };


    /**
     * Check if layer should be hidden and not added to manager
     * @memberOf NodeManager.prototype
     * @param {ol.layer.Layer|ol.Overlay} layer Item ID
     * @private
     * @returns {boolean} True if item is hidden otherwise false
     */
    NodeManager.prototype.isHidden = function(layer)
    {
        if (layer instanceof olexp.measure.Overlay) return true;
        return false;
    };

    /**
     * Move item down in map list
     * @memberOf NodeManager.prototype
     * @param {string} id Item ID
     * @private
     * @returns {null|boolean} True if moved, false is not moved, null if not
     *                         found.
     */
    NodeManager.prototype.moveDown = function(id)
    {

        var item = this.getById(id, false);

        if (item !== null)
        {
            // Item found in this node
            var movedItem = this.moveLayerUp(this.layers, item.layer);
            if (movedItem) movedItem = this.moveItemDown(id);
            return movedItem;
        }

        // Check if item in child managers
        var numItems = this.getSize();
        for (var i = 0; i < numItems; i++)
        {
            if (this.items[i].type === olexp.item.Type.GROUP)
            {
                var movedChild = this.managers[this.items[i].id].moveDown(id);
                if (movedChild !== null) return movedChild;
            }
        }

        return null;

    };

    /**
     * Move item down
     * @memberOf NodeManager.prototype
     * @param {string} id Item ID
     * @private
     * @returns {boolean} True if moved otherwise false
     */
    NodeManager.prototype.moveItemDown = function(id)
    {
        // Get node to move
        var node = this.outline.get(id);
        if (node === null) return false;

        // Get index in list
        var nodes = this.outline.find(node.parent.id,
        {
            parent : node.parent
        });
        var index = this.outline.get(node.parent.id, id, true);
        if (index >= (nodes.length - 1)) return false;

        // Get node to swap
        var nextId = nodes[index + 1].id;
        var nextNode = nodes[index + 1];

        // Check that nodes are in same parent node
        if (node.parent !== nextNode.parent) return false;

        // Swap nodes
        this.outline.remove(nextId);
        this.outline.insert(node.parent, id, nextNode);
        this.outline.select(id);

        return true;
    };

    /**
     * Move item up
     * @memberOf NodeManager.prototype
     * @param {string} id Item ID
     * @private
     * @returns {boolean} True if moved otherwise false
     */
    NodeManager.prototype.moveItemUp = function(id)
    {
        // Get node to move
        var node = this.outline.get(id);
        if (node === null) return false;

        // Get index in list
        var nodes = this.outline.find(node.parent.id,
        {
            parent : node.parent
        });
        var index = this.outline.get(node.parent.id, id, true);
        if (index <= 0) return false;

        // Get node to swap
        var prevId = nodes[index - 1].id;
        var prevNode = nodes[index - 1];

        // Check that nodes are in same parent node
        if (node.parent !== prevNode.parent) return false;

        // Swap nodes
        this.outline.remove(id);
        this.outline.insert(node.parent, prevId, node);
        this.outline.select(id);

        return true;
    };

    /**
     * Move layer down
     * @memberOf NodeManager.prototype
     * @param {ol.Collection} layers Source layer list
     * @param {ol.layer.Layer|ol.Overlay} layer Layer to move
     * @private
     * @returns {boolean} True if moved otherwise false
     */
    NodeManager.prototype.moveLayerDown = function(layers, layer)
    {
        var index = olexp.util.indexOf(layers, layer);
        var numLayers = this.layers.getLength();
        if (index < numLayers - 1)
        {
            var item = this.getByLayer(layer, false);

            // Set item to moving so it's not removed by the manager
            item.moving(true);
            layers.removeAt(index);
            layers.insertAt(index + 1, layer);
            item.moving(false);

            return true;
        }
        return false;
    };

    /**
     * Move layer up
     * @memberOf NodeManager.prototype
     * @param {ol.Collection} layers Source layer list
     * @param {ol.layer.Layer|ol.Overlay} layer Layer to move
     * @private
     * @returns {boolean} True if moved otherwise false
     */
    NodeManager.prototype.moveLayerUp = function(layers, layer)
    {
        var index = olexp.util.indexOf(layers, layer);
        if (index > 0)
        {
            var item = this.getByLayer(layer, false);

            // Set item to moving so it's not removed by the manager
            item.moving(true);
            layers.removeAt(index);
            layers.insertAt(index - 1, layer);
            item.moving(false);

            return true;
        }
        return false;
    };

    /**
     * Move item up in map list
     * @memberOf NodeManager.prototype
     * @param {string} id Item ID
     * @private
     * @returns {null|boolean} True if moved, false if not moved, null if not
     *                         found
     */
    NodeManager.prototype.moveUp = function(id)
    {

        var item = this.getById(id, false);

        if (item !== null)
        {
            // Item found in this node
            var movedItem = this.moveLayerDown(this.layers, item.layer);
            if (movedItem) movedItem = this.moveItemUp(id);
            return movedItem;
        }

        // Check if item in child managers
        var numItems = this.getSize();
        for (var i = 0; i < numItems; i++)
        {
            if (this.items[i].type === olexp.item.Type.GROUP)
            {
                var movedChild = this.managers[this.items[i].id].moveUp(id);
                if (movedChild !== null) return movedChild;
            }
        }

        return null;

    };

    /**
     * Remove listener
     * @memberOf NodeManager.prototype
     * @param {string} type The event type.
     * @param {function} listener The listener function.
     * @param {object} opt_this The object to use as this in listener.
     * @private
     */
    NodeManager.prototype.off = function(type, listener, opt_this)
    {
        this.event.off(type, listener, opt_this);

        // Remove listener from child managers
        var numItems = this.getSize();
        for (var i = 0; i < numItems; i++)
        {
            if (this.items[i].type === olexp.item.Type.GROUP)
            {
                this.managers[this.items[i].id].off(type, listener, opt_this);
            }
        }

    };

    /**
     * Callback when layer changed
     * @memberOf NodeManager.prototype
     * @param {string} type The event type.
     * @param {function} listener The listener function.
     * @param {object} opt_this The object to use as this in listener.
     * @private
     */
    NodeManager.prototype.on = function(type, listener, opt_this)
    {
        this.event.on(type, listener, opt_this);

        // Register listener with child managers
        var numItems = this.getSize();
        for (var i = 0; i < numItems; i++)
        {
            if (this.items[i].type === olexp.item.Type.GROUP)
            {
                this.managers[this.items[i].id].on(type, listener, opt_this);
            }
        }

    };

    /**
     * Callback when layer removed
     * @memberOf NodeManager.prototype
     * @param {olexp.item.Item} item OpenLayers Explorer Item
     * @private
     */
    NodeManager.prototype.onItemRemoved = function(item)
    {
        // Trigger item remove event
        this.event.trigger('remove:item', item);

        // Remove item
        if (this.isSelected(item.id))
        {
            this.details.clear();
        }
        this.remove(item);
    };

    /**
     * Callback when layer changed
     * @memberOf NodeManager.prototype
     * @param {ol.ObjectEvent} event ol3 Layer change event
     * @private
     */
    NodeManager.prototype.onLayerChanged = function(event)
    {

        // ==================================================
        // Extract layers from change event
        // --------------------------------------------------
        var changes = event.target;

        // ==================================================
        // If layer is in map but not in manager then add
        // --------------------------------------------------
        var numLayers = changes.getLength();
        for (var i = 0; i < numLayers; i++)
        {
            var layer = changes.item(i);
            if (this.isHidden(layer)) continue;
            var itemMap = this.getByLayer(layer);
            if (itemMap === null)
            {
                this.addLayer(layer);
            }
        }

        // ==================================================
        // If layer is in manager but not in map then remove
        // --------------------------------------------------

        var items = this.toList();
        var numItems = items.length;
        for (var j = 0; j < numItems; j++)
        {
            var itemManager = items[j];

            // Check if item is just being moved by user
            if (itemManager.moving()) continue;

            var index = olexp.util.indexOf(this.layers, itemManager.layer);
            if (index === -1)
            {
                this.onItemRemoved(itemManager);
            }
        }

    };

    /**
     * Remove layer from manager
     * @memberOf NodeManager.prototype
     * @param {olexp.item.Item} item Managed item to remove
     * @private
     * @returns {boolean} True if removed otherwise false
     */
    NodeManager.prototype.remove = function(item)
    {

        // ==================================================
        // Remove layer from manager
        // --------------------------------------------------
        var index = this.items.indexOf(item);
        if (index !== -1)
        {
            this.items.splice(index, 1);
            this.outline.remove(item.id);
            return true;
        }

        // ==================================================
        // Check if item in child managers and remove
        // --------------------------------------------------
        var numItems = this.getSize();
        for (var i = 0; i < numItems; i++)
        {
            if (this.items[i].type === olexp.item.Type.GROUP)
            {
                var removed = this.managers[this.items[i].id].remove(id);
                if (removed) return true;
            }
        }

        return false;

    };

    /**
     * Remove item from map
     * @memberOf NodeManager.prototype
     * @private
     * @param {null|ol.layer.Layer|ol.Overlay} Layer removed from map or null
     *                                         if not found
     */
    NodeManager.prototype.removeFromMap = function(item)
    {
        var layerMap = this.layers.remove(item.layer);
        if (typeof layerMap !== 'undefined') return layerMap;

        // ==================================================
        // Check if item in child managers and remove
        // --------------------------------------------------
        var numItems = this.getSize();
        for (var i = 0; i < numItems; i++)
        {
            if (this.items[i].type === olexp.item.Type.GROUP)
            {
                var layerChild = this.managers[this.items[i].id].removeFromMap(item);
                if (layerChild !== null) return layerChild;
            }
        }
        
        return null;

    };

    /**
     * Set layers that are being managed
     * @function setLayers
     * @memberOf NodeManager.prototype
     * @param {external:ol.Collection} layers New layer collection to monitor.
     * @private
     */
    NodeManager.prototype.setLayers = function(layers)
    {

        // Remove old layers
        this.layers.un('change:length', this.onLayerChanged, this);
        while (this.items.length > 0)
        {
            this.onItemRemoved(this.items[this.items.length-1]);
        }

        // Add new layers
        this.layers = layers;
        this.layers.on('change:length', this.onLayerChanged, this);
        for (var j = 0; j < this.layers.getLength(); j++)
        {
            this.addLayer(this.layers.item(j));
        }

    };

    /**
     * Get items as list
     * @memberOf NodeManager.prototype
     * @private
     * @returns {array} List of items
     */
    NodeManager.prototype.toList = function()
    {

        var items = [];
        var numItems = this.getSize();
        for (var i = 0; i < numItems; i++)
        {
            items.push(this.items[i]);
        }
        return items;

    };

    /**
     * Node manager that synchronizes adding and removing items
     * @function
     * @memberOf olexp.manager
     * @param {string} id Node id
     * @param {external:ol.Map} map Managed map
     * @param {external:jQuery.fn.w2sidebar} outline Managed outline sidebar
     * @param {external:jQuery.fn.w2grid} details Details grid
     * @public
     */
    olexp.manager.NodeManager = function(id, map, outline, details) {
        var manager = new NodeManager(id, map, outline, details);
        return {
            getById        : manager.getById.bind(manager),
            getByLayer     : manager.getByLayer.bind(manager),
            moveDown       : manager.moveDown.bind(manager),
            moveUp         : manager.moveUp.bind(manager),
            off            : manager.off.bind(manager),
            on             : manager.on.bind(manager),
            removeFromMap  : manager.removeFromMap.bind(manager),
            setLayers      : manager.setLayers.bind(manager)
        };
    };

    return olexp;

}(olexp || {}));


/**
 * @namespace olexp.measure
 */
olexp.measure = olexp.measure || {};

//==================================================
// Measuring Tool
//--------------------------------------------------
(function(olexp) {

    "use strict";

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


/**
 * @namespace olexp.menu
 */
olexp.menu = olexp.menu || {};

//==================================================
// Properties menu item
//--------------------------------------------------
(function(olexp) {

    "use strict";

    /**
     * Properties menu item
     * @param {olexp.manager.Manager} manager Explorer manager
     * @param {olexp.ExplorerSettings} settings olexp settings
     * @private
     */
    var Properties = function(manager, settings)
    {

        var olexpSettings = $.extend(true, {menu : {
            Properties : {
                field  : 35,
                form   : {},
                popup  : {
                    height : 130,
                    style  : 'width: 100%; height: 100%;',
                    title  : 'Edit Layer',
                    width  : 365
                },
                span   : 4,
                text   : 'Properties'
            }}}, settings);

        /**
         * Menu item icon
         * @field
         * @private
         * @type {string}
         */
        this.icon = 'olexp-menu-properties';

        /**
         * Form DOM id
         * @field
         * @private
         * @type {string}
         */
        this.form = settings.prefix + '-menu-properties-form';

        /**
         * Menu DOM id
         * @field
         * @private
         * @type {string}
         */
        this.id = settings.prefix + '-menu-properties';

        /**
         * Explorer manager
         * @field
         * @private
         * @type {olexp.manager.Manager}
         */
        this.manager = manager;

        /**
         * Menu w2ui name
         * @field
         * @private
         * @type {string}
         */
        this.name = 'layerform';

        /**
         * Properties menu settings
         * @field
         * @private
         * @type {Object}
         */
        this.settings = olexpSettings.menu.Properties;

    };

    /**
     * Callback when properties menu item is clicked
     * @memberOf Properties.prototype
     * @param {external:jQuery.fn.w2sidebar.onMenuClick} event Menu click event
     * @private
     */
    Properties.prototype.onClick = function(event)
    {

        var me = this;

        // ==================================================
        // Extract node item id
        // --------------------------------------------------
        var id = event.target;

        // ==================================================
        // Extract item to be edited
        // --------------------------------------------------
        var item = this.manager.getById(id);
        var record = item.getProperties();

        // ==================================================
        // Create form fields and adjust form height per field
        // --------------------------------------------------
        var formHeight = this.settings.popup.height;
        var fieldHeight = this.settings.field;
        var fields = [];
        
        // Add item name field
        formHeight += fieldHeight;
        fields.push({
            field: 'name',
            html:
            {
                caption : 'Name',
                span    : this.settings.span
            },
            required: true,
            type: 'text'
        });

        // Add numeric fields
        var propertyTypes = item.getPropertyTypes();
        var numerics = $.map(propertyTypes, function(value) {
            return value.title;
        });
        for (var i = 0; i < numerics.length; i++)
        {
            formHeight += fieldHeight;
            fields.push({
                field: numerics[i].toLowerCase(),
                html:
                {
                    caption : numerics[i],
                    span    : this.settings.span
                },
                required: true,
                type: 'float'
            });
        }

        // ==================================================
        // Function to process form changes
        // --------------------------------------------------
        var onChanges = function(changes)
        {
            me.manager.updateItem(id, changes);
        };

        // ==================================================
        // Process popup form
        // --------------------------------------------------

        var formOptions = $.extend(this.settings.form, {
            fields : fields,
            name   : this.name,
            record : record
        });

        var popupOptions = $.extend($.extend({}, this.settings.popup), {
            height : formHeight
        });
        
        olexp.util.popup(this.form, onChanges, formOptions, popupOptions);

    };

    /**
     * Properties menu item 
     * @memberOf olexp.menu
     * @param {olexp.manager.Manager} manager Explorer manager
     * @param {olexp.ExplorerSettings} settings olexp settings
     * @public
     */
    olexp.menu.Properties = function(manager, settings) {

        var control = new Properties(manager, settings);

        return {
            menu: {
                id   : control.id,
                img  : control.icon,
                text : control.settings.text
            },
            click: function(event) {
                control.onClick(event);
            }
        };

    };
    
    return olexp;
    
}(olexp || {}));

//==================================================
// Remove menu item
//--------------------------------------------------
(function(olexp) {

    /**
     * Remove menu item
     * @param {olexp.manager.Manager} manager Explorer manager
     * @param {olexp.ExplorerSettings} settings olexp settings
     * @private
     */
    var Remove = function(manager, settings)
    {

        var olexpSettings = $.extend(true, {menu : {
            Remove : {
                text : 'Remove'
            }}}, settings);

        /**
         * Menu item icon
         * @field
         * @private
         * @type {string}
         */
        this.icon = 'olexp-menu-remove';

        /**
         * Menu DOM id
         * @field
         * @private
         * @type {string}
         */
        this.id = settings.prefix + '-menu-remove';

        /**
         * Explorer manager
         * @field
         * @private
         * @type {olexp.manager.Manager}
         */
        this.manager = manager;

        /**
         * Remove menu settings
         * @field
         * @private
         * @param {Object} settings
         */
        this.settings = olexpSettings.menu.Remove;

    };

    /**
     * Callback when properties menu item is clicked
     * @memberOf Remove.prototype
     * @param {external:jQuery.fn.w2sidebar.onMenuClick} event Menu click event
     * @private
     */
    Remove.prototype.onClick = function(event)
    {

        var me = this;

        // ==================================================
        // Extract node item id
        // --------------------------------------------------
        var id = event.target;

        // ==================================================
        // Extract item to be removes
        // --------------------------------------------------
        var item = this.manager.getById(id);

        // Confirm user wants to delete item
        // Remove item from map and manager
        w2confirm('Do you want to delete "' + item.name() + '"?')
            .yes(function () {
                me.manager.removeFromMap(item);
            });

    };

    /**
     * Remove menu item 
     * @memberOf olexp.menu
     * @param {olexp.manager.Manager} manager Explorer manager
     * @param {olexp.ExplorerSettings} settings olexp settings
     * @public
     */
    olexp.menu.Remove = function(manager, settings) {

        var control = new Remove(manager, settings);

        return {
            menu: {
                id   : control.id,
                img  : control.icon,
                text : control.settings.text
            },
            click: function(event) {
                control.onClick(event);
            }
        };

    };
    
    return olexp;
    
}(olexp || {}));

//==================================================
// Zoom menu item
//--------------------------------------------------
(function(olexp) {

    /**
     * Zoom menu item
     * @param {olexp.manager.Manager} manager Explorer manager
     * @param {olexp.ExplorerSettings} settings olexp settings
     * @private
     */
    var Zoom = function(manager, settings)
    {
        
        var olexpSettings = $.extend(true, {menu : {
            Zoom : {
                text : 'Zoom'
            }}}, settings);

        /**
         * Menu item icon
         * @field
         * @private
         * @type {string}
         */
        this.icon = 'olexp-menu-zoom';

        /**
         * Menu DOM id
         * @field
         * @private
         * @type {string}
         */
        this.id = settings.prefix + '-menu-zoom';

        /**
         * Explorer
         * @field
         * @private
         * @type {olexp.manager.Manager}
         */
        this.manager = manager;

        /**
         * Zoom menu settings
         * @field
         * @private
         * @param {Object} settings
         */
        this.settings = olexpSettings.menu.Zoom;

    };

    /**
     * Callback when properties menu item is zoomed in
     * @memberOf Zoom.prototype
     * @param {external:jQuery.fn.w2sidebar.onMenuClick} event Menu click event
     * @private
     */
    Zoom.prototype.onClick = function(event)
    {

        // ==================================================
        // Extract node item id
        // --------------------------------------------------
        var id = event.target;

        // ==================================================
        // Zoom to item layer
        // --------------------------------------------------
        this.manager.zoomTo(id);

    };

    /**
     * Zoom menu item
     * @memberOf olexp.menu
     * @param {olexp.manager.Manager} manager Explorer manager
     * @param {olexp.ExplorerSettings} settings olexp settings
     * @public
     */
    olexp.menu.Zoom = function(manager, settings) {

        var control = new Zoom(manager, settings);

        return {
            menu: {
                id   : control.id,
                img  : control.icon,
                text : control.settings.text
            },
            click: function(event) {
                control.onClick(event);
            }
        };

    };
    
    return olexp;
    
}(olexp || {}));


/**
 * @description olexp specific OpenLayers 3 classes 
 * @namespace olexp.ol
 */
olexp.ol = olexp.ol || {};

//==================================================
// Toolbar show Control
//--------------------------------------------------
(function(olexp) {

    "use strict";

    /**
     * Control to show toolbar
     * @param {olexp.Explorer} explorer Source explorer
     * @param {olexp.ExplorerSettings} settings olexp settings
     * @private
     */
    var ToolbarShow = function(explorer, settings)
    {
    
        //==================================================
        // Override Toolbar Show option defaults
        // with user provided values. 
        //--------------------------------------------------
        var olexpSettings = $.extend(true, {ol : {
            ToolbarShow : {
                html  : 'T',
                title : 'Show toolbar'
            }}}, settings);

        /**
         * ol ToolbarShow control settings
         * @field
         * @private
         * @param {Object} settings
         */
        this.settings = olexpSettings.ol.ToolbarShow;
    
        /**
         * Source explorer
         * @field
         * @private
         * @type {olexp.Explorer}
         */
        this.explorer = explorer;
    
        // Define control button
        var button = document.createElement('button');
        button.innerHTML = this.settings.html;
        button.title = this.settings.title;
        button.addEventListener('click', this.show.bind(this), false);
        button.addEventListener('touchstart', this.show.bind(this), false);
    
        // Define control button wrapper div
        var element = document.createElement('div');
        element.id = settings.prefix + '-ol-toolbar-show';
        element.className = 'olexp-ol-toolbar-show ol-unselectable ol-control';
        element.appendChild(button);
    
        ol.control.Control.call(this, {element: element});
    
    };
    ol.inherits(ToolbarShow, ol.control.Control);
    
    
    /**
     * Show toolbar
     * @private
     */
     ToolbarShow.prototype.show = function()
    {
        this.explorer.layout.show(this.explorer.options.toolbar.type);
        this.setMap(null);
    };
     
    /**
     * Control to set toolbar visibility
     * @memberOf olexp.ol
     * @param {olexp.Explorer} explorer Source explorer
     * @param {object} options Control options
     * @param {boolean} options.hidden True if toolbar is initially hidden
     * @param {olexp.ExplorerSettings} options.settings Explorer settings
     * @public
     * @returns {external:jQuery.fn.w2toolbar.properties} ToolbarShow toolbar
     *          control
     */
    olexp.ol.ToolbarShow = function(explorer, options) {
    
        var opts = $.extend({hidden: false}, options);
        
        var control = new ToolbarShow(explorer, opts.settings);
        if (opts.hidden) control.setMap(explorer.map);
        return control;
    
    };
    
    return olexp;
 
}(olexp || {}));


/**
 * @namespace olexp.selection
 */
olexp.selection = olexp.selection || {};

//==================================================
// Selection Tool
//--------------------------------------------------
(function(olexp) {

    "use strict";

    /**
     * Handles the selection of features on the map
     * @param {ol.Map} map Managed map
     * @param {external:jQuery.fn.w2grid} details Details grid
     * @private
     */
    var Feature = function(map, details)
    {

        /**
         * Details grid
         * @type {external:jQuery.fn.w2grid}
         */
        this.details = details;

        /**
         * Selection interaction
         * @type {external:ol.interaction.Select}
         */
        this.interaction = new ol.interaction.Select();

        /**
         * Managed map
         * @type {ol.Map}
         */
        this.map = map;

        // ==================================================
        // Add callback for feature selection
        // --------------------------------------------------
        var me = this;
        this.interaction.on('select', function(event) {

            if (event.selected.length === 1)
            {
                var feature = event.selected[0];
                var properties = olexp.util.toProperties(feature);
                for (var name in properties)
                {
                    if (typeof properties[name] !== 'boolean' &&
                        typeof properties[name] !== 'number' &&
                        typeof properties[name] !== 'string')
                    {
                        delete properties[name];
                    }
                }
                var records = olexp.util.toRecords(properties);
                me.details.clear();
                me.details.add(records);
            }

        });

    };

    /**
     * Enable feature selection
     * @memberOf Feature.prototype
     * @param {boolean} enable True if selection should be enabled otherwise false
      */
    Feature.prototype.setEnable = function(enable)
    {
        if (enable)
        {
            this.map.addInteraction(this.interaction);
        }
        else
        {
            this.map.removeInteraction(this.interaction);
        }
    };

    /**
     * Selection tool
     * @memberOf olexp.selection
     * @param {external:ol.Map} map Managed map
     * @param {external:jQuery.fn.w2grid} details Details grid
     * @public
     * @returns {olexp.selection.Feature} Feature selector
     */
    olexp.selection.Feature = function(map, details) {

        var selector = new Feature(map, details);

        /**
         * @description The objects exposed by the olexp.selection.Feature API
         * @typedef {object} Feature
         * @memberOf olexp.selection
         * @property {function} setEnable Enable/disable feature selection
         */
        return {
            setEnable: function (enable)
            {
                selector.setEnable(enable);
            }
        };

    };

    return olexp;

}(olexp || {}));


/**
 * @namespace olexp.util
 */
olexp.util = olexp.util || {};

//==================================================
// Utility tools
//--------------------------------------------------
(function(olexp) {

    "use strict";

    /**
     * Utility tools
     * @param {olexp.ExplorerSettings} settings olexp settings
     * @private
     */
    var Util = function(settings)
    {

        //==================================================
        // Override Util option defaults
        // with user provided values. 
        //--------------------------------------------------
        var olexpSettings = $.extend(true, {util : {Util : {
            Cluster         : function(size)
                              {
                                  var style = [new ol.style.Style({
                                               image : new ol.style.Circle({
                                                           radius : 10,
                                                           stroke : new ol.style.Stroke({
                                                                        color : '#ffffff'
                                                                    }),
                                                           fill : new ol.style.Fill({
                                                                      color : '#3399CC'
                                                                  })
                                                       }),
                                               text  : new ol.style.Text({
                                                           text : size.toString(),
                                                           fill : new ol.style.Fill({
                                                                      color : '#ffffff'
                                                                  })
                                                       })
                                          })];
                                  return style;
                              },
            Point           : [new ol.style.Style({
                                  image : new ol.style.Circle({
                                              fill   : new ol.style.Fill({
                                                           color : 'rgba(255,255,0,0.5)'
                                                       }),
                                              radius : 5,
                                              stroke : new ol.style.Stroke({color : '#ff0',
                                                                            width : 1})
                                          })
                              })],
            LineString      : [new ol.style.Style({
                                  stroke : new ol.style.Stroke({
                                               color : '#f00',
                                               width : 3
                                           })
                               })],
            Polygon         : [new ol.style.Style({
                                  fill   : new ol.style.Fill({
                                               color : 'rgba(0,255,255,0.5)'
                                           }),
                                  stroke : new ol.style.Stroke({
                                               color : '#0ff',
                                               width : 1
                                           })
                               })],
            MultiPoint      : [new ol.style.Style({
                                   image : new ol.style.Circle({
                                               fill   : new ol.style.Fill({
                                                            color : 'rgba(255,0,255,0.5)'
                                                        }),
                                               radius : 5,
                                               stroke : new ol.style.Stroke({
                                                            color : '#f0f',
                                                            width : 1
                                                        })
                                           })
                               })],
            MultiLineString : [new ol.style.Style({
                                   stroke : new ol.style.Stroke({
                                                color : '#0f0',
                                                width : 3
                                            })
                               })],
            MultiPolygon    : [new ol.style.Style({
                                   fill : new ol.style.Fill({
                                              color : 'rgba(0,0,255,0.5)'
                                          }),
                                   stroke : new ol.style.Stroke({
                                                color : '#00f',
                                                width : 1
                                            })
                               })]
        }}}, settings);

        /**
         * Util settings
         * @field
         * @private
         * @param {Object} settings
         */
        this.settings = olexpSettings.util.Util;

        /**
         * Default vector styles
         * @field
         * @private
         * @param {Object} defaultStyle
         */
        this.defaultStyle =
        {
            'Point'           : this.settings.Point,
            'LineString'      : this.settings.LineString,
            'Polygon'         : this.settings.Polygon,
            'MultiPoint'      : this.settings.MultiPoint,
            'MultiLineString' : this.settings.MultiLineString,
            'MultiPolygon'    : this.settings.MultiPolygon
        };
        
        /**
         * Cache for cluster styles
         * @field
         * @private
         * @param {Object} clusterStyleCache
         */
        this.clusterStyleCache = {};
        
    };

    /**
     * Add vector layer to map
     * @memberOf Util.prototype
     * @param {external:ol.Map} map Source ol3 map
     * @param {string} name Name of new vector layer
     * @param {array<external:ol.Feature>} features Array of features
     * @param {boolean} cluster True if features should be clustered otherwise false
     * @public
     */
    Util.prototype.addLayerVector = function(map,
                                             name,
                                             features,
                                             cluster)
    {

        if (typeof cluster === 'undefined') cluster = true;
        
        var me = this;
        
        // Detect if clustering is on for non-points and disable clustering
        for (var i = 0; i < features.length; i++)
        {
            var geometry = features[i].getGeometry();
            if (typeof geometry === 'undefined' ||
                geometry.getType() !== 'Point')
            {
                cluster = false;
                break;
            }
        }
        
        // Build layer source
        var source = new ol.source.Vector({
            features: features
        });
        
        if (cluster)
        {
            source = new ol.source.Cluster({
                source: source
            });
        }

        // Build layer style
        var style = function(feature, resolution)
        {
            var styleFunction = feature.getStyleFunction();
            if (styleFunction)
            {
                return styleFunction.call(feature, resolution);
            }
            else
            {
                return me.defaultStyle[feature.getGeometry().getType()];
            }
        };

        if (cluster)
        {
            style = function(feature, resolution)
            {
                return me.getClusterStyle(feature);
            };
        }

        // Add layer to map
        var layer = new ol.layer.Vector({
            source : source,
            style  : style
        });
        layer.set('name', name);
        map.getLayers().push(layer);

    };

    /**
     * Get feature style
     * @memberOf Util.prototype
     * @param {external:ol.Feature} feature Feature to style
     * @public
     * @returns {ol.Style} Cluster style
     */
    Util.prototype.getClusterStyle = function(feature)
    {

        var size = feature.get('features').length;
        var style = this.clusterStyleCache[size];
        if (!style)
        {
            style = this.settings.Cluster(size);
            this.clusterStyleCache[size] = style;
        }

        return style;

    };

    /**
     * Create map controls
     * @memberOf Util.prototype
     * @public
     * @returns {object} Object of ol.control objects by key name
     */
    Util.prototype.getControls = function()
    {

        var controls = {
            fullscreen    : new ol.control.FullScreen(),
            mouseposition : new ol.control.MousePosition({
                                coordinateFormat : ol.coordinate.createStringXY(6),
                                projection       : 'EPSG:4326'}),
            overviewmap   : new ol.control.OverviewMap(),
            rotate        : new ol.control.Rotate(),
            scaleline     : new ol.control.ScaleLine(),
            zoom          : new ol.control.Zoom(),
            zoomslider    : new ol.control.ZoomSlider(),
            zoomtoextent  : new ol.control.ZoomToExtent()
        };

        return controls;

    };

    /**
     * Create drag and drop interaction
     * @memberOf Util.prototype
     * @param {ol.Map} map Source map
     * @public
     * @returns {ol.interaction.DragAndDrop} ol3 drag and drop interaction
     */
    Util.prototype.getDragAndDrop = function(map)
    {

        var me = this;

        var interaction = new ol.interaction.DragAndDrop({
            formatConstructors: $.map(olexp.util.FileTypes, function(o) {
                    return o.format;
                })
        });

        interaction.on('addfeatures', function(event) {
                                                               
            // Get filename and remove any extensions
            var filename = event.file.name.replace(/\.[^/.]+$/, "");

            me.addLayerVector(map, filename, event.features);

        });

        return interaction;

    };

    /**
     * Create a new graticule
     * @memberOf Util.prototype
     * @param {external:ol.Map} map Source map
     * @param {object} options ol.Graticule constructor options
     * @public
     * @returns {external:ol.Graticule} New graticule based on settings
     */
    Util.prototype.getGraticule = function(map, options)
    {

        var opts = $.extend($.extend({}, options),
                            {color : '#' + options.color});
        var graticule = new ol.Graticule({
            map         : map,
            strokeStyle : new ol.style.Stroke(opts)
        });
        graticule.olexp_record = $.extend({enable : (map===null ? false : true)},
                                           options);

        return graticule;

    };

    /**
     * Create map interactions
     * @memberOf Util.prototype
     * @param {external:ol.Map} map Source map
     * @public
     * @returns {object} Object of ol.interaction objects by key name
     */
    Util.prototype.getInteractions = function(map)
    {

        var interactions = {
            draganddrop : this.getDragAndDrop(map)
        };

        return interactions;

    };

    /**
     * Get object of ol3 tile types
     * @memberOf Util.prototype
     * @public
     * @returns {object} Object of ol.source objects
     */
    Util.prototype.getTileTypes = function()
    {

        // ==================================================
        // Define tile types object
        // --------------------------------------------------
        var tileTypes = {};

        // ==================================================
        // Define Bing tiles
        // --------------------------------------------------

        var bingKey = 'Ak-dzM4wZjSqTlzveKz5u0d4IQ4bRzVI309GxmkgSVr1ewS6iPSrOvOKhA-CJlm3';
        var bingMaxZoom = 19;

        tileTypes.bingAerial =
        {
            'class'  : ol.source.BingMaps,
            name     : 'Bing Maps (Aerial)',
            settings :
            {
                imagerySet : 'Aerial',
                key        : bingKey,
                maxZoom    : bingMaxZoom
            }
        };

        tileTypes.bingAerialLabels =
        {
            'class'  : ol.source.BingMaps,
            name     : 'Bing Maps (Aerial with Labels)',
            settings :
            {
                imagerySet : 'AerialWithLabels',
                key        : bingKey,
                maxZoom    : bingMaxZoom
            }
        };

        tileTypes.bingRoad =
        {
            'class'  : ol.source.BingMaps,
            name     : 'Bing Maps (Road)',
            settings :
            {
                imagerySet : 'Road',
                key        : bingKey,
                maxZoom    : bingMaxZoom
            }
        };

        // ==================================================
        // Define MapQuest tiles
        // --------------------------------------------------

        tileTypes.mapQuestAerial =
        {
            'class'  : ol.source.MapQuest,
            name     : 'Map Quest (Aerial)',
            settings :
            {
                layer : 'sat'
            }
        };

        tileTypes.mapQuestAerialLabels =
        {
            'class'  : ol.source.MapQuest,
            name     : 'Map Quest (Labels)',
            settings :
            {
                layer : 'hyb'
            }
        };

        tileTypes.mapQuestRoad =
        {
            'class'  : ol.source.MapQuest,
            name     : 'Map Quest (Road)',
            settings :
            {
                layer : 'osm'
            }
        };

        // ==================================================
        // Define OpenStreetMap tiles
        // --------------------------------------------------

        tileTypes.osm =
        {
            'class'  : ol.source.OSM,
            name     : 'OpenStreetMap',
            settings : {}
        };

        // ==================================================
        // Define Stamen tiles
        // --------------------------------------------------

        tileTypes.stamenTerrain =
        {
            'class'  : ol.source.Stamen,
            name     : 'Stamen (Terrain)',
            settings :
            {
                layer: 'terrain'
            }
        };

        tileTypes.stamenToner =
        {
            'class'  : ol.source.Stamen,
            name     : 'Stamen (Toner)',
            settings :
            {
                layer: 'toner'
            }
        };

        tileTypes.stamenWater =
        {
            'class'  : ol.source.Stamen,
            name     : 'Stamen (Water Color)',
            settings :
            {
                layer : 'watercolor'
            }
        };

        return tileTypes;

    };

    /**
     * Supported ol3 file types
     * @memberOf olexp.util
     * @public
     * @readonly
     * @returns {object} ol3 file types
     */
    olexp.util.FileTypes = {
            gpx  : {
                       extensions: ['gpx'],
                       format : ol.format.GPX,
                       name : 'GPX'
                   },
            igc  : {
                       extensions: ['igc'],
                       format : ol.format.IGC,
                       name : 'IGC'
                   },
            json : {
                       extensions: ['json', 'geojson'],
                       format : ol.format.GeoJSON,
                       name : 'GeoJSON'
                   },
            kml  : {
                       extensions: ['kml'],
                       format : ol.format.KML,
                       name : 'KML'
                   }
        };

    /**
     * Find feature reader based on filename extension
     * @memberOf olexp.util
     * @param {string} filename Filename to be read
     * @public
     * @returns {external:ol.format.Feature} File reader
     */
    olexp.util.getReader = function(filename)
    {

        var extension = filename.substring(filename.lastIndexOf(".")+1).toLowerCase();
        var types = Object.keys(olexp.util.FileTypes);
        for (var i = 0; i < types.length; i++)
        {
            var type = olexp.util.FileTypes[types[i]];
            var extensions = type.extensions;
            for (var j = 0; j < extensions.length; j++)
            {
                if (extension === extensions[j])
                {
                    return new type.format();
                }
            }
        }
        return null;

    };

    /**
     * Returns the index of the layer within the collection.
     * @function
     * @memberOf olexp.util
     * @param {external:ol.Collection} layers Map layers
     * @param {external:ol.layer.Layer|external:ol.Overlay} layer Layer to find
     * @public
     * @returns {number} Index of layer
     */
    olexp.util.indexOf = function(layers, layer)
    {
        var length = layers.getLength();
        for (var i = 0; i < length; i++)
        {
            if (layer === layers.item(i))
            {
                return i;
            }
        }
        return -1;
    };

    /**
     * Create and process popup form
     * @function
     * @memberOf olexp.util
     * @param {string} id DOM id
     * @param {function} onChanges Function that processes w2ui form changes
     * @param {external:jQuery.fn.w2form.properties} formOptions w2form
     *        properties
     * @param {external:jQuery.fn.w2popup.properties} popupOptions w2popup
     *        properties
     * @public
     */
    olexp.util.popup = function(id, onChanges, formOptions, popupOptions)
    {

        var name = formOptions.name;
        var record = formOptions.record;

        // ==================================================
        // Create form
        // --------------------------------------------------
        if (w2ui.hasOwnProperty(name))
        {
            w2ui[name].destroy();
        }
        $().w2form($.extend(formOptions, {
            actions : {
                          save :  function () {
                                      // Check for errors
                                      var errors = this.validate();
                                      if (errors.length === 0)
                                      {
                                          // Close popup and update with changes
                                          w2popup.close();
                                          var form = w2ui[name];
                                          var changes = form.getChanges();
                                          onChanges(changes);
                                      }
                                  },
                          reset : function () {
                                      // Reset properties to original item values
                                      var form = w2ui[name];
                                      for (var rname in record)
                                      {
                                          form.record[rname] = record[rname];
                                      }
                                      form.refresh();
                                  }
                      }
        }));

        // ==================================================
        // Display form in popup
        // --------------------------------------------------
        w2popup.open($.extend(popupOptions, {
            body     : ('<div id="' + id + '"></div>'),
            onOpen   : function (event) {
                           event.onComplete = function () {
                               $('#w2ui-popup #' + id).w2render(name);
                           };
                       },
            onToggle : function (event) {
                           var form = w2ui[name];
                           $(form.box).hide();
                           event.onComplete = function () {
                               $(form.box).show();
                               form.resize();
                           };
                       }
        }));

    };

    /**
     * Get properties from feature accounting for clustered features
     * @memberOf olexp.util
     * @param {external:ol.Feature} feature Source feature
     * @public
     * @returns {object} Feature properties
     */
    olexp.util.toProperties = function(feature)
    {
        var properties = feature.getProperties();
        
        // ==================================================
        // Check if this is a cluster feature
        // --------------------------------------------------
        if (properties.hasOwnProperty('features'))
        {
            var features = properties.features;
            if (features instanceof Array)
            {
                if (features.length === 1)
                {
                    // ==================================================
                    // If just one feature get its properties
                    // --------------------------------------------------
                    if (features[0] instanceof ol.Feature)
                    {
                        properties = features[0].getProperties();
                    }
                }
                else
                {
                    // ==================================================
                    // If more than one feature get feature count
                    // --------------------------------------------------
                    var count = 0;
                    for (var i = 0; i < features.length; i++)
                    {
                        if (features[i] instanceof ol.Feature)
                        {
                            count += 1;
                            properties['Cluster Size'] = count;
                        }
                    }
                }
            }
        }
        
        return  properties;
        
    };

    /**
     * Convert properties object to record for w2ui grid
     * @memberOf olexp.util
     * @param {object} properties Object properties to convert to grid record
     * @public
     * @returns {array} Properties in record format
     */
    olexp.util.toRecords = function(properties)
    {
        var records = [];
        var recid = 0;

        // ==================================================
        // Push properties into record
        // --------------------------------------------------
        for (var name in properties)
        {
            var value = properties[name];
            recid += 1;
            records.push({recid: recid, property: name, value: value});
        }

        return records;
    };

    /**
     * Utility functions
     * @memberOf olexp.util
     * @param {olexp.ExplorerSettings} settings olexp settings
     * @public
     */
    olexp.util.Util = function(settings) {
        var util = new Util(settings);
        return {
            addLayerVector  : util.addLayerVector.bind(util),
            getControls     : util.getControls.bind(util),
            getGraticule    : util.getGraticule.bind(util),
            getInteractions : util.getInteractions.bind(util),
            getTileTypes    : util.getTileTypes.bind(util)
        };
    };

    return olexp;

}(olexp || {}));
