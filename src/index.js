"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var express = require("express");
var path = require("path");
var cookieSession = require("cookie-session");
var config = require("./config/main_config");
var app = express();
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
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
// use the proxy's (i.e. nginx) IP address
// https://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', true);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUEwQztBQUMxQyw0Q0FBOEM7QUFDOUMsaUNBQW1DO0FBQ25DLDJCQUE2QjtBQUU3Qiw4Q0FBaUQ7QUFFakQsNkNBQWdEO0FBRWhELElBQU0sR0FBRyxHQUFvQixPQUFPLEVBQUUsQ0FBQztBQUV2QywwQkFBMEI7QUFDMUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNoRCxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUU5QixvQkFBb0I7QUFDcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3BELEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQzVDLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ2xCLElBQUksRUFBRSxTQUFTO0lBQ2YsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUM1QixNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFHLFdBQVc7Q0FDNUMsQ0FBQyxDQUFDLENBQUM7QUFFSiwwQ0FBMEM7QUFDMUMscURBQXFEO0FBQ3JELEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRTdCLGlCQUFpQjtBQUNqQixFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFFakMsZ0NBQWdDO0lBQ2hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBUyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1FBQzVELE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQUM7SUFFSCwyREFBMkQ7SUFDM0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQVUsRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1FBQ2hFLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLDZEQUE2RDtRQUM3RCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsUUFBUSxFQUFFLEVBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBQyxFQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRCxJQUFJLENBQUMsQ0FBQztJQUNGLDhEQUE4RDtJQUM5RCxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBVSxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7UUFDaEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsZ0NBQWdDO0FBQ2hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztBQUVuQyx5Q0FBeUM7QUFDekMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQVcsRUFBRSxHQUFZLEVBQUUsSUFBaUI7SUFDakQsSUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDZCxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBb0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUcsQ0FBQyxDQUFDO0FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWdCLE1BQU0sQ0FBQyxTQUFTLFNBQUksTUFBTSxDQUFDLElBQU0sQ0FBQyxDQUFDIn0=