
exports.up = function(knex) {
  return knex.schema
  .createTable('trucks', truck => {
    truck.increments();
    truck.string('imageOfTruck')
    .notNullable()
    truck.string('cuisineType')
    .notNullable()
    truck.string('customerRatings')
    truck.string('customerRatingAvg')
    truck.integer('menu_id')
    .unsigned()
    .references('id')
    .inTable('menus')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
    truck.integer('location_id')
    .unsigned()
    .references('id')
    .inTable('location')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
  })
  .createTable('menus', menu => {
      menu.increments();
      menu.string('itemName')
      .notNullable()
      menu.string('itemDescription')
      .notNullable()
      menu.string('itemPhotos')
      .notNullable()
      menu.string('customerRatings')
      menu.string('customerRatingAvg')
  })
  .createTable('search', search => {
      search.increments()
      search.string('cuisineType')
      .notNullable()
      search.string('customerRatingAvg')
      .notNullable()
      search.string('radSize')
      .notNullable()
  })
  .createTable('location', location => {
      location.increments()
      location.string('location')
      .notNullable()
      location.datetime('departureTime')
      location.string('nextLocation')
      location.integer('next_id')
      .unsigned()
      .references('id')
      .inTable('nextLocation')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
  .createTable('nextLocation', next => {
      next.increments();
      next.string('location')
      .notNullable()
      next.datetime('arrivalTime')
      next.datetime('departureTime')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('trucks')
  .dropTableIfExists('menus')
  .dropTableIfExists('search')
  .dropTableIfExists('location')
  .dropTableIfExists('nextLocation')

};
