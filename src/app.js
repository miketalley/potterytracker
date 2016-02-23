var express = require('express');
var db = require('./db');

var app = express();

app.use(express.static('public'));

db.connect('mongodb://localhost:27017/potterytrackerTEST1', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    app.listen(3000, function() {
      console.log('Listening on port 3000...')
    })
  }
})

