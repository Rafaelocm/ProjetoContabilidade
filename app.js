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

var mysql = require ('mysql2');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'empresa'
});


app.get('/sistema', function(request, response){
    sql = 'SELECT * FROM cliente'
    mysqlConnection.query(sql, function (err, resultSet, fields){
        if(err){
            console.log("Erro ao conectar-se com o banco de dados: ", err);
        }else{
            response.render ('sistema', {cliente: resultSet});
        }
    })
})

app.get('/', function(request, response){
    response.render('inicial');
});

app.get('/contrate', function(request, response){
    response.render('contrate');
});

app.get('/login', function(request, response){
    response.render('login');
});

app.get('/cadastro', function(request, response){
    response.render('cadastro');
});

app.post('/cadastro', function(request, response){
    
    razao = request.body.razao; 
    capital = request.body.capital; 
    responsavel = request.body.responsavel; 
    cnpj = request.body.cnpj; 
    telefone = request.body.telefone; 
    email = request.body.email; 

    console.log("razao: " + razao);
    console.log("capital: " + capital);
    console.log("responsavel: " + responsavel);
    console.log("cnpj: " + cnpj);
    console.log("telefone: " + telefone);
    console.log("email: " + email);

    cliente = {
        "razao": razao, 
        "cnpj": cnpj, 
        "capital": capital,
        "nome": responsavel,
        "telefone": telefone, 
        "email": email
    }

    values = [[razao, cnpj, responsavel, capital, telefone, email]];

    clientes.push(cliente);

    sql = 'INSERT INTO cliente (razao, cnpj, responsavel, capital, email, telefone) VALUES ?'
    mysqlConnection.query(sql, [values], function (err, result){
        if (err) throw err;
        console.log("Linhas modificadas no banco: ", result.affectedRows) ;
    })
    response.redirect('/');
});
    



app.listen(3000);