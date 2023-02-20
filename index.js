const fs = require("fs");
let logFormat = `{{timestamp}} {{route}} {{responseCode}} {{responseTime}}`;
const routes = [
  "GET /consumptionPageData1",
  "GET /v1/dashboard/aasdas-dasdasd81823jas-asdas",
  "GET /m2/analytic/v2",
  "POST /m1/analytics/v2/site-consumption",
  "GET /m1/site/aasdas-dasdasd81823jas-asdas/getMonthlyConsumption",
  "GET /m1/aaa-bbb-ss-as/123/consumption",
  "GET /dashboard/getTonnageDelivery",
  "POST /m2/analytic/v2/plot/1",
  "GET /v1/component/12/recentData",
  "POST /m2/analytic/v2/presets/trh",
  "POST /m2/component/v2/trh",
  "POST /m2/data/v2/recentdata",
  "POST /m2/data/v2/devicerunminutes",
  "GET /m2/analytic/v2/runHourAnalysis",
  "GET /m2/analytic/v2/presets/pressureDropAnalysis",
  "GET /site/1234/getLastDayLoad",
  "POST /deviceData/save",
  "POST /component/filteredData",
];
const RESPONSE_CODE = [200, 201, 400, 500, 503,502,403];
const RESPONSE_TIME = [100,2000];
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
setInterval(()=>{
    let _logFmt = logFormat;
    let _route = routes[Math.floor(Math.random() * routes.length)];
    let _randomeResponseCode = RESPONSE_CODE[Math.floor(Math.random() * RESPONSE_CODE.length)];
    let _requestTime = randomInteger(RESPONSE_TIME[0],RESPONSE_TIME[1]);
    console.log(`${new Date().getTime()} ${_route} ${_randomeResponseCode} ${_requestTime}`);
},10)
