
exports.seed =  
  function(knex) {
  // Deletes ALL existing entries
  return knex('diners').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('diners').insert([
        {username: 'foodiefan1', password: '$2a$09$ccaVao8BcPQtDoicXE5Y1etsbDuarV.E4.LS0oxntO89RwdH3j5Q6', currentLocation: 'Phoenix, AZ', favoriteTrucks: ["Joe's Tacos", "The Gorilla Cheese Truck", "Taco Toppers"]},
        {username: 'foodskills4', password: '$2a$09$eBqhxncQhLtxd0Mx7TUAUuN1rBZA3LFMrs2KKDGqbLVe5RDjEc7j6', currentLocation: 'Seattle, WA', favoriteTrucks: ["Yumbit", "Samurai Noodle Food Truck", "Grumpys Food Truck"]},
        {username: 'ilovefood36', password: '$2a$09$tCJK6noDBxbZN1aLD3iYqOhxV9nL3Dp3pe2XxQcHGAKX2ww9ZdFvy', currentLocation: 'Chicago, IL', favoriteTrucks: ["Chicago Lunchbox", "Flash Taco Food Truck"]}
      ]);
    })
  }
    