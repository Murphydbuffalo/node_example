'use strict'; //Less forgiving interpreter

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//Parse request body as JSON 
app.use(bodyParser.json());

//Parse request URL
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('views', './views');
app.set('view engine', 'ejs');
app.set('queue', []);

app.route('/')
  .get(function(request, response){
    console.log('GET /');

    response.render('index', { queue: app.get('queue') });
  })

  .post(function(request, response){
    console.log('POST /');

    app.get('queue').push(request.body.content);
    response.render('index', { queue: app.get('queue') });
  });

app.route('/delete')
  .post(function(request, response){
    console.log('POST /delete');

    app.get('queue').shift();
    response.render('index', { queue: app.get('queue') });
  });

var server = app.listen(8080, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at ' + host + ' on port ' + port + '...');
});
