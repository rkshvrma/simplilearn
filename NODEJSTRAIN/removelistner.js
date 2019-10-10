var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

var fooHandler = function(){
    console.log('handler is called');

    emitter.removeListener('foo', fooHandler);
    console.log('handler called after , removed');

};

emitter.on('foo', fooHandler)

emitter.emit('foo');
emitter.emit('foo');