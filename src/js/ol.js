/* globals $, document, ol */

/**
 * @description olexp specific OpenLayers 3 classes
 * @namespace olexp.ol
 */
const olexp = {
  ol: {},
};

// ==================================================
// Toolbar show Control
// --------------------------------------------------
(function(olexp) {
  'use strict';

  /**
   * Control to show toolbar
   * @param {olexp.Explorer} explorer Source explorer
   * @param {olexp.ExplorerSettings} settings olexp settings
   * @private
   */
  const ToolbarShow = function(explorer, settings) {
    // ==================================================
    // Override Toolbar Show option defaults
    // with user provided values.
    // --------------------------------------------------
    const olexpSettings = $.extend(true, {
      ol: {
        ToolbarShow: {
          html: 'T',
          title: 'Show toolbar',
        },
      },
    }, settings);

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
    const button = document.createElement('button');
    button.innerHTML = this.settings.html;
    button.title = this.settings.title;
    button.addEventListener('click', this.show.bind(this), false);
    button.addEventListener('touchstart', this.show.bind(this), false);

    // Define control button wrapper div
    const element = document.createElement('div');
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
  ToolbarShow.prototype.show = function() {
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
   * @return {external:jQuery.fn.w2toolbar.properties} ToolbarShow toolbar
   *          control
   */
  olexp.ol.ToolbarShow = function(explorer, options) {
    const opts = $.extend({hidden: false}, options);

    const control = new ToolbarShow(explorer, opts.settings);
    if (opts.hidden) {
      control.setMap(explorer.map);
    }
    return control;
  };

  return olexp;
}(olexp || {}));

export default olexp.ol;
