
/**
 * @namespace olexp.event
 */
olexp.event = olexp.event || {};

//==================================================
// Event Handler
//--------------------------------------------------
(function(olexp) {

    /**
     * Handles listening for registered events
     * @param {object} listeners Initial listeners
     * @private
     */
    var Event = function(listeners)
    {

        // ==================================================
        // Collection of event listeners that are keyed by
        // the event name and valued by an array of callback
        // functions (e.g., {'name': [function1, function2]})
        // --------------------------------------------------
        this.listeners = $.extend({}, listeners);

    };

    /**
     * Add listener to event type
     * @memberOf Event.prototype
     * @param {string} type The event type.
     * @param {function} listener The listener function.
     * @param {object} opt_this The object to use as this in listener.
     * @private
     * @warning If event type is not already registered then listener is not. 
     */
    Event.prototype.on = function(type, listener, opt_this)
    {

        if (!(type in this.listeners)) return;

        var callback = listener;
        if (typeof opt_this !== 'undefined') callback = listener.bind(opt_this);
        this.listeners[type].push(callback);

    };

    /**
     * Register event to which to listen
     * @memberOf Event.prototype
     * @param {string} type The event type.
     * @private
     * @warning If event type is already registered then nothing is done.
     */
    Event.prototype.register = function(type)
    {

        if (type in this.listeners) return;
        this.listeners[type] = [];

    };

    /**
     * Trigger event and call listeners
     * @memberOf Event.prototype
     * @param {string} type The event type.
     * @private
     */
    Event.prototype.trigger = function()
    {
        var args = Array.prototype.slice.call(arguments);
        var type = args.shift();
        if (!(type in this.listeners)) return;
        
        // Call listeners with remaining arguments
        for (var i = 0; i < this.listeners[type].length; i++)
        {
            this.listeners[type][i].apply(this, args);
        }
    };

    /**
     * Unregister event to which to listen
     * @memberOf Event.prototype
     * @param {string} type The event type.
     * @private
     * @returns Listeners registered with given type
     * @warning If event type is already registered then nothing is done.
     */
    Event.prototype.unregister = function(type)
    {

        if (!(type in this.listeners)) return;
        var listeners = this.listeners[type];
        delete this.listeners[type];
        return listeners;

    };

    /**
     * Remove listener from event type
     * @memberOf Event.prototype
     * @param {string} type The event type.
     * @param {function} listener The listener function.
     * @param {object} opt_this The object to use as this in listener.
     * @private
     */
    Event.prototype.off = function(type, listener, opt_this)
    {

        if (!(type in this.listeners)) return;

        var callback = listener;
        if (typeof opt_this !== 'undefined') callback = listener.bind(opt_this);
        var index = this.listeners[type].indexOf(callback);
        if (index > -1) this.listeners[type].splice(index, 1);

    };

    /**
     * Event handler
     * @memberOf olexp.event
     * @param {object} listeners Initial listeners
     * @public
     */
    olexp.event.Event = function(listeners) {

        var handler = new Event(listeners);
        return handler;

    };

    return olexp;

}(olexp || {}));
