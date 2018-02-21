"use strict";
var _this = this;
var tslib_1 = require("tslib");
var express = require("express");
var router = express.Router();
router.all('/', function (req, res) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var farFuture;
    return tslib_1.__generator(this, function (_a) {
        console.log(req.session);
        req.session['page_views'] = (req.session['page_views'] || 0) + 1;
        req.session['user_id'] = Math.round((new Date()).getTime() / 1000);
        console.log('Cookies: ');
        console.log(req.cookies);
        console.log('Signed Cookies: ');
        console.log(req.signedCookies);
        farFuture = new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 365 * 10));
        res.cookie('test_val_1', 'abc', { signed: false, expires: farFuture });
        res.cookie('test_val_2', '123', { signed: true, expires: farFuture });
        res.render('default', { title: 'Test App' });
        return [2 /*return*/];
    });
}); });
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlCQWdDZ0I7O0FBaENoQixpQ0FBbUM7QUFHbkMsSUFBTSxNQUFNLEdBQWtCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUUvQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFPLEdBQVcsRUFBRSxHQUFZOzs7UUFFNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFekIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pFLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUVuRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQVMzQixTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxHQUFHLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV4RSxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO1FBQ3JFLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFFcEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQzs7O0tBQ2hELENBQUMsQ0FBQztBQUVILGlCQUFTLE1BQU0sQ0FBQyJ9