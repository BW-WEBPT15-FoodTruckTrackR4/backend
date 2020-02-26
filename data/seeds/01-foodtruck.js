
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trucks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('trucks').insert([
        {imageOfTruck: 'https://rh-vendoradmin.s3.amazonaws.com/trucks/original/22326/5bfc55cc-fad4-4ab2-b0a1-692346204482.jpg', cuisineType: 'Mexican', customerRatingAvg: 4.7, menu_id: 1, location_id: 1},
        {imageOfTruck: 'https://gorillacheesenyc.com/wp-content/uploads/photo-gallery/Image-2.jpg', cuisineType: 'American', customerRatingAvg: 4.7, menu_id: 1, location_id: 1},
        {imageOfTruck: 'https://s3-media0.fl.yelpcdn.com/bphoto/RRAbz-xm71CL_ysKNFNujA/o.jpg', cuisineType: 'Chinese', customerRatingAvg: 4.4, menu_id: 1, location_id: 1}
      ]);
    });
};
