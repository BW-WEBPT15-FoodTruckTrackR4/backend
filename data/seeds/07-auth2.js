
exports.seed =  
function(knex) {
  // Deletes ALL existing entries
  // return knex('operators').truncate()
  //   .then(function () {
      // Inserts seed entries
      return knex('operators').insert([
        {username: 'operator12', password: '$2a$09$yXw7HtDBaMYKIGz/VAQq4Oe3G2Fggq0Bbw0CWvz0eJ9gSpoM2JdfO', trucksOwned: 3}, //foodtrucks
        {username: 'foodtrucker9', password: '$2a$09$vynjCl1S7TpKbK1m6ZS8tuT.jr1nithQ.VqL3sh1esruE0vln9Dee', trucksOwned: 5}, // ilovefood
        {username: 'winningwithfood', password: '$2a$09$kP1HeMBLfZ8/vawvCgH.WeF2bLmXvdpFjJH32KDiT0L6vYsRmlozG', trucksOwned: 2} // foodisgood
      ]);
    // });
  }
