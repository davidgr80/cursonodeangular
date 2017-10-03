'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3678;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/prueba', function(req, res){
    res.send({message: "Hola mundo"});
})

app.listen(port,function(){
    console.log('Escuchando en http://localhost:3678');
});
