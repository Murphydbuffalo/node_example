//Less forgiving interpreter
'use strict';

var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
  // response.send('Testing testing testing');
  response.render('index');
});

app.post('/', function(request, response){});

app.put('/', function(request, response){});

app.delete('/', function(request, response){});

var server = app.listen(8080, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at ' + host + ' on port ' + port + '...');
});

module.exports = app;
