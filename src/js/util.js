/* globals $, ol, w2popup, w2ui */

/**
 * @namespace olexp.util
 * @private
 */
const olexp = {
  util: {},
};

// ==================================================
// Utility tools
// --------------------------------------------------
((olexp) => {
  /**
   * Utility tools
   * @param {olexp.ExplorerSettings} settings olexp settings
   * @private
   */
  const Util = function(settings) {
    // ==================================================
    // Override Util option defaults
    // with user provided values.
    // --------------------------------------------------
    const olexpSettings = $.extend(true, {util: {Util: {
      cluster(size) {
        const style = [
          new ol.style.Style({
            image: new ol.style.Circle({
              radius: 10,
              stroke: new ol.style.Stroke({
                color: '#ffffff',
              }),
              fill: new ol.style.Fill({
                color: '#3399CC',
              }),
            }),
            text: new ol.style.Text({
              text: size.toString(),
              fill: new ol.style.Fill({
                color: '#ffffff',
              }),
            }),
          })];
        return style;
      },
      Point: [
        new ol.style.Style({
          image: new ol.style.Circle({
            fill: new ol.style.Fill({
              color: 'rgba(255,255,0,0.5)',
            }),
            radius: 5,
            stroke: new ol.style.Stroke({color: '#ff0',
              width: 1}),
          }),
        }),
      ],
      LineString: [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: '#f00',
            width: 3,
          }),
        }),
      ],
      Polygon: [
        new ol.style.Style({
          fill: new ol.style.Fill({
            color: 'rgba(0,255,255,0.5)',
          }),
          stroke: new ol.style.Stroke({
            color: '#0ff',
            width: 1,
          }),
        }),
      ],
      MultiPoint: [
        new ol.style.Style({
          image: new ol.style.Circle({
            fill: new ol.style.Fill({
              color: 'rgba(255,0,255,0.5)',
            }),
            radius: 5,
            stroke: new ol.style.Stroke({
              color: '#f0f',
              width: 1,
            }),
          }),
        }),
      ],
      MultiLineString: [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: '#0f0',
            width: 3,
          }),
        }),
      ],
      MultiPolygon: [
        new ol.style.Style({
          fill: new ol.style.Fill({
            color: 'rgba(0,0,255,0.5)',
          }),
          stroke: new ol.style.Stroke({
            color: '#00f',
            width: 1,
          }),
        }),
      ],
    }}}, settings);

    /**
     * Util settings
     * @field
     * @private
     * @param {Object} settings
     */
    this.settings = olexpSettings.util.Util;

    /**
     * Default vector styles
     * @field
     * @private
     * @param {Object} defaultStyle
     */
    this.defaultStyle = {
      'Point': this.settings.Point,
      'LineString': this.settings.LineString,
      'Polygon': this.settings.Polygon,
      'MultiPoint': this.settings.MultiPoint,
      'MultiLineString': this.settings.MultiLineString,
      'MultiPolygon': this.settings.MultiPolygon,
    };

    /**
     * Cache for cluster styles
     * @field
     * @private
     * @param {Object} clusterStyleCache
     */
    this.clusterStyleCache = {};
  };

  /**
   * Add vector layer to map
   * @memberOf Util.prototype
   * @param {external:ol.Map} map Source ol3 map
   * @param {string} name Name of new vector layer
   * @param {array<external:ol.Feature>} features Array of features
   * @param {boolean} cluster True if features should be clustered
   * @private
   */
  Util.prototype.addLayerVector = function(map, name, features, cluster) {
    if (cluster === undefined) {
      cluster = true;
    }

    const me = this;

    // Detect if clustering is on for non-points and disable clustering
    features.forEach((feature) => {
      if (cluster === false) {
        return;
      }
      const geometry = feature.getGeometry();
      if (geometry === undefined || geometry.getType() !== 'Point') {
        cluster = false;
      }
    });

    // Build layer source
    let source = new ol.source.Vector({
      features,
    });

    if (cluster) {
      source = new ol.source.Cluster({
        source,
      });
    }

    // Build layer style
    let style = (feature, resolution) => {
      const styleFunction = feature.getStyleFunction();
      if (styleFunction) {
        return styleFunction.call(feature, resolution);
      }
      return me.defaultStyle[feature.getGeometry().getType()];
    };

    if (cluster) {
      style = (feature) => me.getClusterStyle(feature);
    }

    // Add layer to map
    const layer = new ol.layer.Vector({
      source,
      style,
    });
    layer.set('name', name);
    map.getLayers().push(layer);
  };

  /**
   * Get feature style
   * @memberOf Util.prototype
   * @param {external:ol.Feature} feature Feature to style
   * @private
   * @return {ol.Style} Cluster style
   */
  Util.prototype.getClusterStyle = function(feature) {
    const size = feature.get('features').length;
    let style = this.clusterStyleCache[size];
    if (!style) {
      style = this.settings.cluster(size);
      this.clusterStyleCache[size] = style;
    }

    return style;
  };

  /**
   * Create map controls
   * @memberOf Util.prototype
   * @private
   * @return {object} Object of ol.control objects by key name
   */
  Util.prototype.getControls = function() {
    const controls = {
      fullscreen: new ol.control.FullScreen(),
      mouseposition: new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(6),
        projection: 'EPSG:4326',
      }),
      overviewmap: new ol.control.OverviewMap(),
      rotate: new ol.control.Rotate(),
      scaleline: new ol.control.ScaleLine(),
      zoom: new ol.control.Zoom(),
      zoomslider: new ol.control.ZoomSlider(),
      zoomtoextent: new ol.control.ZoomToExtent(),
    };

    return controls;
  };

  /**
   * Create drag and drop interaction
   * @memberOf Util.prototype
   * @param {ol.Map} map Source map
   * @private
   * @return {ol.interaction.DragAndDrop} ol3 drag and drop interaction
   */
  Util.prototype.getDragAndDrop = function(map) {
    const me = this;

    const interaction = new ol.interaction.DragAndDrop({
      formatConstructors: $.map(olexp.util.FileTypes, (o) => o.Format),
    });

    interaction.on('addfeatures', (event) => {
      // Get filename and remove any extensions
      const filename = olexp.util.setExtension(event.file.name, '');

      me.addLayerVector(map, filename, event.features);
    });

    return interaction;
  };

  /**
   * Create a new graticule
   * @memberOf Util.prototype
   * @param {external:ol.Map} map Source map
   * @param {object} options ol.Graticule constructor options
   * @private
   * @return {external:ol.Graticule} New graticule based on settings
   */
  Util.prototype.getGraticule = function(map, options) {
    const opts = $.extend($.extend({}, options), {color: '#' + options.color});
    const graticule = new ol.Graticule({
      map,
      strokeStyle: new ol.style.Stroke(opts),
    });
    graticule.olexpRecord = $.extend({
      enable: (map === null ? false : true),
    }, options);

    return graticule;
  };

  /**
   * Create map interactions
   * @memberOf Util.prototype
   * @param {external:ol.Map} map Source map
   * @private
   * @return {object} Object of ol.interaction objects by key name
   */
  Util.prototype.getInteractions = function(map) {
    const interactions = {
      draganddrop: this.getDragAndDrop(map),
    };

    return interactions;
  };

  /**
   * Get object of ol3 tile types
   * @memberOf Util.prototype
   * @private
   * @return {object} Object of ol.source objects
   */
  Util.prototype.getTileTypes = function() {
    // ==================================================
    // Define tile types object
    // --------------------------------------------------
    const tileTypes = {};

    // ==================================================
    // Define OpenStreetMap tiles
    // --------------------------------------------------

    tileTypes.osm = {
      'class': ol.source.OSM,
      'name': 'OpenStreetMap',
      'settings': {},
    };

    // ==================================================
    // Define Stamen tiles
    // --------------------------------------------------

    tileTypes.stamenTerrain = {
      'class': ol.source.Stamen,
      'name': 'Stamen (Terrain)',
      'settings': {
        layer: 'terrain',
      },
    };

    tileTypes.stamenToner = {
      'class': ol.source.Stamen,
      'name': 'Stamen (Toner)',
      'settings': {
        layer: 'toner',
      },
    };

    tileTypes.stamenWater = {
      'class': ol.source.Stamen,
      'name': 'Stamen (Water Color)',
      'settings': {
        layer: 'watercolor',
      },
    };

    return tileTypes;
  };

  /**
   * Supported ol3 file types
   * @memberOf olexp.util
   * @private
   * @readonly
   * @returns {object} ol3 file types
   */
  olexp.util.FileTypes = {
    gpx: {
      extensions: ['gpx'],
      Format: ol.format.GPX,
      name: 'GPX',
    },
    igc: {
      extensions: ['igc'],
      Format: ol.format.IGC,
      name: 'IGC',
    },
    json: {
      extensions: ['json', 'geojson'],
      Format: ol.format.GeoJSON,
      name: 'GeoJSON',
    },
    kml: {
      extensions: ['kml'],
      Format: ol.format.KML,
      name: 'KML',
    },
  };

  /**
   * Find feature reader based on filename extension
   * @memberOf olexp.util
   * @param {string} filename Filename to be read
   * @private
   * @return {external:ol.format.Feature|null} File reader
   */
  olexp.util.getReader = (filename) => {
    const extension = filename.substring(
        filename.lastIndexOf('.') + 1).toLowerCase();
    let formatFound = null;
    Object.keys(olexp.util.FileTypes).forEach((key) => {
      if (formatFound !== null) {
        return;
      }
      const type = olexp.util.FileTypes[key];
      type.extensions.forEach((ext) => {
        if (formatFound !== null) {
          return;
        }
        if (extension === ext) {
          formatFound = new type.Format();
        }
      });
    });
    return formatFound;
  };

  /**
   * Returns the index of the layer within the collection.
   * @function
   * @memberOf olexp.util
   * @param {external:ol.Collection} layers Map layers
   * @param {external:ol.layer.Layer|external:ol.Overlay} layer Layer to find
   * @private
   * @return {number} Index of layer
   */
  olexp.util.indexOf = (layers, layer) => {
    let i = 0;
    const length = layers.getLength();
    for (i = 0; i < length; i += 1) {
      if (layer === layers.item(i)) {
        return i;
      }
    }
    return -1;
  };

  /**
   * Create and process popup form
   * @function
   * @memberOf olexp.util
   * @param {string} id DOM id
   * @param {function} onChanges Function that processes w2ui form changes
   * @param {external:jQuery.fn.w2form.properties} formOptions w2form
   *        properties
   * @param {external:jQuery.fn.w2popup.properties} popupOptions w2popup
   *        properties
   * @private
   */
  olexp.util.popup = (id, onChanges, formOptions, popupOptions) => {
    const name = formOptions.name;
    const record = formOptions.record;

    // ==================================================
    // Create form
    // --------------------------------------------------
    if (w2ui.hasOwnProperty(name)) {
      w2ui[name].destroy();
    }
    $().w2form($.extend(formOptions, {
      actions: {
        save() {
          // Check for errors
          const errors = this.validate();
          if (errors.length === 0) {
            // Close popup and update with changes
            w2popup.close();
            const form = w2ui[name];
            const changes = form.getChanges();
            onChanges(changes);
          }
        },
        reset() {
          // Reset properties to original item values
          const form = w2ui[name];
          Object.keys(record).forEach((rname) => {
            form.record[rname] = record[rname];
          });
          form.refresh();
        },
      },
    }));

    // ==================================================
    // Display form in popup
    // --------------------------------------------------
    w2popup.open($.extend(popupOptions, {
      body: ('<div id="' + id + '"></div>'),
      onOpen(event) {
        event.onComplete = () => {
          $('#w2ui-popup #' + id).w2render(name);
        };
      },
      onToggle(event) {
        const form = w2ui[name];
        $(form.box).hide();
        event.onComplete = () => {
          $(form.box).show();
          form.resize();
        };
      },
    }));
  };

  /**
   * Set new extension of filename
   * @memberOf olexp.util
   * @param {string} filename Filename whose extension will be replaced
   * @param {string} extension New extension (including dot)
   * @private
   * @return {string} New filename with extension replaced
   */
  olexp.util.setExtension = (filename, extension) => {
    const parts = filename.split('.');
    if (parts.length === 1) {
      return parts[0];
    }
    parts.pop();
    return parts.join('.') + extension;
  };

  /**
   * Get properties from feature accounting for clustered features
   * @memberOf olexp.util
   * @param {external:ol.Feature} feature Source feature
   * @private
   * @return {object} Feature properties
   */
  olexp.util.toProperties = (feature) => {
    let properties = feature.getProperties();

    // ==================================================
    // Check if this is a cluster feature
    // --------------------------------------------------
    if (properties.hasOwnProperty('features')) {
      const features = properties.features;
      if (features instanceof Array) {
        if (features.length === 1) {
          // ==================================================
          // If just one feature get its properties
          // --------------------------------------------------
          if (features[0] instanceof ol.Feature) {
            properties = features[0].getProperties();
          }
        } else {
          // ==================================================
          // If more than one feature get feature count
          // --------------------------------------------------
          let count = 0;
          features.forEach((feature) => {
            if (feature instanceof ol.Feature) {
              count += 1;
              properties['Cluster Size'] = count;
            }
          });
        }
      }
    }

    return properties;
  };

  /**
   * Convert properties object to record for w2ui grid
   * @memberOf olexp.util
   * @param {object} properties Object properties to convert to grid record
   * @private
   * @return {array} Properties in record format
   */
  olexp.util.toRecords = (properties) => {
    const records = [];
    let recid = 0;

    // ==================================================
    // Push properties into record
    // --------------------------------------------------
    Object.keys(properties).forEach((name) => {
      const value = properties[name];
      recid += 1;
      records.push({recid, property: name, value});
    });

    return records;
  };

  /**
   * Utility functions
   * @memberOf olexp.util
   * @param {olexp.ExplorerSettings} settings olexp settings
   * @private
   * @return {object} Utility API.
   */
  olexp.util.Util = function(settings) {
    const util = new Util(settings);
    return {
      addLayerVector: util.addLayerVector.bind(util),
      getControls: util.getControls.bind(util),
      getGraticule: util.getGraticule.bind(util),
      getInteractions: util.getInteractions.bind(util),
      getTileTypes: util.getTileTypes.bind(util),
    };
  };

  return olexp;
})(olexp || {});

export default olexp.util;
