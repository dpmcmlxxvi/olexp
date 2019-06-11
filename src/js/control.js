import olexpMeasure from './measure';
import olexpOl from './ol';
import olexpUtil from './util';

/* globals $, atob, document, ol, w2alert */

/**
 * @namespace olexp.control
 */
const olexp = {
  control: {},
  measure: olexpMeasure,
  ol: olexpOl,
  util: olexpUtil,
};

// ==================================================
// Edit Settings Control
// --------------------------------------------------
(function(olexp) {
  'use strict';

  /**
   * Control to edit settings
   * @param {ol.Map} map Source map
   * @param {olexp.ExplorerSettings} settings olexp settings
   * @private
   */
  const EditSettings = function(map, settings) {
    // ==================================================
    // Override Edit Settings Control default settings
    // with user provided values.
    // --------------------------------------------------
    const olexpSettings = $.extend(true, {
      control: {
        EditSettings: {
          form: {
            header: '',
            style: 'border: 0px; background-color: transparent;',
          },
          hint: 'Edit Controls',
          popup: {
            height: 380,
            style: 'width: 100%; height: 100%;',
            title: 'Edit Controls',
            width: 225,
          },
          span: 6,
        },
      },
    }, settings);

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
  EditSettings.prototype.display = function() {
    const me = this;

    // ==================================================
    // Form fields
    // --------------------------------------------------
    const fields = [{
      html: {
        caption: 'Full Screen',
        span: this.settings.span,
      },
      name: 'fullscreen',
      type: 'checkbox',
    }, {
      html: {
        caption: 'Mouse Position',
        span: this.settings.span,
      },
      name: 'mouseposition',
      type: 'checkbox',
    }, {
      html: {
        caption: 'Overview Map',
        span: this.settings.span,
      },
      name: 'overviewmap',
      type: 'checkbox',
    }, {
      html: {
        caption: 'Rotate',
        span: this.settings.span,
      },
      name: 'rotate',
      type: 'checkbox',
    }, {
      html: {
        caption: 'Scale Line',
        span: this.settings.span,
      },
      name: 'scaleline',
      type: 'checkbox',
    }, {
      html: {
        caption: 'Zoom',
        span: this.settings.span,
      },
      name: 'zoom',
      type: 'checkbox',
    }, {
      html: {
        caption: 'Zoom Slider',
        span: this.settings.span,
      },
      name: 'zoomslider',
      type: 'checkbox',
    }, {
      html: {
        caption: 'Zoom To Extent',
        span: this.settings.span,
      },
      name: 'zoomtoextent',
      type: 'checkbox',
    }];

    // ==================================================
    // Extract controls to be edited
    // --------------------------------------------------
    const record = {
      fullscreen: this.isControlActive('fullscreen'),
      mouseposition: this.isControlActive('mouseposition'),
      overviewmap: this.isControlActive('overviewmap'),
      rotate: this.isControlActive('rotate'),
      scaleline: this.isControlActive('scaleline'),
      zoom: this.isControlActive('zoom'),
      zoomslider: this.isControlActive('zoomslider'),
      zoomtoextent: this.isControlActive('zoomtoextent'),
    };

    // ==================================================
    // Function to process form changes
    // --------------------------------------------------
    const onChanges = function(changes) {
      Object.keys(changes).forEach(function(name) {
        const enable = changes[name];
        me.setControl(name, enable);
      });
    };

    // ==================================================
    // Process popup form
    // --------------------------------------------------

    const formOptions = $.extend(this.settings.form, {
      fields: fields,
      name: this.name,
      record: record,
    });

    const popupOptions = this.settings.popup;

    olexp.util.popup(this.id, onChanges, formOptions, popupOptions);
  };

  /**
   * Get control with given name
   * @param {string} name Name of control to check if active
   * @private
   * @return {ol.control.Control} Control with given name or null if none
   */
  EditSettings.prototype.getControl = function(name) {
    const controls = this.map.getControls().getArray();
    let ctrl = null;
    controls.forEach(function(control) {
      if (ctrl !== null) {
        return;
      }
      if (name === 'fullscreen' &&
          control instanceof ol.control.FullScreen) {
        ctrl = control;
      } else if (name === 'mouseposition' &&
          control instanceof ol.control.MousePosition) {
        ctrl = control;
      } else if (name === 'overviewmap' &&
          control instanceof ol.control.OverviewMap) {
        ctrl = control;
      } else if (name === 'rotate' &&
          control instanceof ol.control.Rotate) {
        ctrl = control;
      } else if (name === 'scaleline' &&
          control instanceof ol.control.ScaleLine) {
        ctrl = control;
      } else if (name === 'zoom' &&
          control instanceof ol.control.Zoom) {
        ctrl = control;
      } else if (name === 'zoomslider' &&
          control instanceof ol.control.ZoomSlider) {
        ctrl = control;
      } else if (name === 'zoomtoextent' &&
          control instanceof ol.control.ZoomToExtent) {
        ctrl = control;
      }
    });
    return ctrl;
  };

  /**
   * Check if control is active
   * @param {string} name Name of control to check if active
   * @private
   * @return {boolean} True if control is active otherwise false
   */
  EditSettings.prototype.isControlActive = function(name) {
    const control = this.getControl(name);
    if (control !== null && control.getMap() !== null) {
      return true;
    }
    return false;
  };

  /**
   * Set control with given name
   * @param {string} name Name of control to check if active
   * @param {boolean} enable True if control is to be enabled otherwise false
   * @private
   */
  EditSettings.prototype.setControl = function(name, enable) {
    const control = this.getControl(name);
    if (control === null) {
      return;
    }
    const map = (enable ? this.map : null);
    control.setMap(map);
  };

  /**
   * Control to edit settings to enable/disable ol3 controls displayed on map.
   * @memberOf olexp.control
   * @param {olexp.Explorer} explorer Source explorer
   * @param {object} options Control options
   * @param {olexp.ExplorerSettings} options.settings Explorer settings
   * @public
   * @return {external:jQuery.fn.w2toolbar.properties} EditSettings toolbar
   *          control
   */
  olexp.control.editSettings = function(explorer, options) {
    const control = new EditSettings(explorer.map, options.settings);

    return {
      hint: control.settings.hint,
      id: control.button,
      img: control.icon,
      onClick: function() {
        control.display();
      },
      type: 'button',
    };
  };

  return olexp;
}(olexp || {}));

// ==================================================
// Export Map Control
// --------------------------------------------------
(function(olexp) {
  'use strict';

  /**
   * Control to export map to image
   * @param {ol.Map} map Map on which to render measurements
   * @param {olexp.ExplorerSettings} settings olexp settings
   * @private
   */
  const ExportMap = function(map, settings) {
    // ==================================================
    // Override Export Map Control option defaults
    // with user provided values.
    // --------------------------------------------------
    const olexpSettings = $.extend(true, {
      control: {
        ExportMap: {
          filename: 'map.png',
          hint: 'Export map',
        },
      },
    }, settings);

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
  ExportMap.prototype.toImage = function() {
    // ==================================================
    // Create a temporary anchor, click it, then remove it
    // --------------------------------------------------
    const id = this.anchor;
    const filename = this.filename;

    // Create anchor and callback when anchor is clicked
    $('body').append('<a id="' + id + '" download="' + filename + '"></a>');
    const anchor = document.getElementById(id);
    const self = this;
    const callback = function() {
      self.map.once('postcompose', function(event) {
        anchor.href = event.context.canvas.toDataURL('image/png');
      });
      self.map.renderSync();
    };
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
   * @return {external:jQuery.fn.w2toolbar.properties} ExportMap toolbar
   *          control
   */
  olexp.control.exportMap = function(explorer, options) {
    const control = new ExportMap(explorer.map, options.settings);

    return {
      hint: control.settings.hint,
      id: control.button,
      img: control.icon,
      onClick: function() {
        control.toImage();
      },
      type: 'button',
    };
  };

  return olexp;
}(olexp || {}));

// ==================================================
// Graticule Controls
// --------------------------------------------------
(function(olexp) {
  'use strict';

  /**
   * Control to display graticule
   * @param {ol.Map} map Source map
   * @param {olexp.ExplorerSettings} settings olexp settings
   * @private
   */
  const Graticule = function(map, settings) {
    // ==================================================
    // Override Graticule Control option defaults
    // with user provided values.
    // --------------------------------------------------
    const olexpSettings = $.extend(true, {
      control: {
        Graticule: {
          enable: false,
          form: {
            header: '',
            style: 'border: 0px; background-color: transparent;',
          },
          hint: 'Edit Grid Lines',
          options: {
            color: '000000',
            lineDash: [0.5, 4],
            width: 2,
          },
          popup: {
            height: 225,
            style: 'border: 0px; background-color: transparent;',
            title: 'Edit Grid Lines',
            width: 300,
          },
          span: 3,
        },
      },
    }, settings);

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
    this.graticule = this.util.getGraticule(
        (this.settings.enable ? this.map : null),
        $.extend({}, this.settings.options));
  };

  /**
   * Display graticule form
   * @private
   */
  Graticule.prototype.display = function() {
    const me = this;

    // ==================================================
    // Form fields
    // --------------------------------------------------
    const fields = [{
      html: {
        caption: 'Enable',
        span: this.settings.span,
      },
      name: 'enable',
      required: true,
      type: 'checkbox',
    }, {
      html: {
        caption: 'Color',
        span: this.settings.span,
      },
      name: 'color',
      options: {
        silent: false,
      },
      required: true,
      type: 'color',
    }, {
      html: {
        caption: 'Width',
        span: this.settings.span,
      },
      name: 'width',
      options: {
        arrows: true,
        max: 4,
        min: 0.25,
        placeholder: '0.25 - 4',
        silent: false,
        step: 0.25,
      },
      required: true,
      type: 'float',
    }];

    // ==================================================
    // Define allowable tile types
    // --------------------------------------------------
    const record = this.graticule.olexpRecord;

    // ==================================================
    // Function to process form changes
    // --------------------------------------------------
    const onChanges = function(changes) {
      Object.keys(changes).forEach(function(name) {
        record[name] = changes[name];
      });
      const options = $.extend({}, record);
      delete options.enable;
      me.graticule.setMap(null);
      me.graticule = me.util.getGraticule((record.enable ? me.map : null),
          options);
    };

    // ==================================================
    // Process popup form
    // --------------------------------------------------

    const formOptions = $.extend(this.settings.form, {
      fields: fields,
      name: this.name,
      record: record,
    });

    const popupOptions = this.settings.popup;

    olexp.util.popup(this.id, onChanges, formOptions, popupOptions);
  };

  /**
   * Control to edit grid lines.
   * @memberOf olexp.control
   * @param {olexp.Explorer} explorer Source Explorer
   * @param {object} options Control options
   * @param {olexp.ExplorerSettings} options.settings Explorer settings
   * @public
   * @return {external:jQuery.fn.w2toolbar.properties} Graticule toolbar
   *          control
   */
  olexp.control.graticule = function(explorer, options) {
    if (options === undefined) {
      options = {};
    }
    if (options.settings === undefined) {
      options.settings = {};
    }

    const control = new Graticule(explorer.map, options.settings);

    return {
      hint: control.settings.hint,
      id: control.button,
      img: control.icon,
      onClick: function() {
        control.display();
      },
      type: 'button',
    };
  };

  return olexp;
}(olexp || {}));

// ==================================================
// Layer Controls
// --------------------------------------------------
(function(olexp) {
  'use strict';

  /**
   * Control to add layers
   * @param {ol.Map} map
   * @param {olexp.ExplorerSettings} settings olexp settings
   * @private
   */
  const LayerControl = function(map, settings) {
    // ==================================================
    // Override Layer Control Tile option defaults
    // with user provided values.
    // --------------------------------------------------
    const olexpSettings = $.extend(true, {
      control: {
        LayerControlTile: {
          form: {
            header: '',
            style: 'border: 0px; background-color: transparent;',
          },
          hint: 'Add Tile Layer',
          popup: {
            height: 165,
            style: 'border: 0px; background-color: transparent;',
            title: 'Add Tile Layer',
            width: 290,
          },
          span: 3,
        },
        LayerControlVector: {
          form: {
            header: ('File Types: ' + $.map(olexp.util.FileTypes, function(o) {
              return ' ' + o.name;
            })),
            style: 'border: 0px; background-color: transparent;',
          },
          hint: 'Add Vector Layer',
          popup: {
            height: 195,
            style: 'border: 0px; background-color: transparent;',
            title: 'Add Vector Layer',
            width: 350,
          },
          span: 4,
        },
      },
    }, settings);

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
      tile: 'olexp-control-layer-control-add-tile',
      vector: 'olexp-control-layer-control-add-vector',
    };

    /**
     * Button element ids
     * @field
     * @private
     * @type {string}
     */
    this.buttons = {
      tile: settings.prefix + '-control-layer-control-add-tile-button',
      vector: settings.prefix + '-control-layer-control-add-vector-button',
    };

    /**
     * Controls element ids
     * @field
     * @private
     * @type {string}
     */
    this.ids = {
      tile: settings.prefix + '-control-layer-control-add-tile',
      vector: settings.prefix + '-control-layer-control-add-vector',
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
      tile: settings.prefix + '-control-tile-form',
      vector: settings.prefix + '-control-vector-form',
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
  LayerControl.prototype.tile = function() {
    const me = this;

    // ==================================================
    // Define allowable tile types
    // --------------------------------------------------
    const tileTypes = this.util.getTileTypes();
    const items = $.map(tileTypes, function(val) {
      return val.name;
    });

    // ==================================================
    // Form fields
    // --------------------------------------------------
    const fields = [{
      field: 'tile_source',
      html: {
        caption: 'Source',
        span: this.settingsTile.span,
      },
      options: {
        items: items,
      },
      required: true,
      type: 'list',
    }];

    // ==================================================
    // Form record
    // --------------------------------------------------
    const record = {};
    record[fields[0].field] = null;

    // ==================================================
    // Function to process form changes
    // --------------------------------------------------
    const onChanges = function(changes) {
      Object.keys(changes).forEach(function(fieldName) {
        if (fieldName !== fields[0].field) {
          return;
        }

        // Search for selected tile in list
        const typeName = changes[fieldName].id;
        Object.keys(tileTypes).forEach(function(key) {
          if (typeName !== tileTypes[key].name) {
            return;
          }
          const tileType = tileTypes[key];
          const TileClass = tileType['class'];
          const tile = new ol.layer.Tile({
            source: new TileClass(tileType.settings),
          });
          tile.set('name', typeName);
          me.map.addLayer(tile);
        });
      });
    };

    // ==================================================
    // Process popup form
    // --------------------------------------------------

    const formOptions = $.extend(this.settingsTile.form, {
      fields: fields,
      name: this.names.tile,
      record: record,
    });

    const popupOptions = this.settingsTile.popup;

    olexp.util.popup(this.ids.tile, onChanges, formOptions, popupOptions);
  };

  /**
   * Display add vector form
   * @private
   */
  LayerControl.prototype.vector = function() {
    const me = this;

    // ==================================================
    // Form fields
    // --------------------------------------------------
    const fields = [{
      field: 'vector_source',
      html: {
        caption: 'Source',
        span: this.settingsVector.span,
      },
      options: {
        placeholder: 'Click to add file',
        silent: false,
      },
      required: true,
      type: 'file',
    }];

    // ==================================================
    // Form record
    // --------------------------------------------------
    const record = {};
    record[fields[0].field] = null;

    // ==================================================
    // Function to process form changes
    // --------------------------------------------------
    const onChanges = function(changes) {
      Object.keys(changes).forEach(function(fieldName) {
        if (fieldName !== fields[0].field) {
          return;
        }

        // Search for selected tile in list
        Object.keys(changes[fieldName]).forEach(function(change) {
          // Check that file contents are valid
          const content = changes[fieldName][change].content;
          if (content === undefined || content === null) {
            return;
          }

          // Extract filename and contents
          const filename = changes[fieldName][change].name;
          const name = olexp.util.setExtension(filename, '');

          // Get file reader
          const reader = olexp.util.getReader(filename);
          if (reader === null) {
            w2alert('Unable to open file ' + filename, 'Error');
            return;
          }

          // Convert file contents from base64 to text
          // Read features and convert to map coordinates
          const text = atob(content);
          const projection = me.map.getView().getProjection();
          const options = {'featureProjection': projection};
          const features = reader.readFeatures(text, options);

          // Add features to map
          me.util.addLayerVector(me.map, name, features);
        });
      });
    };

    // ==================================================
    // Process popup form
    // --------------------------------------------------

    const formOptions = $.extend(this.settingsVector.form, {
      fields: fields,
      name: this.names.vector,
      record: record,
    });

    const popupOptions = this.settingsVector.popup;

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
   * @return {array} Array of w2toolbar properties
   */
  olexp.control.layerControl = function(explorer, options) {
    if (options === undefined) {
      options = {};
    }
    if (options.tile === undefined) {
      options.tile = true;
    }
    if (options.vector === undefined) {
      options.vector = true;
    }
    if (options.settings === undefined) {
      options.settings = {};
    }

    const tool = new LayerControl(explorer.map, options.settings);

    // Add controls for those selected
    const controls = [];
    if (options.tile) {
      controls.push({
        hint: tool.settingsTile.hint,
        id: tool.buttons.tile,
        img: tool.icons.tile,
        onClick: function() {
          tool.tile();
        },
        type: 'button',
      });
    }
    if (options.vector) {
      controls.push({
        hint: tool.settingsVector.hint,
        id: tool.buttons.vector,
        img: tool.icons.vector,
        onClick: function() {
          tool.vector();
        },
        type: 'button',
      });
    }

    return controls;
  };

  return olexp;
}(olexp || {}));

// ==================================================
// Layer Manager Controls
// --------------------------------------------------
(function(olexp) {
  'use strict';

  /**
   * Control to manage layers
   * @param {olexp.Explorer} explorer Explorer
   * @param {olexp.manager.Manager} manager Explorer manager
   * @param {olexp.ExplorerSettings} settings olexp settings
   * @private
   */
  const LayerManager = function(explorer, manager, settings) {
    // ==================================================
    // Override Layer Manager option defaults
    // with user provided values.
    // --------------------------------------------------
    const olexpSettings = $.extend(true, {
      control: {
        LayerManager: {
          hintDetailsHide: 'Hide details',
          hintDetailsShow: 'Show details',
          hintMoveDown: 'Move item down',
          hintMoveUp: 'Move item up',
          hintOutlineHide: 'Hide outline',
          hintOutlineShow: 'Show outline',
        },
      },
    }, settings);

    /**
     * Button element ids
     * @field
     * @private
     * @type {string}
     */
    this.buttons = {
      details: settings.prefix + '-control-layer-manager-button-details',
      down: settings.prefix + '-control-layer-manager-button-down',
      navigation: settings.prefix + '-control-layer-manager-button-navigation',
      up: settings.prefix + '-control-layer-manager-button-up',
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
      details: 'olexp-control-layer-manager-details',
      down: 'olexp-control-layer-manager-down',
      navigation: 'olexp-control-layer-manager-navigation',
      up: 'olexp-control-layer-manager-up',
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
  LayerManager.prototype.details = function() {
    const type = this.explorer.options.details.type;
    this.explorer.navigation.toggle(type);
    // Set control tooltip based on navigation panel visibility
    const details = this.explorer.navigation.get(type);
    const item = this.explorer.toolbar.get(this.buttons.details);
    item.hint = this.hintDetails(details.hidden);
    this.explorer.toolbar.refresh();
  };

  /**
   * Move layer down
   * @private
   */
  LayerManager.prototype.down = function() {
    this.manager.moveDown();
  };

  /**
   * Set details control hint text
   * @param {boolean} hidden True if details is hidden otherwise false
   * @private
   * @return {String} Hint text.
   */
  LayerManager.prototype.hintDetails = function(hidden) {
    return (hidden ?
        this.settings.hintDetailsShow :
        this.settings.hintDetailsHide);
  };

  /**
   * Set navigation control hint text
   * @param {boolean} hidden True if navigation is hidden otherwise false
   * @private
   * @return {String} Hint text.
   */
  LayerManager.prototype.hintNavigation = function(hidden) {
    return (hidden ?
        this.settings.hintOutlineShow :
        this.settings.hintOutlineHide);
  };

  /**
   * Show navigation
   * @private
   */
  LayerManager.prototype.navigation = function() {
    const type = this.explorer.options.navigation.type;
    this.explorer.layout.toggle(type);
    // Set control tooltip based on navigation panel visibility
    const navigation = this.explorer.layout.get(type);
    const item = this.explorer.toolbar.get(this.buttons.navigation);
    item.hint = this.hintNavigation(navigation.hidden);
    this.explorer.toolbar.refresh();
  };

  /**
   * Callback when layer removed
   * @param {olexp.item.Item} item OpenLayers Explorer Item
   * @private
   */
  LayerManager.prototype.onItemRemoved = function(item) {
    if (this.manager.isSelected(item.id)) {
      this.explorer.toolbar.disable(this.buttons.up);
      this.explorer.toolbar.disable(this.buttons.down);
    }
  };

  /**
   * Callback when node is selected either by click or double click
   * @param {string} id Layer ID
   * @private
   */
  LayerManager.prototype.onItemSelected = function(id) {
    if (id === undefined) {
      return;
    }
    const item = this.manager.getById(id);
    if (item === null) {
      return;
    }
    const node = this.manager.getNode(item.id);
    if (node.disabled) {
      this.explorer.toolbar.disable(this.buttons.up);
      this.explorer.toolbar.disable(this.buttons.down);
    } else {
      this.explorer.toolbar.enable(this.buttons.up);
      this.explorer.toolbar.enable(this.buttons.down);
    }
  };

  /**
   * Move layer up
   * @private
   */
  LayerManager.prototype.up = function() {
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
   * @return {array} Array of external:jQuery.fn.w2toolbar.properties
   */
  olexp.control.layerManager = function(explorer, manager, options) {
    if (options === undefined) {
      options = {};
    }

    if (options.details === undefined) {
      options.details = {};
    }
    if (options.details.enabled === undefined) {
      options.details.enabled = true;
    }
    if (options.details.checked === undefined) {
      options.details.checked = true;
    }
    if (options.down === undefined) {
      options.down = true;
    }
    if (options.navigation === undefined) {
      options.navigation = {};
    }
    if (options.navigation.enabled === undefined) {
      options.navigation.enabled = true;
    }
    if (options.navigation.checked === undefined) {
      options.navigation.checked = true;
    }
    if (options.up === undefined) {
      options.up = true;
    }

    const tool = new LayerManager(explorer, manager, options.settings);

    // Add controls for those selected
    const controls = [];
    if (options.navigation.enabled) {
      // Determine control tooltip based on navigation panel visibility
      controls.push({
        checked: options.navigation.checked,
        hint: tool.hintNavigation(!options.navigation.checked),
        id: tool.buttons.navigation,
        img: tool.icons.navigation,
        onClick: function() {
          tool.navigation();
        },
        type: 'check',
      });
    }
    if (options.details.enabled) {
      // Determine control tooltip based on details panel visibility
      controls.push({
        checked: options.details.checked,
        hint: tool.hintDetails(!options.details.checked),
        id: tool.buttons.details,
        img: tool.icons.details,
        onClick: function() {
          tool.details();
        },
        type: 'check',
      });
    }
    if (options.up) {
      controls.push({
        disabled: true,
        hint: tool.settings.hintMoveUp,
        id: tool.buttons.up,
        img: tool.icons.up,
        onClick: function() {
          tool.up();
        },
        type: 'button',
      });
    }
    if (options.down) {
      controls.push({
        disabled: true,
        hint: tool.settings.hintMoveDown,
        id: tool.buttons.down,
        img: tool.icons.down,
        onClick: function() {
          tool.down();
        },
        type: 'button',
      });
    }

    return controls;
  };

  return olexp;
}(olexp || {}));

// ==================================================
// Layer Menu Control
// --------------------------------------------------
(function(olexp) {
  'use strict';

  /**
   * Control to display layer menu properties
   * @param {olexp.Explorer} explorer Explorer
   * @param {olexp.manager.Manager} manager Explorer manager
   * @param {object} menu Item Menus {items     : list of menu item,
   *                                  callbacks : list of menu item callbacks}
   * @param {olexp.ExplorerSettings} settings olexp.ExplorerSettings
   * @private
   */
  const LayerMenu = function(explorer, manager, menu, settings) {
    // ==================================================
    // Override Layer Menu Control option defaults
    // with user provided values.
    // --------------------------------------------------
    const olexpSettings = $.extend(true, {
      control: {
        LayerMenu: {
          arrow: true,
          hint: 'Item Options',
          text: '',
        },
      },
    }, settings);

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
  LayerMenu.prototype.onItemRemoved = function(item) {
    if (this.manager.isSelected(item.id)) {
      this.explorer.toolbar.disable(this.button);
    }
  };

  /**
   * Callback when node is selected either by click or double click
   * @param {string} id Layer ID
   * @private
   */
  LayerMenu.prototype.onItemSelected = function(id) {
    if (id === undefined) {
      return;
    }
    const item = this.manager.getById(id);
    if (item === null) {
      return;
    }
    const node = this.manager.getNode(item.id);
    if (node.disabled) {
      this.explorer.toolbar.disable(this.button);
    } else {
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
   * @return {external:jQuery.fn.w2toolbar.properties} LayerMenu toolbar
   *          control
   */
  olexp.control.layerMenu = function(explorer, manager, menu, options) {
    const control = new LayerMenu(explorer, manager, menu, options.settings);

    explorer.toolbar.on('click', function(event) {
      // Check if any item is selected
      if (explorer.outline.selected === null) {
        return;
      }

      // Check if layer menu item was selected
      const id = control.button + ':';
      if (event.target.indexOf(id) < 0) {
        return;
      }
      const menuid = event.target.replace(id, '');

      // Create dummy menu event
      if (menu.callbacks[menuid] !== undefined) {
        menu.callbacks[menuid]({target: explorer.outline.selected});
      }
    });

    return {
      arrow: control.settings.arrow,
      disabled: true,
      hint: control.settings.hint,
      id: control.button,
      img: control.icon,
      items: control.menu.items,
      text: control.settings.text,
      type: 'menu',
    };
  };

  return olexp;
}(olexp || {}));

// ==================================================
// Measurement Controls
// --------------------------------------------------
(function(olexp) {
  'use strict';

  /**
   * Control to calculate measurements
   * @param {olexp.Explorer} explorer Explorer
   * @param {olexp.ExplorerSettings} settings olexp settings
   * @private
   */
  const Measurement = function(explorer, settings) {
    // ==================================================
    // Override Measurement option defaults
    // with user provided values.
    // --------------------------------------------------
    const olexpSettings = $.extend(true, {
      control: {
        Measurement: {
          hintArea: 'Measure area',
          hintLength: 'Measure length',
        },
      },
    }, settings);

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
      area: 'olexp-control-measure-area',
      length: 'olexp-control-measure-length',
    };

    /**
     * Button element id
     * @field
     * @private
     * @type {string}
     */
    this.ids = {
      area: settings.prefix + '-control-measure-area-button',
      length: settings.prefix + '-control-measure-length-button',
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
    this.tool = new olexp.measure.Tool(explorer.map, {
      type: olexp.measure.Type.LINE,
      settings: settings,
    });
  };

  /**
   * Start area measurement
   * @memberOf Measurement.prototype
   * @private
   */
  Measurement.prototype.area = function() {
    const enable = !this.explorer.toolbar.get(this.ids.area).checked;
    this.measure(olexp.measure.Type.AREA, enable);
  };

  /**
   * Start length measurement
   * @memberOf Measurement.prototype
   * @private
   */
  Measurement.prototype.length = function() {
    const enable = !this.explorer.toolbar.get(this.ids.length).checked;
    this.measure(olexp.measure.Type.LINE, enable);
  };

  /**
   * Run measurement tool
   * @memberOf Measurement.prototype
   * @param {olexp.measure.Type} type Measurement type to start.
   * @param {boolean} enable True if measurement is started otherwise false
   * @private
   */
  Measurement.prototype.measure = function(type, enable) {
    this.tool.setEnable(false);
    if (enable) {
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
   * @return {array} Array of w2toolbar properties
   */
  olexp.control.measure = function(explorer, options) {
    if (options === undefined) {
      options = {};
    }
    if (options.area === undefined) {
      options.area = true;
    }
    if (options.length === undefined) {
      options.length = true;
    }
    if (options.settings === undefined) {
      options.settings = {};
    }

    const tool = new Measurement(explorer, options.settings);

    // Add controls for those selected
    const controls = [];
    if (options.area) {
      controls.push({
        hint: tool.settings.hintArea,
        id: tool.ids.area,
        img: tool.icons.area,
        onClick: function() {
          if (options.length) {
            explorer.toolbar.uncheck(tool.ids.length);
          }
          tool.area();
        },
        type: 'check',
      });
    }
    if (options.length) {
      controls.push({
        hint: tool.settings.hintLength,
        id: tool.ids.length,
        img: tool.icons.length,
        onClick: function() {
          if (options.area) {
            explorer.toolbar.uncheck(tool.ids.area);
          }
          tool.length();
        },
        type: 'check',
      });
    }

    return controls;
  };

  return olexp;
}(olexp || {}));

// ==================================================
// Toolbar Hide Control
// --------------------------------------------------
(function(olexp) {
  'use strict';

  /**
   * Control to hide toolbar
   * @param {olexp.Explorer} explorer Source explorer
   * @param {object} options Control options {hidden   : True if toolbar is
   *                                                     initially hidden,
   *                                          settings : olexp.ExplorerSettings}
   * @private
   */
  const ToolbarHide = function(explorer, options) {
    // ==================================================
    // Override Toolbar Hide option defaults
    // with user provided values.
    // --------------------------------------------------
    const olexpSettings = $.extend(true, {
      control: {
        ToolbarHide: {
          hint: 'Hide toolbar',
        },
      },
    }, options.settings);

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
    this.show = olexp.ol.toolbarShow(this.explorer, options);
  };

  /**
   * Toolbar visibility
   * @private
   */
  ToolbarHide.prototype.hide = function() {
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
   * @return {external:jQuery.fn.w2toolbar.properties} ToolbarHide toolbar
   *          control
   */
  olexp.control.toolbarHide = function(explorer, options) {
    const control = new ToolbarHide(explorer, options);

    return {
      hint: control.settings.hint,
      id: control.button,
      img: control.icon,
      onClick: function() {
        control.hide();
      },
      type: 'button',
    };
  };

  return olexp;
}(olexp || {}));

export default olexp.control;
