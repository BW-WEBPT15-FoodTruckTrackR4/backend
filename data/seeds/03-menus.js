
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('menus').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('menus').insert([
        {itemName: 'Tacos', itemDescription: 'Classic tacos with cheese, sour cream, salsa and lots of beef', itemPhotos: 'https://www.thespruceeats.com/thmb/uqB61QlpzfPZAtMJ-4qDvdTtlVo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Softbeeftacos-GettyImages-614313140-593df4533df78c537b375d6d.jpg', customerRatingAvg: 4.6},
        {itemName: 'Bacon Burgers', itemDescription: 'Classic Bacon Burger with ketchup, mustard, bacon, onions, lettuce, tomatoes, and American cheese ', itemPhotos: 'https://simply-delicious-food.com/wp-content/uploads/2015/07/Bacon-and-cheese-burgers-2.jpg', customerRatingAvg: '4.4'},
        {itemName: 'Teriyaki Chicken with Brown Rice', itemDescription: 'Savvy-favored Teriyaki Chicken served with whole-grain brown rice', itemPhotos: 'https://cookingmadehealthy.com/wp-content/uploads/2018/05/Skinny-Teriyaki-Chicken.jpg', customerRatingAvg: 4.8}
      ]);
    });
};
