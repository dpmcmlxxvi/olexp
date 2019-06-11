import olexpUtil from './util';

/* globals ol */

/**
 * @namespace olexp.selection
 * @private
 */
const olexp = {
  selection: {},
  util: olexpUtil,
};

// ==================================================
// Selection Tool
// --------------------------------------------------
(function(olexp) {
  'use strict';

  /**
   * Handles the selection of features on the map
   * @param {ol.Map} map Managed map
   * @param {external:jQuery.fn.w2grid} details Details grid
   * @private
   */
  const Feature = function(map, details) {
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
    const me = this;
    this.interaction.on('select', function(event) {
      if (event.selected.length === 1) {
        const feature = event.selected[0];
        const properties = olexp.util.toProperties(feature);
        Object.keys(properties).forEach(function(name) {
          const type = typeof properties[name];
          if ((type !== 'boolean') &&
              (type !== 'number') &&
              (type !== 'string')) {
            delete properties[name];
          }
        });
        const records = olexp.util.toRecords(properties);
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
  Feature.prototype.setEnable = function(enable) {
    if (enable) {
      this.map.addInteraction(this.interaction);
    } else {
      this.map.removeInteraction(this.interaction);
    }
  };

  /**
   * Selection tool
   * @memberOf olexp.selection
   * @param {external:ol.Map} map Managed map
   * @param {external:jQuery.fn.w2grid} details Details grid
   * @private
   * @return {olexp.selection.Feature} Feature selector
   */
  olexp.selection.Feature = function(map, details) {
    const selector = new Feature(map, details);

    /**
     * @description The objects exposed by the olexp.selection.Feature API
     * @typedef {object} Feature
     * @memberOf olexp.selection
     * @property {function} setEnable Enable/disable feature selection
     */
    return {
      setEnable: function(enable) {
        selector.setEnable(enable);
      },
    };
  };

  return olexp;
}(olexp || {}));

export default olexp.selection;
