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
// function EventEmitter() {}
// EventEmitter.prototype.on = function(funcName, func) {};
// EventEmitter.prototype.trigger = function(funcName, ...args) {};
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.cache = new Map();
    }
    EventEmitter.prototype.on = function (funcName, func) {
        if (!this.cache.has(funcName)) {
            this.cache.set(funcName, []);
        }
        var funcArr = this.cache.get(funcName);
        funcArr.push(func);
    };
    EventEmitter.prototype.trigger = function (funcName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.cache.has(funcName)) {
            var funcArr = this.cache.get(funcName);
            funcArr.forEach(function (func) {
                if (args) {
                    func.apply(void 0, args);
                }
                else {
                    func();
                }
            });
        }
    };
    return EventEmitter;
}());
// const instance = new EventEmitter();
// let counter = 0;
// instance.on('increment', function() {
//   counter++;
// });
// instance.trigger('increment');
// console.log(counter);
// instance.trigger('increment');
// console.log(counter);
// const arr = [];
// instance.on('addStuff', input => {
//   arr.push(input);
// });
// instance.trigger('addStuff', 123);
// console.log(arr);
// instance.trigger('addStuff', 456);
// console.log(arr);
module.exports = EventEmitter;
