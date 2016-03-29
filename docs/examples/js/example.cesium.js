
/**
 * Run explorer cesium example
 * @param id Explorer DOM id
 */
var runExampleCesium = function(id) {

    // ==================================================
    // Add explorer
    // --------------------------------------------------

    var explorer = new olexp.Explorer(id);
    var layerstm = new ol.layer.Tile({
        source: new ol.source.Stamen({layer: 'watercolor'})
    });
    layerstm.set('name','Stamen');
    explorer.map.addLayer(layerstm);

    // ==================================================
    // Add cesium
    // --------------------------------------------------

    this.ol3d = new olcs.OLCesium({map: explorer.map});
    this.ol3d.setEnabled(true);

};
