
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('nextLocation').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('nextLocation').insert([
        {location: 'Los Angeles, CA', arrivalTime: '20:00', departureTime: '08:00'},
        {location: 'Seattle, WA', arrivalTime: '14:00', departureTime: '18:00'},
        {location: 'Chicago, IL', arrivalTime: '15:00', departureTime: '23:00'}
      ]);
    });
};
