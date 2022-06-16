const { response } = require('express');
var express = require('express');
var {engine} = require('express-handlebars')
var bp = require('body-parser')

var app = express();
var clientes = [];

//configurções para identificar framework que fará rendeirizações
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(bp.urlencoded({extended: false}))
app.use(bp.json());

app.use(express.static('public'));

app.get('/', function(request, response){
    response.render('inicial');
});

app.get('/contrate', function(request, response){
    response.render('contrate');
});

app.get('/sistema', function(request, response){
    response.render('sistema');
})

app.get('/cadastro', function(request, response){
    response.render('cadastro');
});

app.post('/cadastro', function(request, response){
    
    razao = request.body.razao; 
    capital = request.body.capital; 

    console.log("razao: " + razao);
    console.log("capital: " + capital);

    cliente = {
        "razao": razao, 
        "capital": capital,
    }

    clientes.push(cliente);
    response.render('sistema', {clientes})

})

app.listen(3000);