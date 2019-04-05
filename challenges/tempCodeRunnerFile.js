var instance = new EventEmitter();
var counter = 0;
instance.on('increment', function() {
  counter++;
}); // counter should be 0
instance.trigger('increment'); // counter should be 1
instance.trigger('increment'); // counter should be 2
console.log('counter after triggers', counter)