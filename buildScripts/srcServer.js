//Use for configuring the Server
// var express = require('express');
// var path = require('path');
// var open = require('open'); //open is used to open site on the browser.

import express from 'express';
import path from 'path';
import open from 'open' //open is used to open site on the browser.
import webpack from 'webpack';
import config from '../webpack.config.dev';
var port = 3000;
var app = express();
const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler,{
  noInfo:true, //In order show verbose whihle moduling
  publicPath:config.output.publicPath  //
}))
app.get('/', function(req,resp){
resp.sendFile(path.join(__dirname,'../src/index.html'));
})

app.listen(port,function(err){
if(err){
console.log(err);
}else{
open('http:localhost:'+port);
}
});
