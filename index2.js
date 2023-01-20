const {nextISSTimesForMyLocation, printFlyovers} = require('./iss_promised');

nextISSTimesForMyLocation()
  .then(flyovers => {
    printFlyovers(flyovers);
  })
  .catch(error => {
    console.log('Failed due to error:', error);
  });