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
  this.cache = {};
}

EventEmitter.prototype.on = function(funcName, func) {
  // If the event doesn't already exist, create an array to act as
  // a subscription list for the event. Push the function into the array
  if (!this.cache[funcName]) this.cache[funcName] = func;
  //if the event already exists, just add it to the subscription list
  else this.cache[funcName].push(func);
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  this.cache[funcName].forEach(el => el(...args));
};

// EventEmitter.prototype.trigger = function(funcName, ...args) {
//   if(this.events[funcName]){
//     for(let i=0; i< this.events[funcName].length; i++){
//       this.events[funcName][i](...args);
//     }
//     return true;
//   }
//   return false;
// };

module.exports = EventEmitter;

// let a = new EventEmitter();
// let counter = 0;
// // console.log(counter);

// a.on('increment', function() {
//   counter++;
// })

// a.on('log', function(word) {
//   console.log('log1 fired:',word);
// })

// a.on('log',function(number){
//   console.log('log2 fired: ',number + number);
// })

// console.log('expect 0 ->',counter);
// a.trigger('increment');
// console.log('expect 1 ->',counter);


// console.log(a.trigger('log',5));
// console.log(a.trigger('yeet'));













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
  this.events = {};
}


// subscribes functions to events to listen for
// we handle multiple functions being tied to the same event
// by using an array
EventEmitter.prototype.on = function(funcName, func) {

  // If the event doesn't already exist, create an array to act as
  // a subscription list for the event. Push the function into the array

  if(!this.events[funcName]) {
    this.events[funcName] = [func];
    // this.events[funcName].push(func);
  }

  //if the event already exists, just add it to the subscription list
  else {
    this.events[funcName].push(func);
  }
};


EventEmitter.prototype.trigger = function(funcName, ...args) {

  if(this.events[funcName]){

    for(let i=0; i< this.events[funcName].length; i++){
      this.events[funcName][i](...args);
    }

    return true;

  }

  return false;

};

let a = new EventEmitter();
let counter = 0;
// console.log(counter);

a.on('increment', function() {
  counter++;
})

a.on('log', function(word) {
  console.log('log1 fired:',word);
})

a.on('log',function(number){
  console.log('log2 fired: ',number + number);
})

console.log('expect 0 ->',counter);
a.trigger('increment');
console.log('expect 1 ->',counter);


console.log(a.trigger('log',5));
console.log(a.trigger('yeet'));

module.exports = EventEmitter;