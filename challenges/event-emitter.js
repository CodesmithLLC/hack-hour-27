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
  this.funcObj = {};
}

EventEmitter.prototype.on = function(funcName, func) {
  if(!this.funcObj[funcName]) {
    this.funcObj[funcName] = [func];
  } else {
    this.funcObj[funcName].push(func);
  }
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  this.funcObj[funcName].forEach( func => {
    func(...args);
  })
};

// tests

// const a = (n) => console.log(n + 2);
// const b = (n) => console.log(n + 'string');
// const c = (n) => console.log(n ** 10);
// const d = (n) => console.log(n + 'two');

// const emit = new EventEmitter()

// emit.on('number', a)
// emit.trigger('number', 2)
// emit.on('string', b)
// emit.trigger('string', 2)
// emit.on('number', c)
// emit.on('string', d)
// emit.trigger('number', 2)
// emit.trigger('string', 2)

module.exports = EventEmitter;
