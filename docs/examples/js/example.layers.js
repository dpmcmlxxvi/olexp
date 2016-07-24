
/**
 * Run explorer layers example
 * @param id Explorer DOM id
 * @param exmples Examples directory 
 */
var runExampleLayers = function(id, examples) {

    // ==================================================
    // Layers Example
    // --------------------------------------------------

    var explorer = new olexp.Explorer(id);

    // ==================================================
    // Add OSM map
    // --------------------------------------------------
    var layerosm = new ol.layer.Tile({
        source: new ol.source.OSM()
    });
    layerosm.set('name','OpenStreetMap');

    // ==================================================
    // Add Stamen map
    // --------------------------------------------------
    var layerstm = new ol.layer.Tile({
        source: new ol.source.Stamen({layer: 'watercolor'})
    });
    layerstm.set('name','Stamen');

    // ==================================================
    // Add tiles group
    // --------------------------------------------------

    var tiles = new ol.layer.Group({
        layers: [layerosm, layerstm]
      });
    tiles.set('name','Tiles');
    explorer.map.addLayer(tiles);

    // ==================================================
    // Add overlay marker and label
    // --------------------------------------------------
    var position = ol.proj.transform([-77.016389, 38.904722],
                                     'EPSG:4326',
                                     'EPSG:3857');

    var marker = new ol.Overlay({
        position: position,
        positioning: 'center-center',
        element: document.getElementById('marker'),
        stopEvent: false
    });
    marker.set('name','Washington D.C. Marker');
    explorer.map.addOverlay(marker);

    var label = new ol.Overlay({
        position: position,
        element: document.getElementById('label')
    });
    label.set('name','Washington D.C. Label');
    explorer.map.addOverlay(label);

    // set center to marker
    explorer.map.getView().setCenter(position);

    // ==================================================
    // Add image vector
    // --------------------------------------------------
    var image = new ol.layer.Image({
        source: new ol.source.ImageVector({
            source: new ol.source.Vector({
                format: new ol.format.GeoJSON(),
                url: examples + '/data/geojson/world_cities.json',
            })
        })
    });
    image.set('name','World Cities');
    explorer.map.addLayer(image);

    // ==================================================
    // Add heatmap
    // --------------------------------------------------
    var heatMap = new ol.layer.Heatmap({
        source: new ol.source.Vector({
            url: examples + '/data/kml/2012_Earthquakes_Mag5.kml',
            format: new ol.format.KML({extractStyles: false})
        }),
        blur: 10,
        radius: 10
    });
    heatMap.set('name','Heat Map');

    // ==================================================
    // Add heatmap source
    // --------------------------------------------------
    var heatSource = new ol.layer.Vector({
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
    heatSource.set('name','Heat Map Source');

    // ==================================================
    // Add heatmap group
    // --------------------------------------------------

    var heatGroup = new ol.layer.Group({
        layers: [heatMap, heatSource]
      });
    heatGroup.set('name','Heat Map Group');
    explorer.map.addLayer(heatGroup);
    
    return explorer;

};
