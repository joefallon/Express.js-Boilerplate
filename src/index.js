"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var express = require("express");
var path = require("path");
var cookieSession = require("cookie-session");
var config = require("./config/main_config");
var app = express();
app.disable('x-powered-by');
// View Engine Setup - EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Body Parser Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(config.cookie_secret));
app.use(cookieSession({
    name: 'session',
    keys: [config.cookie_secret],
    maxAge: 0,
    httpOnly: true
}));
// use the proxy's (i.e. nginx) IP address
// https://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', true);
app.use(csrf({ cookie: true }));
app.use(function (req, res, next) {
    res.locals.csrftoken = req.csrfToken();
    next();
});
// Error Handlers
if (app.get('env') == 'development') {
    // extra console request logging
    app.use(function (req, res, next) {
        console.log();
        console.log('Request Body:');
        console.log(req.body);
        console.log('Request Query:');
        console.log(req.query);
        next();
    });
    // Development Error Handler - stack traces will be printed
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(err['status'] || 500);
        // res.render('error', { message: err.message, error: err });
        res.json({ 'errors': { message: err.message, error: err } });
    });
}
else {
    // Production Error Handler - stack traces will NOT be printed
    app.use(function (err, req, res, next) {
        res.status(err['status'] || 500);
        return;
    });
}
// import the application routes
app.use(require('./routes/index'));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
app.listen(config.port, config.listen_ip);
console.log("App Environment: " + app.get('env'));
console.log("Listening on " + config.listen_ip + ":" + config.port);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUEwQztBQUMxQyw0Q0FBOEM7QUFDOUMsNEJBQThCO0FBQzlCLGlDQUFtQztBQUNuQywyQkFBNkI7QUFFN0IsOENBQWlEO0FBRWpELDZDQUFnRDtBQUVoRCxJQUFNLEdBQUcsR0FBb0IsT0FBTyxFQUFFLENBQUM7QUFDdkMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUU1QiwwQkFBMEI7QUFDMUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNoRCxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUU5QixvQkFBb0I7QUFDcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3BELEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQzVDLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ2xCLElBQUksRUFBRSxTQUFTO0lBQ2YsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUM1QixNQUFNLEVBQUUsQ0FBQztJQUNULFFBQVEsRUFBRSxJQUFJO0NBQ2pCLENBQUMsQ0FBQyxDQUFDO0FBRUosMENBQTBDO0FBQzFDLHFEQUFxRDtBQUNyRCxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUU3QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUks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