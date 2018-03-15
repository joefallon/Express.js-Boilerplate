"use strict";
var express = require("express");
var router = express.Router();
router.use('/', require('./default'));
router.use('/test', require('./test'));
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUNBQW1DO0FBRW5DLElBQU0sTUFBTSxHQUFrQixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFL0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDdEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFFdkMsaUJBQVMsTUFBTSxDQUFDIn0=