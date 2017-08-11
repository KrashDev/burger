

var express = require("express");
var app = express();
var port = 3000;
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var mysql = require('mysql');

// Be sure to place after the body parser if you want to accept the method  
// override using a post parameter 
app.use(express.bodyParser());
 
// Accepts a single argument, the name of the method override parameter, 
// defaults to "_method" 
app.use(require('express-method-override')('method_override_param_name'));