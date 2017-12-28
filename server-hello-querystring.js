'use strict';

let http = require('http')
, url = require('url')

http.createServer(function(request, response){

    var result = url.parse(request.url, true,true);
    console.log('href : ' + result.href)
    console.log('port: ' + result.port)
   // console.log('query: ' + result.query)
    console.log('Request: ' + request.url)
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write('<html><body>')
    response.write('<h1>Query string</h1>')
    response.write('<ul>')

    /*for(var Key in result.query){
        response.write('<li>' +key+ ':' + result.query[key]+'</li>' )

    }
*/
    response.write('</ul>')
    response.write('</body></html>')
    response.end();
}).listen(3000, function(){
    console.log('Servidor rodando em 3000 query string')

})

    