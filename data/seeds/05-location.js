
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('location').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('location').insert([
        {location: 'Phoenix, AZ', departuretime: '13:00', nextLocation: 'Los Angeles, CA', next_id: '1'},
        {location: 'Los Angeles, CA', departuretime: '18:00', nextLocation: 'Seattle, WA', next_id: '2'},
        {location: 'Seattle, WA', departuretime: '23:00', nextLocation: 'Chicago, IL', next_id: '3'}
      ]);
    });
};
