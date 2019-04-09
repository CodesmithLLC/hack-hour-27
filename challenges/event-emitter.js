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
  this.functions = new Map();
}

EventEmitter.prototype.on = function(funcName, func) {
  this.functions.set(funcName, func)
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  if (this.functions.has(funcName)) {
    this.functions.get(funcName)(...args)
  } else {
    console.log('event does not exist')
  }
};

module.exports = EventEmitter;

const instance = new EventEmitter();
let counter = 0;
instance.on('increment', function() {counter++})
instance.on('say hello', (name)=>console.log('Hi', name, 'how are you today?'))
instance.trigger('increment');
instance.trigger('increment');
instance.trigger('increment');

instance.trigger('say hello', 'Siye')