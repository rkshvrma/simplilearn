var http = require('http')
var url = require('url')

http.createServer(function(req,res){
var pathname = url.parse(req.url).pathname  
        if(pathname == '/'){
            res.writeHead(200,{
                'Content-Type' : 'text/plain'
            })
            res.end('welcome to homepage bank ')
        }
        
        else if(pathname == '/applycredit'){
            res.writeHead(200,{
                'Content-Type' : 'text/plain'
            })
            res.end('welcome to about page')
        }
        else if(pathname == '/register'){
            res.writeHead(200,{
                'Location' : '/'
            })
            res.end('welcome to register page')
        }
        else if(pathname == '/login'){
            res.writeHead(200,{
                'Location' : '/'
            })
            res.end('welcome to login page')
        }

        
        else if(pathname == '/redirect'){
            res.writeHead(301,{
                'Location' : '/'
            })
            res.end('welcome to redirect page')
        }
    

}).listen(3000,'127.0.0.1')
console.log('server is ready')