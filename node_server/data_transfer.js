
var http = require('http');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var count = 0;

var openConnection = function(){
	mongoose.connect('mongodb://localhost/bill_personal');
	db = mongoose.createConnection();
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback () {
	  console.log("success");
	});
};

var paperSchema = new Schema({
  Id: Number,
  Title: String,
  Year: Number,
  ConferenceId: Number,
  JournalId: Number,
  Keyword: String
});

var Paper = mongoose.model('paper', paperSchema);


var handleRequest = function(request, response){
	var defaultCorsHeaders = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
    "access-control-max-age": 10 // Seconds.
  };

  console.log("Serving request type " + request.method + " for url " + request.url);
  var statusCode = 200;

  var headers = defaultCorsHeaders;
  headers['Content-Type'] = "text/plain";

  request.setEncoding('utf8');



  if(request.method === 'GET'){
    response.writeHead(200, headers);
    count ++;
    var newName = "bill"+count.toString();
    
    Paper.find({'Year': 2005}).where('JournalId').equals(0).limit(10).select('Title').exec( function(err, paper){
      console.log('in get 45');
      console.log(paper);
      response.end(JSON.stringify(paper));
    });
  }
    // Query the database for all chats
    // Messages2.sync().success(function(){
    //   Messages2.findAll({}).success(function(users){
    //     users = JSON.stringify(users);
    //     response.end(users);
    //   });
    // });
  else {
    response.writeHead(200, headers);
    console.log("sent a non get request");
    response.end();
  }

  // var db = mongoose.connection;
  //  db.on('error', console.error.bind(console, 'connection error:'));
  //  db.once('open', function callback(){
  //});
};

module.exports = {
	handleRequest: handleRequest,
	openConnection: openConnection
};