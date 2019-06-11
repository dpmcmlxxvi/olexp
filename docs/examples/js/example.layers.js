/**
 * Run explorer layers example
 * @param {string} id Explorer DOM id
 * @param {string} examples Examples directory
 * @return {Explorer} OpenLayer Explorer instance
 */
// eslint-disable-next-line no-unused-vars
const runExampleLayers = function(id, examples) {
  // ==================================================
  // Layers Example
  // --------------------------------------------------

  const explorer = new olexp.Explorer(id);

  // ==================================================
  // Add OSM map
  // --------------------------------------------------
  const layerosm = new ol.layer.Tile({
    source: new ol.source.OSM(),
  });
  layerosm.set('name', 'OpenStreetMap');

  // ==================================================
  // Add Stamen map
  // --------------------------------------------------
  const layerstm = new ol.layer.Tile({
    source: new ol.source.Stamen({layer: 'watercolor'}),
  });
  layerstm.set('name', 'Stamen');

  // ==================================================
  // Add tiles group
  // --------------------------------------------------

  const tiles = new ol.layer.Group({
    layers: [layerosm, layerstm],
  });
  tiles.set('name', 'Tiles');
  explorer.map.addLayer(tiles);

  // ==================================================
  // Add overlay marker and label
  // --------------------------------------------------
  const position = ol.proj.transform([-77.016389, 38.904722],
      'EPSG:4326',
      'EPSG:3857');

  const marker = new ol.Overlay({
    position: position,
    positioning: 'center-center',
    element: document.getElementById('marker'),
    stopEvent: false,
  });
  marker.set('name', 'Washington D.C. Marker');
  explorer.map.addOverlay(marker);

  const label = new ol.Overlay({
    position: position,
    element: document.getElementById('label'),
  });
  label.set('name', 'Washington D.C. Label');
  explorer.map.addOverlay(label);

  // set center to marker
  explorer.map.getView().setCenter(position);

  // ==================================================
  // Add image vector
  // --------------------------------------------------
  const image = new ol.layer.Image({
    source: new ol.source.ImageVector({
      source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: examples + '/data/geojson/world_cities.json',
      }),
    }),
  });
  image.set('name', 'World Cities');
  explorer.map.addLayer(image);

  // ==================================================
  // Add heatmap
  // --------------------------------------------------
  const heatMap = new ol.layer.Heatmap({
    source: new ol.source.Vector({
      url: examples + '/data/kml/2012_Earthquakes_Mag5.kml',
      format: new ol.format.KML({extractStyles: false}),
    }),
    blur: 10,
    radius: 10,
  });
  heatMap.set('name', 'Heat Map');

  // ==================================================
  // Add heatmap source
  // --------------------------------------------------
  const heatSource = new ol.layer.Vector({
    source: new ol.source.Cluster({
      source: new ol.source.Vector({
        url: examples + '/data/kml/2012_Earthquakes_Mag5.kml',
        format: new ol.format.KML(),
      })}),
    style: function(feature, resolution) {
      const size = feature.get('features').length;
      const style = [new ol.style.Style({
        image: new ol.style.Circle({
          radius: 10,
          stroke: new ol.style.Stroke({color: '#ffffff'}),
          fill: new ol.style.Fill({color: '#3399CC'}),
        }),
        text: new ol.style.Text({
          text: size.toString(),
          fill: new ol.style.Fill({color: '#ffffff'}),
        }),
      })];
      return style;
    },
  });
  heatSource.set('name', 'Heat Map Source');

  // ==================================================
  // Add heatmap group
  // --------------------------------------------------

  const heatGroup = new ol.layer.Group({
    layers: [heatMap, heatSource],
  });
  heatGroup.set('name', 'Heat Map Group');
  explorer.map.addLayer(heatGroup);

  return explorer;
};
