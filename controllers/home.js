'use strict';

module.exports.get = app.get('/', function(request, response){
  response.send('Home page works!');
});

module.exports.post = app.post('/', function(request, response){});

module.exports.put = app.put('/', function(request, response){});

module.exports.delete = app.delete('/', function(request, response){});
