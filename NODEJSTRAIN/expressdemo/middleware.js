

var middleware = {
    requireAuth:function(req,res,next){

        console.log('private route hit')
        next()
        
    },
    logger:function(req,res,next){

        console.log('request made on ' +  new Date().toString() + 'on' + req.method + ' ' + req.originalUrl)
        next()
    }
    
}
exports.middleware = middleware;
