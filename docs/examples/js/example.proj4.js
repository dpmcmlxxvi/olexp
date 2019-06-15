window.onload = function() {
  window.explorer = runExampleLayers('explorer', '.');

  // Read GeoJSON and parse CRS name
  const title = 'Maryland - UTM';
  const url = './data/geojson/gz_2010_us_040_00_500k.maryland.utm.geojson';
  $.getJSON(url, function(data) {
    // Query epsg.io for projection definition of CRS
    const urn = data.crs.properties.name;
    const split = urn.split(':');
    const code = split[split.length-1];
    const query = 'http://epsg.io/?format=json&q=' + code;

    fetch(query).then(function(response) {
      return response.json();
    }).then(function(json) {
      if (json.results.length > 0) {
        // Add proj4 definition for CRS
        proj4.defs(urn, json.results[0].proj4);

        // Add layer
        const format = new ol.format.GeoJSON();
        const source = new ol.source.Vector({
          url: url,
          format: format,
        });
        const layer = new ol.layer.Vector({source: source});
        layer.set('name', title);
        window.explorer.map.addLayer(layer);
      } else {
        w2alert('Computing epsg.io projection failed for URL:<br/>' + url);
      }
    }).catch(function(err) {
      w2alert('Fetching proj4 projection failed for URL:<br/>' + url);
    });
  }).fail(function() {
    w2alert('Parsing GeoJSON failed for URL:<br/>' + url);
  });
};
