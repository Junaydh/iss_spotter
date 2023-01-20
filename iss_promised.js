const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIp = function(body) {
  return request(`http://ipwho.is/${JSON.parse(body).ip}?fields=latitude,longitude`);
};

const fetchISSFlyOverTimes = function(body) {
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${JSON.parse(body).latitude}&lon=${JSON.parse(body).longitude}`);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIp)
    .then(fetchISSFlyOverTimes)
    .then(body => {
      const { response } = JSON.parse(body);
      return response;
    });
};

const printFlyovers = function(flyovers) {
  for (const pass of flyovers) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
module.exports = {nextISSTimesForMyLocation, printFlyovers};