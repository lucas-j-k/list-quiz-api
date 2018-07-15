'use strict'
var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors');

//Pull in the environment variables
require('dotenv').config();


//Set CORS headers to allow external apps to read API data. Assumes any local client will be on port 3000.
app.use(cors({origin: process.env.CORS_ORIGIN || 'http://localhost:3000'}));

//Import Route files
var apiRouter = require('./api-routes');

//Add the routes to the url structure
app.use('/api', apiRouter);

//Set up body-parser with JSON
app.use(bodyParser.json());


// Catch 404 errors and forward to error handler. This is called if no match is found in the preceding route functions.
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
// called as the last middleware. Expects an error object as the first argument, which we pass in manually as part of the next() function
//from within the other routes. This allows us to catch and handle errors in routes.
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  var errorResponse = {};
  errorResponse.status = err.status;
  errorResponse.message = err.message;
  res.json(errorResponse);
});



app.listen(process.env.PORT || 4000, function () {
  console.log('Express app listening on port 3000');
})
