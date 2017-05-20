
/*globals $, olexp, w2confirm, window */
/*jslint vars: true */

/**
 * @namespace olexp.menu
 */
window.olexp.menu = window.olexp.menu || {};

//==================================================
// Properties menu item
//--------------------------------------------------
(function (olexp) {

    "use strict";

    /**
     * Properties menu item
     * @param {olexp.manager.Manager} manager Explorer manager
     * @param {olexp.ExplorerSettings} settings olexp settings
     * @private
     */
    var Properties = function (manager, settings) {

        var olexpSettings = $.extend(true, {
            menu : {
                Properties : {
                    field  : 35,
                    form   : {},
                    popup  : {
                        height : 130,
                        style  : "width: 100%; height: 100%;",
                        title  : "Edit Layer",
                        width  : 365
                    },
                    span   : 4,
                    text   : "Properties"
                }
            }
        }, settings);

        /**
         * Menu item icon
         * @field
         * @private
         * @type {string}
         */
        this.icon = "olexp-menu-properties";

        /**
         * Form DOM id
         * @field
         * @private
         * @type {string}
         */
        this.form = settings.prefix + "-menu-properties-form";

        /**
         * Menu DOM id
         * @field
         * @private
         * @type {string}
         */
        this.id = settings.prefix + "-menu-properties";

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
        this.name = "layerform";

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
    Properties.prototype.onClick = function (event) {

        var me = this;

        // ==================================================
        // Extract node item id
        // --------------------------------------------------
        var id = event.target;

        // ==================================================
        // Extract item to be edited
        // --------------------------------------------------
        var item = this.manager.getById(id);
        var record = item.getProperties();

        // ==================================================
        // Create form fields and adjust form height per field
        // --------------------------------------------------
        var formHeight = this.settings.popup.height;
        var fieldHeight = this.settings.field;
        var fields = [];

        // Add item name field
        formHeight += fieldHeight;
        fields.push({
            field : "name",
            html  : {
                caption : "Name",
                span    : this.settings.span
            },
            required : true,
            type     : "text"
        });

        // Add numeric fields
        var propertyTypes = item.getPropertyTypes();
        var numerics = $.map(propertyTypes, function (value) {
            return value.title;
        });
        numerics.forEach(function (title) {
            formHeight += fieldHeight;
            fields.push({
                field : title.toLowerCase(),
                html : {
                    caption : title,
                    span    : me.settings.span
                },
                required : true,
                type     : "float"
            });
        });

        // ==================================================
        // Function to process form changes
        // --------------------------------------------------
        var onChanges = function (changes) {
            me.manager.updateItem(id, changes);
        };

        // ==================================================
        // Process popup form
        // --------------------------------------------------

        var formOptions = $.extend(this.settings.form, {
            fields : fields,
            name   : this.name,
            record : record
        });

        var popupOptions = $.extend($.extend({}, this.settings.popup), {
            height : formHeight
        });

        olexp.util.popup(this.form, onChanges, formOptions, popupOptions);

    };

    /**
     * Properties menu item 
     * @memberOf olexp.menu
     * @param {olexp.manager.Manager} manager Explorer manager
     * @param {olexp.ExplorerSettings} settings olexp settings
     * @public
     */
    olexp.menu.Properties = function (manager, settings) {

        var control = new Properties(manager, settings);

        return {
            menu: {
                id   : control.id,
                img  : control.icon,
                text : control.settings.text
            },
            click: function (event) {
                control.onClick(event);
            }
        };

    };

    return olexp;

}(olexp || {}));

//==================================================
// Remove menu item
//--------------------------------------------------
(function (olexp) {

    "use strict";

    /**
     * Remove menu item
     * @param {olexp.manager.Manager} manager Explorer manager
     * @param {olexp.ExplorerSettings} settings olexp settings
     * @private
     */
    var Remove = function (manager, settings) {

        var olexpSettings = $.extend(true, {
            menu : {
                Remove : {
                    text : "Remove"
                }
            }
        }, settings);

        /**
         * Menu item icon
         * @field
         * @private
         * @type {string}
         */
        this.icon = "olexp-menu-remove";

        /**
         * Menu DOM id
         * @field
         * @private
         * @type {string}
         */
        this.id = settings.prefix + "-menu-remove";

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
    Remove.prototype.onClick = function (event) {

        var me = this;

        // ==================================================
        // Extract node item id
        // --------------------------------------------------
        var id = event.target;

        // ==================================================
        // Extract item to be removes
        // --------------------------------------------------
        var item = this.manager.getById(id);

        // Confirm user wants to delete item
        // Remove item from map and manager
        w2confirm("Do you want to delete \"" + item.name() + "\"?")
            .yes(function () {
                me.manager.removeFromMap(item);
            });

    };

    /**
     * Remove menu item 
     * @memberOf olexp.menu
     * @param {olexp.manager.Manager} manager Explorer manager
     * @param {olexp.ExplorerSettings} settings olexp settings
     * @public
     */
    olexp.menu.Remove = function (manager, settings) {

        var control = new Remove(manager, settings);

        return {
            menu: {
                id   : control.id,
                img  : control.icon,
                text : control.settings.text
            },
            click: function (event) {
                control.onClick(event);
            }
        };

    };

    return olexp;

}(olexp || {}));

//==================================================
// Zoom menu item
//--------------------------------------------------
(function (olexp) {

    "use strict";

    /**
     * Zoom menu item
     * @param {olexp.manager.Manager} manager Explorer manager
     * @param {olexp.ExplorerSettings} settings olexp settings
     * @private
     */
    var Zoom = function (manager, settings) {

        var olexpSettings = $.extend(true, {
            menu : {
                Zoom : {
                    text : "Zoom"
                }
            }
        }, settings);

        /**
         * Menu item icon
         * @field
         * @private
         * @type {string}
         */
        this.icon = "olexp-menu-zoom";

        /**
         * Menu DOM id
         * @field
         * @private
         * @type {string}
         */
        this.id = settings.prefix + "-menu-zoom";

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
    Zoom.prototype.onClick = function (event) {

        // ==================================================
        // Extract node item id
        // --------------------------------------------------
        var id = event.target;

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
     * @public
     */
    olexp.menu.Zoom = function (manager, settings) {

        var control = new Zoom(manager, settings);

        return {
            menu: {
                id   : control.id,
                img  : control.icon,
                text : control.settings.text
            },
            click: function (event) {
                control.onClick(event);
            }
        };

    };

    return olexp;

}(olexp || {}));
