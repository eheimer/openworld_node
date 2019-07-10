// var supertest = require('supertest');

// describe('ViewBattleController', () => {

//   describe('/', () => {
//     it('should redirect to /battle/{id}', async () => {
//       var result = await supertest(sails.hooks.http.app).get('/')
//         .expect(302);
//       var locParts = result.headers.location.split('/');
//       assert(locParts[0] === '' && locParts[1] === 'battle', '/battle/');
//       assert(!isNaN(parseFloat(locParts[2])) && isFinite(locParts[2]), '{id}');
//       var battleId = locParts[2];

//       describe('ViewBattleController', () => {
//         describe('/battle/' + battleId, () => {
//           it('should return 200', (done) => {
//             supertest(sails.hooks.http.app).get('/battle/' + battleId)
//               .expect(200, done);
//           });
//         });
//       });
//     });
//   });

// });
