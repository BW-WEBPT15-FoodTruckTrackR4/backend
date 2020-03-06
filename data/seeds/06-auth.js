
exports.seed =  
  function(knex) {
  // Deletes ALL existing entries
  // return knex('diners').truncate()
  //   .then(function () {
      // Inserts seed entries
      return knex('diners').insert([
        {username: 'foodiefan1', password: '$2a$09$fMUtRzYrLdRrDFHrRq7Ix.UkOcFxlkCENC0vprxMdYNOvp4jILiTy', currentLocation: 'Phoenix, AZ', favoriteTruck_id: 1}, // ilovefood
        {username: 'foodskills4', password: '$2a$09$eBqhxncQhLtxd0Mx7TUAUuN1rBZA3LFMrs2KKDGqbLVe5RDjEc7j6', currentLocation: 'Seattle, WA', favoriteTruck_id: 2},
        {username: 'ilovefood36', password: '$2a$09$tCJK6noDBxbZN1aLD3iYqOhxV9nL3Dp3pe2XxQcHGAKX2ww9ZdFvy', currentLocation: 'Chicago, IL', favoriteTruck_id: 3}
      ]);
    // })
  }
    