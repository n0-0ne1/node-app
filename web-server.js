const http =require("http")

http.createServer(function(request, response){
    response.writeHead(200,{"content-type":"text/html"})
    response.write("hello world")
    response.end("<b>hello world</b>")
}).listen(1000)