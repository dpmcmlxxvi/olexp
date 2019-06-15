import olexpEvent from './event';
import olexpItem from './item';
import olexpMeasure from './measure';
import olexpUtil from './util';

/**
 * @namespace olexp.manager
 * @private
 */
const olexp = {
  event: olexpEvent,
  item: olexpItem,
  manager: {},
  measure: olexpMeasure,
  util: olexpUtil,
};

// ==================================================
// Manager
// --------------------------------------------------
((olexp) => {
  /**
   * Item manager that synchronizes adding and removing items from the map
   * sidebar and the corresponding layers on the ol3 map
   * @class
   * @memberOf olexp.manager
   * @param {external:ol.Map} map Managed map
   * @param {external:jQuery.fn.w2sidebar} outline Managed outline sidebar
   * @param {external:jQuery.fn.w2grid} details Details grid
   * @param {string} layersId w2ui name of layers node
   * @param {string} overlaysId w2ui name of overlays node
   * @private
   */
  const ManagerAPI = function(map, outline, details, layersId, overlaysId) {
    /**
     * Event listeners
     * @ignore
     * @type {olexp.event.Event}
     */
    this.event = new olexp.event.Event({'select:item': []});

    /**
     * Layer Manager
     * @ignore
     * @type {olexp.manager.NodeManager}
     */
    this.managerLayers = new olexp.manager.NodeManager(layersId,
        map.getLayers(),
        outline,
        details);

    /**
     * Layers node id prefix
     * @ignore
     * @type {string}
     */
    this.layersId = layersId;

    /**
     * Overlay Manager
     * @ignore
     * @type {olexp.manager.NodeManager}
     */
    this.managerOverlays = new olexp.manager.NodeManager(overlaysId,
        map.getOverlays(), outline, details);

    /**
     * Managed map
     * @ignore
     * @type {ol.Map}
     */
    this.map = map;
    this.map.on('change:layergroup', this.onLayerGroupChanged, this);

    /**
     * Managed outline sidebar
     * @ignore
     * @type {external:jQuery.fn.w2sidebar}
     */
    this.outline = outline;

    /**
     * Overlays node id prefix
     * @ignore
     * @type {string}
     */
    this.overlaysId = overlaysId;
  };

  /**
   * Check if id is a Layer node
   * @ignore
   * @memberOf olexp.manager.ManagerAPI.prototype
   * @param {string} id Item ID
   * @private
   * @return {Boolean} True if id a Layer node otherwise false
   */
  ManagerAPI.prototype.isIdLayerNode = function(id) {
    if (typeof id !== 'string') {
      return false;
    }
    return id.indexOf(this.layersId) === 0;
  };

  /**
   * Check if id is a Overlay node
   * @ignore
   * @memberOf olexp.manager.ManagerAPI.prototype
   * @param {string} id Item ID
   * @private
   * @return {Boolean} True if id is a Overlay node otherwise false
   */
  ManagerAPI.prototype.isIdOverlayNode = function(id) {
    if (typeof id !== 'string') {
      return false;
    }
    return id.indexOf(this.overlaysId) === 0;
  };

  /**
   * Check if item is selected
   * @function isSelected
   * @memberOf olexp.manager.ManagerAPI.prototype
   * @param {string} id Item ID
   * @public
   * @return {Boolean} True if item is selected otherwise false
   */
  ManagerAPI.prototype.isSelected = function(id) {
    return id === this.outline.selected;
  };

  /**
   * Get item based on id
   * @function getById
   * @memberOf olexp.manager.ManagerAPI.prototype
   * @param {string} id Item ID
   * @public
   * @return {null|olexp.item.Item} Managed item or null if not found
   */
  ManagerAPI.prototype.getById = function(id) {
    // Check if this is a layer node
    if (this.isIdLayerNode(id)) {
      return this.managerLayers.getById(id);
    }
    // Check if this is a overlay node
    if (this.isIdOverlayNode(id)) {
      return this.managerOverlays.getById(id);
    }

    return null;
  };

  /**
   * Get layer details
   * @function getDetails
   * @memberOf olexp.manager.ManagerAPI.prototype
   * @param {string} id Layer ID
   * @public
   * @return {array} Item details
   */
  ManagerAPI.prototype.getDetails = function(id) {
    // Check if this is a layer node
    if (this.isIdLayerNode(id)) {
      const itemLayer = this.managerLayers.getById(id);
      if (itemLayer !== null) {
        return itemLayer.getDetails();
      }
    } else if (this.isIdOverlayNode(id)) {
      // Check if this is a overlay node
      const itemOverlay = this.managerOverlays.getById(id);
      if (itemOverlay !== null) {
        return itemOverlay.getDetails();
      }
    }

    return [];
  };

  /**
   * Get node for item
   * @function getNode
   * @memberOf olexp.manager.ManagerAPI.prototype
   * @param {string} id Item ID
   * @public
   * @return {external:jQuery.fn.w2sidebar.nodes} w2ui sidebar node
   */
  ManagerAPI.prototype.getNode = function(id) {
    return this.outline.get(id);
  };

  /**
   * Move item down in map list
   * @function moveDown
   * @memberOf olexp.manager.ManagerAPI.prototype
   * @param {string} id Item ID
   * @public
   * @return {boolean} True if moved otherwise false
   */
  ManagerAPI.prototype.moveDown = function(id) {
    // If no id provided use selected
    if (id === undefined) {
      id = this.outline.selected;
    }

    // Check if this is a layer node
    if (this.isIdLayerNode(id)) {
      return this.managerLayers.moveDown(id);
    }

    // Check if this is a overlay node
    if (this.isIdOverlayNode(id)) {
      return this.managerOverlays.moveDown(id);
    }

    return false;
  };

  /**
   * Move item up in map list
   * @function moveUp
   * @memberOf olexp.manager.ManagerAPI.prototype
   * @param {string} id Item ID
   * @public
   * @return {boolean} True if moved otherwise false
   */
  ManagerAPI.prototype.moveUp = function(id) {
    // If no id provided use selected
    if (id === undefined) {
      id = this.outline.selected;
    }

    // Check if this is a layer node
    if (this.isIdLayerNode(id)) {
      return this.managerLayers.moveUp(id);
    }

    // Check if this is a overlay node
    if (this.isIdOverlayNode(id)) {
      return this.managerOverlays.moveUp(id);
    }

    return false;
  };

  /**
   * Remove listener
   * @function off
   * @memberOf olexp.manager.ManagerAPI.prototype
   * @param {string} type The event type.
   * @param {function} listener The listener function.
   * @param {object} optThis The object to use as this in listener.
   * @public
   */
  ManagerAPI.prototype.off = function(type, listener, optThis) {
    this.event.off(type, listener, optThis);
    this.managerLayers.off(type, listener, optThis);
    this.managerOverlays.off(type, listener, optThis);
  };

  /**
   * Add listener
   * @function on
   * @memberOf olexp.manager.ManagerAPI.prototype
   * @param {string} type The event type.
   * @param {function} listener The listener function.
   * @param {object} optThis The object to use as this in listener.
   * @public
   */
  ManagerAPI.prototype.on = function(type, listener, optThis) {
    this.event.on(type, listener, optThis);
    this.managerLayers.on(type, listener, optThis);
    this.managerOverlays.on(type, listener, optThis);
  };

  /**
   * Callback when node is selected either by click or double click
   * @function onItemSelected
   * @memberOf olexp.manager.ManagerAPI.prototype
   * @param {string} id Layer ID
   * @public
   */
  ManagerAPI.prototype.onItemSelected = function(id) {
    this.event.trigger('select:item', id);
  };

  /**
   * Callback when map layer group is changed
   * @function onLayerGroupChanged
   * @memberOf olexp.manager.ManagerAPI.prototype
   * @param {external:ol.ObjectEvent} event The change event.
   * @private
   */
  ManagerAPI.prototype.onLayerGroupChanged = function(event) {
    this.managerLayers.setLayers(event.target.getLayers());
  };

  /**
   * Remove item from map
   * @function removeFromMap
   * @memberOf olexp.manager.ManagerAPI.prototype
   * @param {olexp.item.Item} item Item to remove from map
   * @public
   * @return {null|external:ol.layer.Layer|external:ol.Overlay} Layer removed
   *          from map or null if not found
   */
  ManagerAPI.prototype.removeFromMap = function(item) {
    // If no id provided use selected
    if (!(item.hasOwnProperty('id'))) {
      return null;
    }

    // Check if this is a layer node
    if (this.isIdLayerNode(item.id)) {
      return this.managerLayers.removeFromMap(item);
    }

    // Check if this is a overlay node
    if (this.isIdOverlayNode(item.id)) {
      return this.managerOverlays.removeFromMap(item);
    }

    return null;
  };

  /**
   * Toggle node enable and corresponding layer visibility
   * @function toggleNode
   * @memberOf olexp.manager.ManagerAPI.prototype
   * @param {string} id Item ID of node to toggle
   * @public
   */
  ManagerAPI.prototype.toggleNode = function(id) {
    if (typeof id !== 'string') {
      return;
    }

    // ==================================================
    // Toggle sidebar node enabled state
    // --------------------------------------------------
    const node = this.outline.get(id);
    const enable = node.disabled;
    if (enable) {
      this.outline.enable(id);
    } else {
      this.outline.disable(id);
    }

    // ==================================================
    // Toggle item visibility on map
    // --------------------------------------------------
    const item = this.getById(id);
    if (item !== null) {
      item.setVisible(enable);
    }
  };

  /**
   * Update item editable properties
   * @function updateItem
   * @memberOf olexp.manager.ManagerAPI.prototype
   * @param {string} id ID of item to edit
   * @param {object} properties Item properties to update
   * @public
   */
  ManagerAPI.prototype.updateItem = function(id, properties) {
    const item = this.getById(id);
    if (item !== null) {
      item.setProperties(properties);

      // Update node
      const node = this.outline.get(id);
      node.text = item.name();

      this.outline.refresh();
    }
  };

  /**
   * Zoom to given item on map
   * @function zoomTo
   * @memberOf olexp.manager.ManagerAPI.prototype
   * @param {string} id ID of item on which to zoom
   * @public
   */
  ManagerAPI.prototype.zoomTo = function(id) {
    const item = this.getById(id);
    item.zoomTo(this.map);
  };

  /**
   * Item manager that synchronizes adding and removing items from the map
   * sidebar and the corresponding layers on the ol3 map
   * @function
   * @memberOf olexp.manager
   * @param {external:ol.Map} map Managed map
   * @param {external:jQuery.fn.w2sidebar} outline Managed outline sidebar
   * @param {external:jQuery.fn.w2grid} details Details grid
   * @param {string} layers w2ui name of layers node
   * @param {string} overlays w2ui name of overlays node
   * @private
   * @return {olexp.manager.ManagerAPI}
   */
  olexp.manager.Manager = function(map, outline, details, layers, overlays) {
    const manager = new ManagerAPI(map, outline, details, layers, overlays);
    return {
      getById: manager.getById.bind(manager),
      getDetails: manager.getDetails.bind(manager),
      getNode: manager.getNode.bind(manager),
      isSelected: manager.isSelected.bind(manager),
      moveDown: manager.moveDown.bind(manager),
      moveUp: manager.moveUp.bind(manager),
      off: manager.off.bind(manager),
      on: manager.on.bind(manager),
      onItemSelected: manager.onItemSelected.bind(manager),
      removeFromMap: manager.removeFromMap.bind(manager),
      toggleNode: manager.toggleNode.bind(manager),
      updateItem: manager.updateItem.bind(manager),
      zoomTo: manager.zoomTo.bind(manager),
    };
  };

  return olexp;
})(olexp || {});

// ==================================================
// Node Manager
// --------------------------------------------------
((olexp) => {
  /**
   * Node manager that synchronizes adding and removing items
   * @param {string} id Node id
   * @param {external:ol.Collection} layers Managed map layers
   * @param {external:jQuery.fn.w2sidebar} outline Managed outline sidebar
   * @param {external:jQuery.fn.w2grid} details Details grid
   * @private
   */
  const NodeManager = function(id, layers, outline, details) {
    /**
     * Total count of items added
     * @type {number}
     */
    this.count = 0;

    /**
     * Details grid
     * @type {external:jQuery.fn.w2grid}
     */
    this.details = details;

    /**
     * Event listeners
     * @type {olexp.event.Event}
     */
    this.event = new olexp.event.Event({'remove:item': []});

    /**
     * Node id
     * @type {string}
     */
    this.id = id;

    /**
     * List of managed items
     * @type {number}
     */
    this.items = [];

    /**
     * Managed map layers
     * @type {ol.Collection}
     */
    this.layers = layers;
    this.layers.on('change:length', this.onLayerChanged, this);

    /**
     * Node managers
     * @type {object}
     * @example {item.id: NodeManager}
     */
    this.managers = {};

    /**
     * Managed outline sidebar
     * @type {external:jQuery.fn.w2sidebar}
     */
    this.outline = outline;
  };

  /**
   * Add layer to node manager
   * @memberOf NodeManager.prototype
   * @param {ol.layer.Layer|ol.Overlay} layer ol3 layer/overlay to add
   * @private
   * @return {olexp.item.Item} Managed item for added layer
   */
  NodeManager.prototype.addLayer = function(layer) {
    // ==================================================
    // Create managed item
    // --------------------------------------------------

    // Create item id, name, and properties
    this.count += 1;
    const id = this.id + '-' + this.count;
    let name = 'Item ' + this.count;
    const properties = layer.getProperties();
    if (properties.hasOwnProperty('name')) {
      name = properties.name;
    }

    // Store managed item
    const item = new olexp.item.Item(id, name, layer);
    this.items.push(item);

    // ==================================================
    // Create w2ui node for item
    // --------------------------------------------------
    const node = {
      id: item.id,
      disabled: item.getVisible() === false,
      img: item.icon,
      text: item.name(),
    };

    // ==================================================
    // Add item to outline
    // --------------------------------------------------

    // Always prepend new node to top
    const nodes = this.outline.get(this.id).nodes;
    if (nodes.length === 0) {
      this.outline.add(this.id, [node]);
    } else {
      this.outline.insert(this.id, nodes[0].id, [node]);
    }

    // ==================================================
    // Check layer is group and create a sub-manager and add its
    // layers
    // --------------------------------------------------
    if (item.type === olexp.item.Type.GROUP) {
      const layers = layer.getLayers();
      const manager = new NodeManager(item.id, layers, this.outline,
          this.details);

      layers.forEach((childLayer) => {
        manager.addLayer(childLayer);
      }, this);
      this.managers[item.id] = manager;
      this.outline.expand(item.id);
    }

    return item;
  };

  /**
   * Get item based on id
   * @memberOf NodeManager.prototype
   * @param {string} id Item ID
   * @param {boolean} recursive True for recursive search otherwise false
   * @private
   * @return {null|olexp.item.Item} Managed item or null if not found
   */
  NodeManager.prototype.getById = function(id, recursive) {
    if (recursive === undefined) {
      recursive = true;
    }

    const me = this;
    let itemFound = null;
    this.items.forEach((item) => {
      if (itemFound !== null) {
        return;
      }
      if (item.id === id) {
        itemFound = item;
        return;
      }
      if (item.type === olexp.item.Type.GROUP && recursive) {
        const nodeItem = me.managers[item.id].getById(id);
        if ((nodeItem !== null) && (nodeItem.id === id)) {
          itemFound = nodeItem;
          return;
        }
      }
    });
    return itemFound;
  };

  /**
   * Get item based on layer reference
   * @memberOf NodeManager.prototype
   * @param {ol.layer.Layer|ol.Overlay} layer ol3 layer/overlay
   * @param {boolean} recursive True for recursive search otherwise false
   * @private
   * @return {null|olexp.item.Item} Managed item or null if not found
   */
  NodeManager.prototype.getByLayer = function(layer, recursive) {
    if (recursive === undefined) {
      recursive = true;
    }

    const me = this;
    let itemFound = null;
    this.items.forEach((item) => {
      if (itemFound !== null) {
        return;
      }
      if (item.layer === layer) {
        itemFound = item;
        return;
      }
      if (item.type === olexp.item.Type.GROUP && recursive) {
        const nodeItem = me.managers[item.id].getByLayer(layer);
        if ((nodeItem !== null) && (nodeItem.layer === layer)) {
          itemFound = nodeItem;
          return;
        }
      }
    });
    return itemFound;
  };

  /**
   * Get size of manager list
   * @memberOf NodeManager.prototype
   * @private
   * @return {number} Size
   */
  NodeManager.prototype.getSize = function() {
    return this.items.length;
  };

  /**
   * Check if item is selected
   * @memberOf NodeManager.prototype
   * @param {string} id Item ID
   * @private
   * @return {boolean} True if item is selected otherwise false
   */
  NodeManager.prototype.isSelected = function(id) {
    return id === this.outline.selected;
  };


  /**
   * Check if layer should be hidden and not added to manager
   * @memberOf NodeManager.prototype
   * @param {ol.layer.Layer|ol.Overlay} layer Item ID
   * @private
   * @return {boolean} True if item is hidden otherwise false
   */
  NodeManager.prototype.isHidden = (layer) => {
    if (layer instanceof olexp.measure.Overlay) {
      return true;
    }
    return false;
  };

  /**
   * Move item down in map list
   * @memberOf NodeManager.prototype
   * @param {string} id Item ID
   * @private
   * @return {null|boolean} True if moved, false is not moved, null if not
   *                         found.
   */
  NodeManager.prototype.moveDown = function(id) {
    const item = this.getById(id, false);

    if (item !== null) {
      // Item found in this node
      let movedItem = this.moveLayerUp(this.layers, item.layer);
      if (movedItem) {
        movedItem = this.moveItemDown(id);
      }
      return movedItem;
    }

    // Check if item in child managers
    const me = this;
    let itemFound = null;
    this.items.forEach((item) => {
      if (itemFound !== null) {
        return;
      }
      if (item.type === olexp.item.Type.GROUP) {
        const movedChild = me.managers[item.id].moveDown(id);
        if (movedChild !== null) {
          itemFound = movedChild;
          return;
        }
      }
    });
    return itemFound;
  };

  /**
   * Move item down
   * @memberOf NodeManager.prototype
   * @param {string} id Item ID
   * @private
   * @return {boolean} True if moved otherwise false
   */
  NodeManager.prototype.moveItemDown = function(id) {
    // Get node to move
    const node = this.outline.get(id);
    if (node === null) {
      return false;
    }

    // Get index in list
    const nodes = this.outline.find(node.parent.id, {
      parent: node.parent,
    });
    const index = this.outline.get(node.parent.id, id, true);
    if (index >= (nodes.length - 1)) {
      return false;
    }

    // Get node to swap
    const nextId = nodes[index + 1].id;
    const nextNode = nodes[index + 1];

    // Check that nodes are in same parent node
    if (node.parent !== nextNode.parent) {
      return false;
    }

    // Swap nodes
    this.outline.remove(nextId);
    this.outline.insert(node.parent, id, nextNode);
    this.outline.select(id);

    return true;
  };

  /**
   * Move item up
   * @memberOf NodeManager.prototype
   * @param {string} id Item ID
   * @private
   * @return {boolean} True if moved otherwise false
   */
  NodeManager.prototype.moveItemUp = function(id) {
    // Get node to move
    const node = this.outline.get(id);
    if (node === null) {
      return false;
    }

    // Get index in list
    const nodes = this.outline.find(node.parent.id, {
      parent: node.parent,
    });
    const index = this.outline.get(node.parent.id, id, true);
    if (index <= 0) {
      return false;
    }

    // Get node to swap
    const prevId = nodes[index - 1].id;
    const prevNode = nodes[index - 1];

    // Check that nodes are in same parent node
    if (node.parent !== prevNode.parent) {
      return false;
    }

    // Swap nodes
    this.outline.remove(id);
    this.outline.insert(node.parent, prevId, node);
    this.outline.select(id);

    return true;
  };

  /**
   * Move layer down
   * @memberOf NodeManager.prototype
   * @param {ol.Collection} layers Source layer list
   * @param {ol.layer.Layer|ol.Overlay} layer Layer to move
   * @private
   * @return {boolean} True if moved otherwise false
   */
  NodeManager.prototype.moveLayerDown = function(layers, layer) {
    const index = olexp.util.indexOf(layers, layer);
    const numLayers = this.layers.getLength();
    if (index < numLayers - 1) {
      const item = this.getByLayer(layer, false);

      // Set item to moving so it's not removed by the manager
      item.moving(true);
      layers.removeAt(index);
      layers.insertAt(index + 1, layer);
      item.moving(false);

      return true;
    }
    return false;
  };

  /**
   * Move layer up
   * @memberOf NodeManager.prototype
   * @param {ol.Collection} layers Source layer list
   * @param {ol.layer.Layer|ol.Overlay} layer Layer to move
   * @private
   * @return {boolean} True if moved otherwise false
   */
  NodeManager.prototype.moveLayerUp = function(layers, layer) {
    const index = olexp.util.indexOf(layers, layer);
    if (index > 0) {
      const item = this.getByLayer(layer, false);

      // Set item to moving so it's not removed by the manager
      item.moving(true);
      layers.removeAt(index);
      layers.insertAt(index - 1, layer);
      item.moving(false);

      return true;
    }
    return false;
  };

  /**
   * Move item up in map list
   * @memberOf NodeManager.prototype
   * @param {string} id Item ID
   * @private
   * @return {null|boolean} True if moved, false if not moved, null if not
   *                         found
   */
  NodeManager.prototype.moveUp = function(id) {
    const item = this.getById(id, false);

    if (item !== null) {
      // Item found in this node
      let movedItem = this.moveLayerDown(this.layers, item.layer);
      if (movedItem) {
        movedItem = this.moveItemUp(id);
      }
      return movedItem;
    }

    // Check if item in child managers
    const me = this;
    let itemFound = null;
    this.items.forEach((item) => {
      if (itemFound !== null) {
        return;
      }
      if (item.type === olexp.item.Type.GROUP) {
        const movedChild = me.managers[item.id].moveUp(id);
        if (movedChild !== null) {
          itemFound = movedChild;
          return;
        }
      }
    });
    return itemFound;
  };

  /**
   * Remove listener
   * @memberOf NodeManager.prototype
   * @param {string} type The event type.
   * @param {function} listener The listener function.
   * @param {object} optThis The object to use as this in listener.
   * @private
   */
  NodeManager.prototype.off = function(type, listener, optThis) {
    this.event.off(type, listener, optThis);

    // Remove listener from child managers
    const numItems = this.getSize();
    let i = 0;
    for (i = 0; i < numItems; i += 1) {
      if (this.items[i].type === olexp.item.Type.GROUP) {
        this.managers[this.items[i].id].off(type, listener, optThis);
      }
    }
  };

  /**
   * Callback when layer changed
   * @memberOf NodeManager.prototype
   * @param {string} type The event type.
   * @param {function} listener The listener function.
   * @param {object} optThis The object to use as this in listener.
   * @private
   */
  NodeManager.prototype.on = function(type, listener, optThis) {
    this.event.on(type, listener, optThis);

    // Register listener with child managers
    const numItems = this.getSize();
    let i = 0;
    for (i = 0; i < numItems; i += 1) {
      if (this.items[i].type === olexp.item.Type.GROUP) {
        this.managers[this.items[i].id].on(type, listener, optThis);
      }
    }
  };

  /**
   * Callback when layer removed
   * @memberOf NodeManager.prototype
   * @param {olexp.item.Item} item OpenLayers Explorer Item
   * @private
   */
  NodeManager.prototype.onItemRemoved = function(item) {
    // Trigger item remove event
    this.event.trigger('remove:item', item);

    // Remove item
    if (this.isSelected(item.id)) {
      this.details.clear();
    }
    this.remove(item);
  };

  /**
   * Callback when layer changed
   * @memberOf NodeManager.prototype
   * @param {ol.ObjectEvent} event ol3 Layer change event
   * @private
   */
  NodeManager.prototype.onLayerChanged = function(event) {
    // ==================================================
    // Extract layers from change event
    // --------------------------------------------------
    const changes = event.target;

    // ==================================================
    // If layer is in map but not in manager then add
    // --------------------------------------------------
    let i = 0;
    let layer = null;
    const numLayers = changes.getLength();
    for (i = 0; i < numLayers; i += 1) {
      layer = changes.item(i);
      if (this.isHidden(layer) === false) {
        if (this.getByLayer(layer) === null) {
          this.addLayer(layer);
        }
      }
    }

    // ==================================================
    // If layer is in manager but not in map then remove
    // --------------------------------------------------

    const me = this;
    const items = this.toList();
    items.forEach((item) => {
      // Check if item is just being moved by user
      if (item.moving() === false) {
        if (olexp.util.indexOf(me.layers, item.layer) === -1) {
          me.onItemRemoved(item);
        }
      }
    });
  };

  /**
   * Remove layer from manager
   * @memberOf NodeManager.prototype
   * @param {olexp.item.Item} item Managed item to remove
   * @private
   * @return {boolean} True if removed otherwise false
   */
  NodeManager.prototype.remove = function(item) {
    // ==================================================
    // Remove layer from manager
    // --------------------------------------------------
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.outline.remove(item.id);
      return true;
    }

    // ==================================================
    // Check if item in child managers and remove
    // --------------------------------------------------
    const me = this;
    let itemRemoved = false;
    this.items.forEach((itemChild) => {
      if (itemRemoved) {
        return;
      }
      if (itemChild.type === olexp.item.Type.GROUP) {
        if (me.managers[itemChild.id].remove(item)) {
          itemRemoved = true;
          return;
        }
      }
    });
    return itemRemoved;
  };

  /**
   * Remove item from map
   * @memberOf NodeManager.prototype
   * @private
   * @param {Item} item Item to remove.
   * @return {null|ol.layer.Layer|ol.Overlay} Layer removed from map or null
   *                                         if not found.
   */
  NodeManager.prototype.removeFromMap = function(item) {
    const layerMap = this.layers.remove(item.layer);
    if (layerMap !== undefined) {
      return layerMap;
    }

    // ==================================================
    // Check if item in child managers and remove
    // --------------------------------------------------
    const me = this;
    let itemRemoved = null;
    this.items.forEach((itemChild) => {
      if (itemRemoved !== null) {
        return;
      }
      if (itemChild.type === olexp.item.Type.GROUP) {
        const layerChild = me.managers[itemChild.id].removeFromMap(item);
        if (layerChild !== null) {
          itemRemoved = layerChild;
          return;
        }
      }
    });
    return itemRemoved;
  };

  /**
   * Set layers that are being managed
   * @function setLayers
   * @memberOf NodeManager.prototype
   * @param {external:ol.Collection} layers New layer collection to monitor.
   * @private
   */
  NodeManager.prototype.setLayers = function(layers) {
    // Remove old layers
    this.layers.un('change:length', this.onLayerChanged, this);
    while (this.items.length > 0) {
      this.onItemRemoved(this.items[this.items.length - 1]);
    }

    // Add new layers
    this.layers = layers;
    this.layers.on('change:length', this.onLayerChanged, this);
    let j = 0;
    for (j = 0; j < this.layers.getLength(); j += 1) {
      this.addLayer(this.layers.item(j));
    }
  };

  /**
   * Get items as list
   * @memberOf NodeManager.prototype
   * @private
   * @return {array} List of items
   */
  NodeManager.prototype.toList = function() {
    const items = [];
    const numItems = this.getSize();
    let i = 0;
    for (i = 0; i < numItems; i += 1) {
      items.push(this.items[i]);
    }
    return items;
  };

  /**
   * Node manager that synchronizes adding and removing items
   * @function
   * @memberOf olexp.manager
   * @param {string} id Node id
   * @param {external:ol.Map} map Managed map
   * @param {external:jQuery.fn.w2sidebar} outline Managed outline sidebar
   * @param {external:jQuery.fn.w2grid} details Details grid
   * @public
   * @return {function} NodeManager instance.
   */
  olexp.manager.NodeManager = function(id, map, outline, details) {
    const manager = new NodeManager(id, map, outline, details);
    return {
      getById: manager.getById.bind(manager),
      getByLayer: manager.getByLayer.bind(manager),
      moveDown: manager.moveDown.bind(manager),
      moveUp: manager.moveUp.bind(manager),
      off: manager.off.bind(manager),
      on: manager.on.bind(manager),
      removeFromMap: manager.removeFromMap.bind(manager),
      setLayers: manager.setLayers.bind(manager),
    };
  };

  return olexp;
})(olexp || {});

export default olexp.manager;
