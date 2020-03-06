/* 
NOTE: Foreign keys need to be in correct order 
from highest to lowest!
*/
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('nextLocation').truncate()
  //   .then(function () {
      // Inserts seed entries
      return knex('nextLocation').insert([
        {
          id: 1,
          location: 'Los Angeles, CA', 
          arrivalTime: '20:00', 
          departureTime: '08:00'
        },
        {
          id: 2,
          location: 'Seattle, WA', 
          arrivalTime: '14:00', 
          departureTime: '18:00'
        },
        {
          id: 3,
          location: 'Chicago, IL', 
          arrivalTime: '15:00', 
          departureTime: '23:00'
        }
      ]);
    }
    // );
// };
