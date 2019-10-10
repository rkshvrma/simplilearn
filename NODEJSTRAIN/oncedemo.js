var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();



emitter.once('foo', function(){
    console.log('first time');
})

emitter.once('foo', function(){
    console.log('second time');
})
emitter.emit('foo');
//emitter.emit('foo');