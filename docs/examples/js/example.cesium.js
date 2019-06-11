/**
 * Run explorer cesium example
 * @param {string} id Explorer DOM id
 * @return {Explorer} OpenLayers Explorer instance
 */
// eslint-disable-next-line no-unused-vars
const runExampleCesium = function(id) {
  // ==================================================
  // Add explorer
  // --------------------------------------------------

  const explorer = new olexp.Explorer(id);
  const layerstm = new ol.layer.Tile({
    source: new ol.source.Stamen({layer: 'watercolor'}),
  });
  layerstm.set('name', 'Stamen');
  explorer.map.addLayer(layerstm);

  // ==================================================
  // Add cesium
  // --------------------------------------------------

  explorer.ol3d = new olcs.OLCesium({map: explorer.map});
  explorer.ol3d.setEnabled(true);

  return explorer;
};
