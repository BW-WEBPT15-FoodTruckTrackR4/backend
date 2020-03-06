
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('trucks', truck => {
    truck.increments();
    truck.string('imageOfTruck')
    .notNullable()
    truck.string('cuisineType')
    .notNullable()
    truck.integer('rating_id')
    .unsigned()
    .notNullable()
    .references('customerRating.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
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
    .notNullable()
    .references('location.id')
    // .inTable('location')
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
      menu.integer('foodRating_id')
      .unsigned()
      .notNullable()
      .references('customerFoodRating.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      menu.string('customerRatingAvg')
  })
  .createTable('customerRating', rating => {
    rating.increments()
    rating.integer('rating')
})
.createTable('customerFoodRating', foodrating => {
  foodrating.increments()
  foodrating.integer('foodRating')
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
      location.time('departureTime')
      location.string('nextLocation')
      location.integer('next_id')
      .unsigned()
      .notNullable()
      .references('nextLocation.id')
      // .inTable('nextLocation')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
  .createTable('nextLocation', next => {
      next.increments();
      next.string('location')
      .notNullable()
      next.time('arrivalTime')
      next.time('departureTime')
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
