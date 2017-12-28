var http = require('http')
var fs = require('fs')
var index = fs.readFileSync('./index.html')

var server = http.createServer(function(request, response){

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write(index)
    response.end()

})


server.listen(3000, function(){

    console.log('Servidor rodandando na 3000')
})