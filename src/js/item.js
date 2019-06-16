import olexpMeasure from './measure';
import olexpUtil from './util';

/* globals ol w2alert */

/**
 * @namespace olexp.item
 * @private
 */
const olexp = {
  item: {},
  measure: olexpMeasure,
  util: olexpUtil,
};


// ==================================================
// Explorer managed item
// --------------------------------------------------
((olexp) => {
  /**
   * Item icons
   * @enum {string}
   * @memberOf olexp.item
   * @private
   * @readonly
   */
  olexp.item.icons = {
    /**
     * Group icon css selector
     * @type string
     */
    group: 'olexp-item-group',
    /**
     * Heat Map icon css selector
     * @type string
     */
    heatmap: 'olexp-item-heatmap',
    /**
     * Image icon css selector
     * @type string
     */
    image: 'olexp-item-image',
    /**
     * Overlay icon css selector
     * @type string
     */
    overlay: 'olexp-item-overlay',
    /**
     * Tile Map icon css selector
     * @type string
     */
    tile: 'olexp-item-tile',
    /**
     * Vector icon css selector
     * @type string
     */
    vector: 'olexp-item-vector',
  };

  /**
   * Item managed
   * @param {string} id Item ID
   * @param {string} name Item name
   * @param {ol.layer.Layer|ol.Overlay} layer ol3 layer/overlay object
   * @private
   */
  const Item = function(id, name, layer) {
    /**
     * Item id
     * @field
     * @private
     * @type {string}
     */
    this.id = id;

    /**
     * ol3 layer/overlay object
     * @field
     * @private
     * @type {ol.layer.Layer|ol.Overlay}
     */
    this.layer = layer;

    /**
     * Indicates if item is currently being moved in manager
     * @field
     * @private
     * @type {string}
     */
    this.moving = false;

    /**
     * Item name
     * @field
     * @private
     * @type {string}
     */
    this.name = name;

    /**
     * Item type
     * @field
     * @private
     * @readonly
     * @type {olexp.item.Type}
     */
    this.type = Item.getType(this.layer);

    /**
     * Item icon
     * @field
     * @private
     * @readonly
     * @type {string}
     */
    this.icon = Item.getIcon(this.type);
  };

  /**
   * Get item details
   * @memberOf Item.prototype
   * @private
   * @return {object} Object of item properties
   */
  Item.prototype.getDetails = function() {
    const properties = {};

    // ==================================================
    // Generic properties
    // --------------------------------------------------
    properties.Name = this.name;

    const layerProperties = this.layer.getProperties();
    if (layerProperties.hasOwnProperty(olexp.measure.properties.area)) {
      properties.Area = layerProperties[olexp.measure.properties.area];
    } else {
      if (layerProperties.hasOwnProperty(olexp.measure.properties.length)) {
        properties.Length = layerProperties[olexp.measure.properties.length];
      }
    }

    // ==================================================
    // Group properties
    // --------------------------------------------------
    if (this.type === olexp.item.Type.GROUP) {
      const layers = this.layer.getLayers();
      properties['Layer Count'] = layers.getLength();
    }

    // ==================================================
    // Vector properties
    // --------------------------------------------------
    if (this.type === olexp.item.Type.VECTOR) {
      const source = this.layer.getSource();
      const features = source.getFeatures();
      properties['Feature Count'] = features.length;
    }

    // ==================================================
    // Convert properties to records
    // --------------------------------------------------
    const records = olexp.util.toRecords(properties);

    return records;
  };

  /**
   * Get item extent
   * @memberOf Item.prototype
   * @private
   * @return {ol.Extent|null} Item extent or null if undefined
   */
  Item.prototype.getExtent = function() {
    if (this.type === olexp.item.Type.OVERLAY) {
      return null;
    }
    if (this.type === olexp.item.Type.GROUP) {
      let extent = null;
      const layers = this.layer.getLayers();
      layers.forEach((layer) => {
        const layerExtent = Item.getLayerExtent(layer);
        if ((extent === null) && (layerExtent !== null)) {
          extent = layerExtent;
        } else if ((extent !== null) && (layerExtent !== null)) {
          extent = ol.extent.extend(extent, layerExtent);
        }
      });
      return extent;
    }

    return Item.getLayerExtent(this.layer);
  };

  /**
   * Get item icon based on type
   * @memberOf Item
   * @param {olexp.item.Type} type Item type
   * @private
   * @return {string} CSS selector of icon
   */
  Item.getIcon = (type) => {
    if (type === olexp.item.Type.GROUP) {
      return olexp.item.icons.group;
    }
    if (type === olexp.item.Type.HEATMAP) {
      return olexp.item.icons.heatmap;
    }
    if (type === olexp.item.Type.IMAGE) {
      return olexp.item.icons.image;
    }
    if (type === olexp.item.Type.OVERLAY) {
      return olexp.item.icons.overlay;
    }
    if (type === olexp.item.Type.TILE) {
      return olexp.item.icons.tile;
    }
    if (type === olexp.item.Type.VECTOR) {
      return olexp.item.icons.vector;
    }
    return 'icon-page';
  };

  /**
   * Get layer extent
   * @memberOf Item.prototype
   * @param {ol.layer.Layer} layer Source layer
   * @private
   * @return {ol.Extent|null} Layer extent or null if undefined
   */
  Item.getLayerExtent = (layer) => {
    // ==================================================
    // Check if layer has extent defined
    // --------------------------------------------------
    let extent = layer.getExtent();
    if (extent === undefined) {
      // ==================================================
      // Check if source has extent defined
      // --------------------------------------------------
      const source = layer.getSource();
      if (source !== null &&
          (source instanceof ol.source.Cluster ||
              source instanceof ol.source.VectorTile ||
              source instanceof ol.source.Vector)) {
        extent = source.getExtent();
      }
    }
    if (extent === undefined) {
      return null;
    }
    return extent;
  };

  /**
   * List of editable properties of layer/overlay
   * @memberOf Item.prototype
   * @private
   * @return {object} Item properties names
   */
  Item.prototype.getPropertyTypes = function() {
    if (this.layer instanceof ol.layer.Base) {
      return olexp.item.LayerProperties;
    }
    if (this.layer instanceof ol.Overlay) {
      return olexp.item.OverlayProperties;
    }
    return {};
  };

  /**
   * Update item editable properties
   * @memberOf Item.prototype
   * @private
   * @return {object} Item properties
   */
  Item.prototype.getProperties = function() {
    const properties = {name: this.name};
    const types = this.getPropertyTypes();
    const self = this;
    Object.keys(types).forEach((key) => {
      properties[key] = self.layer.get(key);
    });
    return properties;
  };

  /**
   * Get item type for given layer
   * @memberOf Item
   * @param {ol.layer.Layer|ol.Overlay} layer Source layer
   * @private
   * @return {olexp.item.Type} Type of item
   */
  Item.getType = (layer) => {
    if (layer instanceof ol.layer.Group) {
      return olexp.item.Type.GROUP;
    }
    if (layer instanceof ol.layer.Heatmap) {
      return olexp.item.Type.HEATMAP;
    }
    if (layer instanceof ol.layer.Image) {
      return olexp.item.Type.IMAGE;
    }
    if (layer instanceof ol.layer.Tile) {
      return olexp.item.Type.TILE;
    }
    if (layer instanceof ol.layer.Vector) {
      return olexp.item.Type.VECTOR;
    }
    if (layer instanceof ol.Overlay) {
      return olexp.item.Type.OVERLAY;
    }
    return null;
  };

  /**
   * Get item map visibility
   * @memberOf Item
   * @private
   * @return {Boolean} True if visible otherwise false
   */
  Item.prototype.getVisible = function() {
    // Check overlay DOM visibility
    if (this.type === olexp.item.Type.OVERLAY) {
      const properties = this.layer.getProperties();
      if (properties.hasOwnProperty('element')) {
        const dom = $(properties.element);
        return dom.css('display') !== 'none' &&
          dom.css('visibility') !== 'hidden';
      }
      return false;
    }

    // Check layer visibilty
    return this.layer.getVisible();
  };

  /**
   * Update item editable properties
   * @memberOf Item.prototype
   * @param {Object} properties Item properties to update
   * @private
   */
  Item.prototype.setProperties = function(properties) {
    if (properties.hasOwnProperty('name')) {
      this.name = properties.name;
    }
    const types = this.getPropertyTypes();
    const self = this;
    Object.keys(types).forEach((key) => {
      if (properties.hasOwnProperty(key)) {
        self.layer.set(key, properties[key]);
      }
    });
  };

  /**
   * Get/set item property
   * @memberOf Item.prototype
   * @param {string} name Property name
   * @param {object} value Property value
   * @private
   * @return {string} Item property.
   */
  Item.prototype.property = function(name, value) {
    if (this[name] === undefined) {
      return;
    }
    if (value !== undefined) {
      this[name] = value;
    }
    return this[name];
  };

  /**
   * Set item map visibility
   * @memberOf Item
   * @param{Boolean} enable True if enable visibility otherwise false
   * @private
   */
  Item.prototype.setVisible = function(enable) {
    // Overlays don't have visibility so we hide DOM element
    if (this.type === olexp.item.Type.OVERLAY) {
      const properties = this.layer.getProperties();
      if (properties.hasOwnProperty('element')) {
        const dom = $(properties.element);
        if (enable) {
          if (dom.css('visibility') === 'hidden') {
            dom.css('visibility', 'visible');
          }
          if (dom.css('display') === 'none') {
            dom.show();
          }
        } else {
          if (dom.css('visibility') !== 'hidden') {
            dom.css('visibility', 'hidden');
          }
          if (dom.css('display') !== 'none') {
            dom.hide();
          }
        }
      }
      return;
    }

    // Check layer visibilty
    this.layer.setVisible(enable);
  };

  /**
   * Get item extent
   * @memberOf Item.prototype
   * @param {ol.Map} map ol3 map to zoom
   * @private
   */
  Item.prototype.zoomTo = function(map) {
    const view = map.getView();

    if (this.type === olexp.item.Type.OVERLAY) {
      // ==================================================
      // Check if overlay has position defined
      // --------------------------------------------------
      const position = this.layer.getPosition();
      if (position !== undefined) {
        view.setCenter(position);
        return;
      }

      w2alert('Overlay has no position defined to which to zoom.', 'Warning');
    } else {
      // ==================================================
      // Check if layer has extent defined
      // --------------------------------------------------
      const extent = this.getExtent();
      if (extent !== null) {
        view.fit(extent);
        return;
      }

      w2alert('Layer has no extent defined to which to zoom.', 'Warning');
    }
  };

  /**
   * Item managed
   * @memberOf olexp.item
   * @param {string} id Item ID
   * @param {string} name Item name
   * @param {external:ol.layer.Layer|external:ol.Overlay} layer ol3 layer or
   *        overlay object
   * @private
   * @return {Item} Item to be managed.
   */
  olexp.item.Item = function(id, name, layer) {
    const item = new Item(id, name, layer);
    return {
      getDetails: item.getDetails.bind(item),
      getProperties: item.getProperties.bind(item),
      getPropertyTypes: item.getPropertyTypes.bind(item),
      getVisible: item.getVisible.bind(item),
      icon: item.icon,
      id: item.id,
      layer: item.layer,
      moving(moving) {
        return item.property('moving', moving);
      },
      name(name) {
        return item.property('name', name);
      },
      setProperties: item.setProperties.bind(item),
      setVisible: item.setVisible.bind(item),
      type: item.type,
      zoomTo: item.zoomTo.bind(item),
    };
  };

  /**
   * Enumeration of Overlay properties
   * @enum {string}
   * @memberOf olexp.item
   * @private
   * @readonly
   */
  olexp.item.OverlayProperties = {
  };

  /**
   * Enumeration of Layer properties
   * @enum {string}
   * @memberOf olexp.item
   * @private
   * @readonly
   */
  olexp.item.LayerProperties = {
    /**
     * Opacity property
     * @type object
     */
    opacity: {
      /**
       * Opacity title
       * @type string
       */
      title: 'Opacity',
    },
  };

  /**
   * Enumeration of types of allowable managed items
   * @enum {string}
   * @memberOf olexp.item
   * @private
   * @readonly
   */
  olexp.item.Type = {
    /**
     * Group managed item
     * @type number
     */
    GROUP: 0,
    /**
     * Heat Map managed item
     * @type number
     */
    HEATMAP: 1,
    /**
     * Image managed item
     * @type number
     */
    IMAGE: 2,
    /**
     * Overlay managed item
     * @type number
     */
    OVERLAY: 3,
    /**
     * Tile managed item
     * @type number
     */
    TILE: 4,
    /**
     * Vector managed item
     * @type number
     */
    VECTOR: 5,
  };

  return olexp;
})(olexp || {});

export default olexp.item;
