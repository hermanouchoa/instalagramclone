var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();

app.use( bodyParser.urlencoded( {extended: true} ) );
app.use(bodyParser.json());

var port = 3000;

app.listen(port);

console.log('Jesus me ajude nesse jornada. API escutando na '+port);