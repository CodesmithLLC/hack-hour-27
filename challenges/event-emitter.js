'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
  this.functions = {}
}

EventEmitter.prototype.on = function (string, callback) {
  this.functions[string] = callback;
};

EventEmitter.prototype.trigger = function (string, ...args) {
  if (this.functions[string] !== undefined) {
    if (args.length === 0) {
      this.functions[string]();
    } else {
      this.functions[string](args[0]);
    }
  }
  return 'No event listener has been set for this event';
};


module.exports = EventEmitter;
