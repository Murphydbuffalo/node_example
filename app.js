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
app.set('done', []);

app.route('/')
  .get(function(request, response){
    console.log('GET /');

    response.render('index', { queue: app.get('queue'), done: app.get('done') });
  })

  .post(function(request, response){
    console.log('POST /');
    var content = request.body.content;

    if(content.length > 0) {
      app.get('queue').push(content);
      response.render('index', { queue: app.get('queue'), done: app.get('done') });
    } else {
      console.log('No blank fields please.');
    }
  });

app.route('/done')
  .post(function(request, response){
    console.log('POST /done');

    app.get('done').push(app.get('queue').shift());
    response.render('index', { queue: app.get('queue'), done: app.get('done') });
  });

var server = app.listen(8080, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at ' + host + ' on port ' + port + '...');
});
