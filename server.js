var date = (new Date()).toJSON();

var http = require('http')

SUCCESS = {
        version: 1.0
        ,name:'Diogo Paza'
        ,returned_at: date

}
ERROR = {
    message : 'Deu merda'
}



http.createServer(function(request, response){
    if(request.url === '/api/v1'){

        response.writeHead(200,{'Content-Type':'application/jsopn'});
        response.write(JSON.stringify(SUCCESS));
    }
    else{
        response.writeHead(400,{'Content-Type':'application/json'});
        response.write(JSON.stringify(ERROR));

    }
    response.end();
    
}).listen(3000, function(){
    console.log('Servidor rodando em localhost:3000')
})