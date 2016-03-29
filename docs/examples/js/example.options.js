
/**
 * Run explorer options example
 * @param id Explorer DOM id
 * @param exmples Examples directory 
 */
var runExampleOptions = function(id, examples) {

    // ==================================================
    // Use constructor options to move the location of
    // the navigation and toolbar panels, disable
    // a control, hide the overlays node, and change
    // various settings.
    // --------------------------------------------------

    var explorer = new olexp.Explorer(id, {
        controls : {
            toolbarhide : false
        },
        navigation : {
            type : 'right'
        },
        overlays : {
            group    : false,
            hidden : true
        },
        settings : {
            control : {
                        EditSettings       : {hint : 'Modify Controls'},
                        ExportMap          : {hint : 'Export map to image'},
                        Graticule          : {
                                                 enable  : true,
                                                 hint    : 'Modify Grid Lines',
                                                 options : {
                                                               color  : '00ff00'
                                                           }
                                             },
                        LayerControlTile   : {hint : 'Load a tile layer'},
                        LayerControlVector : {hint : 'Load a vector layer'},
                        LayerManager       : {
                                                 hintMoveDown : 'Move selected item down',
                                                 hintMoveUp   : 'Move selected item up',
                                             },
                        Measurement        : {
                                                 hintArea : 'Create area measurement',
                                                 hintLength : 'Create length measurement'
                                             },
                        ToolbarHide        : {hint : 'Hide the toolbar'}
            },
            measure : {
                        Tool: {
                            measuredStyle : new ol.style.Style({
                                                fill:   new ol.style.Fill({
                                                            color: 'rgba(255, 0, 0, 0.2)'
                                                        }),
                                                stroke: new ol.style.Stroke({
                                                            color: '#0000ff',
                                                            width: 2
                                                        })
                                               })
                        }
            },
            menu : {
                Properties : {text : 'Layer Properties'},
                Remove     : {text : 'Delete Layer'},
                Zoom       : {text : 'Zoom To Layer'}
            },
            ol : {
                ToolbarShow : {
                    title : 'Display toolbar'
                }
            }
        },
        toolbar : {
            type : 'bottom'
        }
    });

    // ==================================================
    // Add new context menu
    // --------------------------------------------------

    // Add new context menu item
    explorer.outline.menu.push({id   : 'new-menu',
                                text : 'Show Details',
                                img  : 'icon-page' });

    // Add new context menu item callback
    (function() {
        
        // Store old callbacks
        var old = explorer.outline.onMenuClick;

        explorer.outline.onMenuClick = function(event) {

            // Run existing callbacks 
            old.apply(this, arguments);

            // Run new callback which popups item details
            if (event.menuItem.id === 'new-menu')
            {
                var item = explorer.manager.getById(event.target);
                var records = explorer.manager.getDetails(event.target);
                w2popup.open({
                    body    : '<div id="details-popup" style="height: 100%; width: 100%;"></div>',
                    onClose : function (event) {
                                  event.onComplete = function () {
                                      w2ui['details-grid'].destroy();
                                  };
                              },
                    onOpen  : function (event) {
                                  event.onComplete = function () {
                                      $('#details-popup').w2grid({
                                          name    : 'details-grid',
                                          columns : explorer.details.columns,
                                          records : records
                                      });
                                  };
                              },
                    title   : item.name()
                });
            }

            return this;
        }
    })();

    // ==================================================
    // Add OSM map
    // --------------------------------------------------

    var layerosm = new ol.layer.Tile({
        source: new ol.source.OSM()
    });
    layerosm.set('name','OpenStreetMap');

    explorer.map.addLayer(layerosm);

    // ==================================================
    // Add vector layer
    // --------------------------------------------------

    var vector = new ol.layer.Vector({
        source: new ol.source.Cluster({
            source: new ol.source.Vector({
                url: examples + '/data/kml/2012_Earthquakes_Mag5.kml',
                format: new ol.format.KML()
            })}),
        style: function(feature, resolution) {
            var size = feature.get('features').length;
            var style = [new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 10,
                    stroke: new ol.style.Stroke({color: '#ffffff'}),
                    fill: new ol.style.Fill({color: '#3399CC'})
                }),
                text: new ol.style.Text({
                    text: size.toString(),
                    fill: new ol.style.Fill({color: '#ffffff'})
                })
            })];
            return style;
        }
    });
    vector.set('name','Earthquakes');

    explorer.map.addLayer(vector);
    
    return explorer;

};
