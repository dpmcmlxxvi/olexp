window.explorer = new olexp.Explorer('explorer');
window.data = (() => {
  const coordinate = [-77.016389, 38.904722];
  const position = ol.proj.transform(coordinate, 'EPSG:4326', 'EPSG:3857');
  const geometry = {type: 'Point', coordinates: position};
  const geojson = {type: 'Feature', geometry: geometry, properties: {}};
  const features = (new ol.format.GeoJSON()).readFeatures(geojson);
  const source = new ol.source.Vector({features: features});
  const element = document.getElementById('overlay');
  const vector = new ol.layer.Vector({source: source});
  const group = new ol.layer.Group({layers: [vector]});
  const overlay = new ol.Overlay({position, element, stopEvent: false});
  const tile = new ol.layer.Tile({source: new ol.source.OSM()});
  return {group, overlay, tile, vector};
})();
