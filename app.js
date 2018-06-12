var express = require('express');
var path = require('path');
var jade = require('jade');
var bodyParser = require('body-parser');
var logger = require('morgan');
var routes = require('./routes/index');
var goods = require('./routes/goods');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/images',express.static(path.join(__dirname, 'public/images')));
app.use('/slaider',express.static(path.join(__dirname, 'public/images/slaider')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/index', routes);
app.use('/', goods);
app.use('/goods', goods);





// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});*/

// error handler
/*app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('layout/error');
});*/

app.listen(3012, function() {
    console.log("API app started");
});
module.exports = app;