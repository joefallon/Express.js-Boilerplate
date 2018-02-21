"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var cookieSession = require("cookie-session");
var timeout = require("connect-timeout");
var config = require("./config/main_config");
var app = express();
// app.use(timeout(1));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.use(function (req: Request, res: Response, next: NextFunction) {
//     res.set(1);
//     next();
// });
// body parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(haltOnTimedout);
app.use(cookieParser('keyboard cat'));
app.use(cookieSession({
    name: 'session',
    keys: ['keyboard cat'],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
// app.use(haltOnTimedout);
// use the proxy's (i.e. nginx) IP address.
// https://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', true);
// Error Handlers
if (app.get('env') == 'development') {
    // Extra console request logging.
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
app.use(require('./routes/index'));
//
// function haltOnTimedout (req, res, next) {
//     if(!req.timedout) {
//         next();
//     }
//     else
//     {
//         console.log('timed out...');
//     }
// }
// Catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// app.set('timeout', 1);
app.use(timeout(1));
function haltOnTimedout(req, res, next) {
    if (!req.timedout)
        next();
}
app.listen(config.port, '127.0.0.1');
console.log('App Environment: ' + app.get('env'));
console.log("Listening on 127.0.0.1:" + config.port);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFtQztBQUNuQywyQkFBNkI7QUFDN0Isd0NBQTBDO0FBQzFDLDRDQUErQztBQUMvQyw4Q0FBaUQ7QUFHakQseUNBQTJDO0FBRTNDLDZDQUFnRDtBQUVoRCxJQUFNLEdBQUcsR0FBb0IsT0FBTyxFQUFFLENBQUM7QUFFdkMsdUJBQXVCO0FBR3ZCLG9CQUFvQjtBQUNwQixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ2hELEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRTlCLHVFQUF1RTtBQUN2RSxrQkFBa0I7QUFDbEIsY0FBYztBQUNkLE1BQU07QUFFTixvQkFBb0I7QUFDcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3BELDJCQUEyQjtBQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ2xCLElBQUksRUFBRSxTQUFTO0lBQ2YsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDO0lBRXRCLGlCQUFpQjtJQUNqQixNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVc7Q0FDMUMsQ0FBQyxDQUFDLENBQUM7QUFDSiwyQkFBMkI7QUFFM0IsMkNBQTJDO0FBQzNDLHFEQUFxRDtBQUNyRCxHQUFHLENBQUMsR0FBRyxDQUFD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