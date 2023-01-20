const {nextISSTimesForMyLocation} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIp(fetchMyIP((error, ip) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   return ip;
// }), (error, coords) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log('Success! found coords:', coords);
// })
// fetchCoordsByIp('162.245.144.188', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:' , coordinates);
// });

// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, flyovers) => {
//   if (error) {
//         console.log("It didn't work!" , error);
//         return;
//       }
    
//       console.log('It worked! Returned flyovers:' , flyovers);
// })
const printFlyovers = function(flyovers) {
  for (const pass of flyovers) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, flyovers) => {
  if (error) {
    console.log(error);
    console.log("It didn't work!", error);
    return;
  }
  printFlyovers(flyovers);
});
