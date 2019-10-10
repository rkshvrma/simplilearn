var em = require('events').EventEmitter;

var emitter = new em();
emitter.on('onswipe', function(ev){
    console.log('fan is on', ev)
    ev.handled = true;
})

emitter.on('onswipe', function(ev){
    if(ev.handled){
    console.log('it is already turned on', ev )
}
})

emitter.on('onshoot', function(){
    console.log('shoot fan is on')
})

emitter.on('onshoot', function(){
    console.log('shoot light is on')
})
emitter.emit('onswipe', {handled:false})
emitter.emit('onshoot')
emitter.emit('onshoot')