
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('customerRating').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('customerRating').insert([
        {id: 1, rating: 5},
        {id: 2, rating: 5},
        {id: 3, rating: 5}
      ]);
    });
};
