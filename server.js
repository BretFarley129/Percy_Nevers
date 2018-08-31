var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
// var nodemailer = require('nodemailer');
// var favicon = require('serve-favicon');
// var config = require('./config.json');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));
app.set('views', path.join(__dirname, './views'));
// app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.get('/', function(req, res) {
    
     res.sendFile(path.join(__dirname + '/views/index.html'));
 });
 


app.listen(1337, function() {
    console.log("listening on port 1337");
});