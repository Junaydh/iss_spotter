const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      return callback(error, null);
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      const ip = JSON.parse(body).ip;
      callback(null, ip);
    }
  });
};

const fetchCoordsByIp = function (ip, callback) {
  request(`http://ipwho.is/${ip}?fields=latitude,longitude`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    } else {
      const coords = JSON.parse(body);
      callback(null, coords);
    }
  })
}

module.exports = {fetchMyIP, fetchCoordsByIp};