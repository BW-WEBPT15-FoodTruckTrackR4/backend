
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('menus').truncate()
  //   .then(function () {
      // Inserts seed entries
      return knex('menus').insert([
        {
          id: 1,
          itemName: 'Tacos', 
          itemDescription: 'Classic tacos with cheese, sour cream, salsa and lots of beef', 
          itemPhotos: 'https://www.thespruceeats.com/thmb/uqB61QlpzfPZAtMJ-4qDvdTtlVo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Softbeeftacos-GettyImages-614313140-593df4533df78c537b375d6d.jpg', 
          customerRatings: '4, 5, 4',
          customerRatingAvg: 4.6
        },
        {
          id: 2,
          itemName: 'Bacon Burgers', 
          itemDescription: 'Classic Bacon Burger with ketchup, mustard, bacon, onions, lettuce, tomatoes, and American cheese ', 
          itemPhotos: 'https://simply-delicious-food.com/wp-content/uploads/2015/07/Bacon-and-cheese-burgers-2.jpg', 
          customerRatings: '4, 4, 5',
          customerRatingAvg: '4.4'
        },
        {
          id: 3,
          itemName: 'Teriyaki Chicken with Brown Rice', 
          itemDescription: 'Savvy-favored Teriyaki Chicken served with whole-grain brown rice', 
          itemPhotos: 'https://cookingmadehealthy.com/wp-content/uploads/2018/05/Skinny-Teriyaki-Chicken.jpg', 
          customerRatings: '5, 5, 4',
          customerRatingAvg: 4.8
        }
      ]);
    // });
};
