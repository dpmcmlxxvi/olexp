/* globals $ */

/**
 * @namespace olexp.event
 * @private
 */
const olexp = {
  event: {},
};

// ==================================================
// Event Handler
// --------------------------------------------------
((olexp) => {
  /**
   * Handles listening for registered events
   * @param {object} listeners Initial listeners
   * @private
   */
  const Event = function(listeners) {
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
   * @param {object} optThis The object to use as this in listener.
   * @private
   * @warning If event type is not already registered then listener is not.
   */
  Event.prototype.on = function(type, listener, optThis) {
    if (this.listeners[type] === undefined) {
      return;
    }

    let callback = listener;
    if (optThis !== undefined) {
      callback = listener.bind(optThis);
    }
    this.listeners[type].push(callback);
  };

  /**
   * Register event to which to listen
   * @memberOf Event.prototype
   * @param {string} type The event type.
   * @private
   * @warning If event type is already registered then nothing is done.
   */
  Event.prototype.register = function(type) {
    if (this.listeners[type] !== undefined) {
      return;
    }
    this.listeners[type] = [];
  };

  /**
   * Trigger event and call listeners
   * @memberOf Event.prototype
   * @param {string} type The event type.
   * @private
   */
  Event.prototype.trigger = function(type, ...args) {
    if (this.listeners[type] === undefined) {
      return;
    }

    // Call listeners with remaining arguments
    const self = this;
    this.listeners[type].forEach((listener) => {
      listener.apply(self, args);
    });
  };

  /**
   * Unregister event to which to listen
   * @memberOf Event.prototype
   * @param {string} type The event type.
   * @private
   * @return {function[]} Listeners registered with given type
   * @warning If event type is already registered then nothing is done.
   */
  Event.prototype.unregister = function(type) {
    if (this.listeners[type] === undefined) {
      return [];
    }
    const listeners = this.listeners[type];
    delete this.listeners[type];
    return listeners;
  };

  /**
   * Remove listener from event type
   * @memberOf Event.prototype
   * @param {string} type The event type.
   * @param {function} listener The listener function.
   * @param {object} optThis The object to use as this in listener.
   * @private
   */
  Event.prototype.off = function(type, listener, optThis) {
    if (this.listeners[type] === undefined) {
      return;
    }

    let callback = listener;
    if (optThis !== undefined) {
      callback = listener.bind(optThis);
    }
    const index = this.listeners[type].indexOf(callback);
    if (index > -1) {
      this.listeners[type].splice(index, 1);
    }
  };

  /**
   * Event handler
   * @memberOf olexp.event
   * @param {object} listeners Initial listeners
   * @private
   * @return {object} Handler.
   */
  olexp.event.Event = function(listeners) {
    const handler = new Event(listeners);
    return handler;
  };
})(olexp || {});

export default olexp.event;
