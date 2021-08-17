const http =require("http")

http.createServer(function(request, response){
    response.writeHead(200,{"content-type":"text/html"})
    response.end("<b>hello world</b>")
}).listen(1234)