var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var usuario = require('./routes/usuario');
var perfil = require('./routes/perfil');

var mongoose = require('mongoose');

//Connexão com o banco de dados MongoDB
mongoose.connect('mongodb://exemplo:root@ds021671.mlab.com:21671/db_exemplo', function(err) {
    if(err) {
        console.log('Erro de conexão', err);
        console.log('Seu mongoDB não conectou');
    } else {
        console.log('Conectado com sucesso!');
    }
});

var app = express();

// Engine de configuração de view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/usuario', usuario);
app.use('/perfil', perfil);

//Configuração de páginas não encontradas
app.use(function(req, res, next) {
    var err = new Error('Página não encontrada!');
    err.status = 404;
    next(err);
});

// error handlers

// caso o erro 500 dê em ambiente de
// desenvolvimento o erro mostra uma mensagem
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// Caso o erro ocorra em outro ambiente não
// é exibido a mensagem de erro
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
