
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favfoodtrucks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('favfoodtrucks').insert([
        {id: 1, truckName: "Joe's Tacos"},
        {id: 2, truckName: "The Gorilla Cheese Truck"},
        {id: 3, truckName: 'Taco Toppers'},
        {id: 4, truckName: "Yumbit"},
        {id: 5, truckName: "Samurai Noodle Food Truck"},
        {id: 6, truckName: 'Grumpys Food Truck'},
        {id: 7, truckName: "Chicago Lunchbox"},
        {id: 8, truckName: "Flash Taco Food Truck"}
      ]);
    });
};
