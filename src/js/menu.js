import olexpUtil from './util';

/* globals $, w2confirm */

/**
 * @namespace olexp.menu
 * @private
 */
const olexp = {
  menu: {},
  util: olexpUtil,
};

// ==================================================
// Properties menu item
// --------------------------------------------------
((olexp) => {
  /**
   * Properties menu item
   * @param {olexp.manager.Manager} manager Explorer manager
   * @param {olexp.ExplorerSettings} settings olexp settings
   * @private
   */
  const Properties = function(manager, settings) {
    const olexpSettings = $.extend(true, {
      menu: {
        Properties: {
          field: 35,
          form: {},
          popup: {
            height: 130,
            style: 'width: 100%; height: 100%;',
            title: 'Edit Layer',
            width: 365,
          },
          span: 4,
          text: 'Properties',
        },
      },
    }, settings);

    /**
     * Menu item icon
     * @field
     * @private
     * @type {string}
     */
    this.icon = 'olexp-menu-properties';

    /**
     * Form DOM id
     * @field
     * @private
     * @type {string}
     */
    this.form = settings.prefix + '-menu-properties-form';

    /**
     * Menu DOM id
     * @field
     * @private
     * @type {string}
     */
    this.id = settings.prefix + '-menu-properties';

    /**
     * Explorer manager
     * @field
     * @private
     * @type {olexp.manager.Manager}
     */
    this.manager = manager;

    /**
     * Menu w2ui name
     * @field
     * @private
     * @type {string}
     */
    this.name = 'layerform';

    /**
     * Properties menu settings
     * @field
     * @private
     * @type {Object}
     */
    this.settings = olexpSettings.menu.Properties;
  };

  /**
   * Callback when properties menu item is clicked
   * @memberOf Properties.prototype
   * @param {external:jQuery.fn.w2sidebar.onMenuClick} event Menu click event
   * @private
   */
  Properties.prototype.onClick = function(event) {
    const me = this;

    // ==================================================
    // Extract node item id
    // --------------------------------------------------
    const id = event.target;

    // ==================================================
    // Extract item to be edited
    // --------------------------------------------------
    const item = this.manager.getById(id);
    const record = item.getProperties();

    // ==================================================
    // Create form fields and adjust form height per field
    // --------------------------------------------------
    let formHeight = this.settings.popup.height;
    const fieldHeight = this.settings.field;
    const fields = [];

    // Add item name field
    formHeight += fieldHeight;
    fields.push({
      field: 'name',
      html: {
        caption: 'Name',
        span: this.settings.span,
      },
      required: true,
      type: 'text',
    });

    // Add numeric fields
    const propertyTypes = item.getPropertyTypes();
    const numerics = $.map(propertyTypes, (value) => value.title);
    numerics.forEach((title) => {
      formHeight += fieldHeight;
      fields.push({
        field: title.toLowerCase(),
        html: {
          caption: title,
          span: me.settings.span,
        },
        required: true,
        type: 'float',
      });
    });

    // ==================================================
    // Function to process form changes
    // --------------------------------------------------
    const onChanges = (changes) => {
      me.manager.updateItem(id, changes);
    };

    // ==================================================
    // Process popup form
    // --------------------------------------------------

    const formOptions = $.extend(this.settings.form, {
      fields,
      name: this.name,
      record,
    });

    const popupOptions = $.extend($.extend({}, this.settings.popup), {
      height: formHeight,
    });

    olexp.util.popup(this.form, onChanges, formOptions, popupOptions);
  };

  /**
   * Properties menu item
   * @memberOf olexp.menu
   * @param {olexp.manager.Manager} manager Explorer manager
   * @param {olexp.ExplorerSettings} settings olexp settings
   * @private
   * @return {object} Properties menu item
   */
  olexp.menu.properties = (manager, settings) => {
    const control = new Properties(manager, settings);

    return {
      menu: {
        id: control.id,
        img: control.icon,
        text: control.settings.text,
      },
      click(event) {
        control.onClick(event);
      },
    };
  };

  return olexp;
})(olexp || {});

// ==================================================
// Remove menu item
// --------------------------------------------------
((olexp) => {
  /**
   * Remove menu item
   * @param {olexp.manager.Manager} manager Explorer manager
   * @param {olexp.ExplorerSettings} settings olexp settings
   * @private
   */
  const Remove = function(manager, settings) {
    const olexpSettings = $.extend(true, {
      menu: {
        Remove: {
          text: 'Remove',
        },
      },
    }, settings);

    /**
     * Menu item icon
     * @field
     * @private
     * @type {string}
     */
    this.icon = 'olexp-menu-remove';

    /**
     * Menu DOM id
     * @field
     * @private
     * @type {string}
     */
    this.id = settings.prefix + '-menu-remove';

    /**
     * Explorer manager
     * @field
     * @private
     * @type {olexp.manager.Manager}
     */
    this.manager = manager;

    /**
     * Remove menu settings
     * @field
     * @private
     * @param {Object} settings
     */
    this.settings = olexpSettings.menu.Remove;
  };

  /**
   * Callback when properties menu item is clicked
   * @memberOf Remove.prototype
   * @param {external:jQuery.fn.w2sidebar.onMenuClick} event Menu click event
   * @private
   */
  Remove.prototype.onClick = function(event) {
    const me = this;

    // ==================================================
    // Extract node item id
    // --------------------------------------------------
    const id = event.target;

    // ==================================================
    // Extract item to be removes
    // --------------------------------------------------
    const item = this.manager.getById(id);

    // Confirm user wants to delete item
    // Remove item from map and manager
    w2confirm('Do you want to delete "' + item.name() + '"?').yes(() => {
      me.manager.removeFromMap(item);
    });
  };

  /**
   * Remove menu item
   * @memberOf olexp.menu
   * @param {olexp.manager.Manager} manager Explorer manager
   * @param {olexp.ExplorerSettings} settings olexp settings
   * @private
   * @return {object} Remove menu item
   */
  olexp.menu.remove = (manager, settings) => {
    const control = new Remove(manager, settings);

    return {
      menu: {
        id: control.id,
        img: control.icon,
        text: control.settings.text,
      },
      click(event) {
        control.onClick(event);
      },
    };
  };

  return olexp;
})(olexp || {});

// ==================================================
// Zoom menu item
// --------------------------------------------------
((olexp) => {
  /**
   * Zoom menu item
   * @param {olexp.manager.Manager} manager Explorer manager
   * @param {olexp.ExplorerSettings} settings olexp settings
   * @private
   */
  const Zoom = function(manager, settings) {
    const olexpSettings = $.extend(true, {
      menu: {
        Zoom: {
          text: 'Zoom',
        },
      },
    }, settings);

    /**
     * Menu item icon
     * @field
     * @private
     * @type {string}
     */
    this.icon = 'olexp-menu-zoom';

    /**
     * Menu DOM id
     * @field
     * @private
     * @type {string}
     */
    this.id = settings.prefix + '-menu-zoom';

    /**
     * Explorer
     * @field
     * @private
     * @type {olexp.manager.Manager}
     */
    this.manager = manager;

    /**
     * Zoom menu settings
     * @field
     * @private
     * @param {Object} settings
     */
    this.settings = olexpSettings.menu.Zoom;
  };

  /**
   * Callback when properties menu item is zoomed in
   * @memberOf Zoom.prototype
   * @param {external:jQuery.fn.w2sidebar.onMenuClick} event Menu click event
   * @private
   */
  Zoom.prototype.onClick = function(event) {
    // ==================================================
    // Extract node item id
    // --------------------------------------------------
    const id = event.target;

    // ==================================================
    // Zoom to item layer
    // --------------------------------------------------
    this.manager.zoomTo(id);
  };

  /**
   * Zoom menu item
   * @memberOf olexp.menu
   * @param {olexp.manager.Manager} manager Explorer manager
   * @param {olexp.ExplorerSettings} settings olexp settings
   * @private
   * @return {object} Zoom menu item.
   */
  olexp.menu.zoom = (manager, settings) => {
    const control = new Zoom(manager, settings);

    return {
      menu: {
        id: control.id,
        img: control.icon,
        text: control.settings.text,
      },
      click(event) {
        control.onClick(event);
      },
    };
  };

  return olexp;
})(olexp || {});

export default olexp.menu;
