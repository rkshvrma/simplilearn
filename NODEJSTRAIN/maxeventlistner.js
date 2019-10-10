var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();


var listnercalled = 0;
emitter.setMaxListeners(100);

function somecalback(){
    emitter.on('foo', function (){
        listnercalled++
        
    })
}

for(var i =0; i < 90 ; i++){
    somecalback();
}

emitter.emit('foo');
console.log('listener called - ', listnercalled);
//emitter.emit('foo');