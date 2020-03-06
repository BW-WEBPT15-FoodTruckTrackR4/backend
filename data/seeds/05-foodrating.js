
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('customerFoodRating').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('customerFoodRating').insert([
        {id: 1, foodRating: 4},
        {id: 2, foodRating: 4},
        {id: 3, foodRating: 5}
      ]);
    });
};
