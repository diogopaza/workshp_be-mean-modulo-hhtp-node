let http = require('http')
let url = require('url')

http.get({

    hostname: 'localhost',
    port:3000,
    path:'/user?name=Diogo&teacher=true&age:34',
    agent: false
},(response) => {

    let body = ''



console.log('STATUS: ' +response.statusCode);
console.log('HEADERS:' + response.headers);

response.on('data', function(data){
    body +=data;
})

response.on('end', function(){
    console.log('Resposta:', body)
})

})
