
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('location').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('location').insert([
        { 
          id: 1,
          location: 'Phoenix, AZ', 
          departureTime: '13:00', 
          nextLocation: 'Los Angeles, CA', 
          next_id: 1
        },
        {
          id: 2,
          location: 'Los Angeles, CA', 
          departureTime: '18:00', 
          nextLocation: 'Seattle, WA', 
          next_id: 2
        },
        {
          id: 3,
          location: 'Seattle, WA', 
          departureTime: '23:00', 
          nextLocation: 'Chicago, IL',
           next_id: 3
          }
      ]);
    });
};
