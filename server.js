var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var device = require('express-device');
app.use(device.capture());
// var nodemailer = require('nodemailer');
// var favicon = require('serve-favicon');
// var config = require('./config.json');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));
app.set('views', path.join(__dirname, './views'));
// app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.get('/', function(req, res) {
    type = req.device.type.toUpperCase();
    // console.log(type);
    // console.log(req.device.type)
    if (type == 'DESKTOP'){
        res.sendFile(path.join(__dirname + '/views/index.html'));
    }
    else {
        res.sendFile(path.join(__dirname + '/views/mobile.html'))
    }
 });
 


app.listen(1337, function() {
    console.log("listening on port 1337");
});