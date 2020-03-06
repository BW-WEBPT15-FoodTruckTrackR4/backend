
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('search').truncate()
  //   .then(function () {
      // Inserts seed entries
      return knex('search').insert([
        {cuisineType: 'Mexican', customerRatingAvg: '5', radSize: '15 miles'},
        {cuisineType: 'American', customerRatingAvg: '5', radSize: '5 miles'},
        {cuisineType: 'Chinese', customerRatingAvg: '4', radSize: '20 miles'}
      ]);
    // });
};
