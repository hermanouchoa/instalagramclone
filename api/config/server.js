require('dotenv').config();

var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var api = express();

api.use(bodyParser.urlencoded( {extended: true} ));
api.use(bodyParser.json());
api.use(expressValidator());

consign()
    .include('routes')
    .then('config/dbConnection.js')
    .then('config/dbConnectionOracle.js')
    .then('models')
    .then('controllers')
    .into(api);

module.exports = api;