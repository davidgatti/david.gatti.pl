var path = require('path');
var logger = require('morgan');
var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var users = require('./routes/users');

var app = express();

if (app.get('env') !== 'production') {

  //
  //  expose node_modules to client app
  //
  app.use(express.static(__dirname + "/node_modules"));
  app.use(express.static(__dirname + "/bower_components"));
}

//npm run startapp.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app')));

app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {

  var err = new Error('Not Found');
  err.status = 404;
  next(err);

});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development')
{
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {

  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });

});


module.exports = app;
