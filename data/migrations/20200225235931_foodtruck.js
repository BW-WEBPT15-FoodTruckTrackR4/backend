
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('search', search => {
      search.increments()
      search.string('cuisineType')
      .notNullable()
      search.string('customerRatingAvg')
      .notNullable()
      search.string('radSize')
      .notNullable()
  })
  .createTable('nextLocation', next => {
      next.increments();
      next.string('location')
      .notNullable()
      next.time('arrivalTime')
      next.time('departureTime')
  })
  .createTable('menus', menu => {
    menu.increments();
    menu.string('itemName')
    .notNullable()
    menu.string('itemDescription')
    .notNullable()
    menu.string('itemPhotos')
    .notNullable()
    menu.specificType('foodRating', 'INT ARRAY')
    menu.string('customerRatingAvg')
})

.createTable('location', location => {
  location.increments()
  location.string('location')
  .notNullable()
  location.time('departureTime')
  location.string('nextLocation')
  location.integer('next_id')
  .unsigned()
  .references('nextLocation.id')
  // .inTable('nextLocation')
  .onDelete('CASCADE')
  .onUpdate('CASCADE')
})

  .createTable('trucks', truck => {
    truck.increments();
    truck.string('imageOfTruck')
    .notNullable()
    truck.string('cuisineType')
    .notNullable()
    truck.specificType('rating', 'INT ARRAY')
    truck.string('customerRatingAvg')
    truck.integer('menu_id')
    .unsigned()
    .notNullable()
    .references('menus.id')
    // .inTable('menus')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
    truck.integer('location_id')
    .unsigned()
    .references('location.id')
    // .inTable('location')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('trucks')
  .dropTableIfExists('menus')
  .dropTableIfExists('search')
  .dropTableIfExists('location')
  .dropTableIfExists('nextLocation')
  .dropTableIfExists('customerRating')
  .dropTableIfExists('customerFoodRating')

};
