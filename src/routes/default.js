"use strict";
var _this = this;
var tslib_1 = require("tslib");
var express = require("express");
var router = express.Router();
router.all('/', function (req, res) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var farFuture;
    return tslib_1.__generator(this, function (_a) {
        // throw new Error('this is my error');
        console.log(req.session);
        req.session['page_views'] = (req.session['page_views'] || 0) + 1;
        req.session['user_id'] = Math.round((new Date()).getTime() / 1000);
        console.log('Cookies: ');
        console.log(req.cookies);
        console.log('Signed Cookies: ');
        console.log(req.signedCookies);
        // console.log('Request Headers:');
        // console.log(req.headers);
        // res.signedCookies['test_val'] = 123;
        // res.cookies['test_val'] = 'abc';
        res.clearCookie('test_val1');
        res.clearCookie('test_val2');
        res.clearCookie('_csrf');
        res.clearCookie('test_val_1');
        res.clearCookie('test_val_2');
        res.clearCookie('test_cookie');
        console.log('Session: ');
        console.log(req.session);
        farFuture = new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 365 * 10));
        // res.cookie('test_val_1', 'abc', {signed: false, expires: farFuture});
        // res.cookie('test_cookie', 'test-abc', {secure: false});
        // res.cookie('test_val_2', '123', {signed: true, expires: farFuture});
        res.render('default', { title: 'Test App' });
        return [2 /*return*/];
    });
}); });
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlCQStDZ0I7O0FBL0NoQixpQ0FBbUM7QUFHbkMsSUFBTSxNQUFNLEdBQWtCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUUvQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFPLEdBQVcsRUFBRSxHQUFZOzs7UUFFNUMsdUNBQXVDO1FBRXZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXpCLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRSxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFFbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFL0IsbUNBQW1DO1FBQ25DLDRCQUE0QjtRQUU1Qix1Q0FBdUM7UUFDdkMsbUNBQW1DO1FBRW5DLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0IsR0FBRyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QixHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5QixHQUFHLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRS9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFLckIsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsR0FBRyxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFeEUsd0VBQXdFO1FBQ3hFLDBEQUEwRDtRQUMxRCx1RUFBdUU7UUFFdkUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQzs7O0tBQ2hELENBQUMsQ0FBQztBQUVILGlCQUFTLE1BQU0sQ0FBQyJ9