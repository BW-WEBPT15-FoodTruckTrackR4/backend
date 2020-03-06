
exports.up = function(knex) {
  return knex.schema.createTable('diners', diners => {
      diners.increments();
      diners.string('username')
      .unique()
      .notNullable()
      diners.string('password')
      .notNullable()
      diners.string('currentLocation')
      .notNullable()
      diners.integer('favoriteTruck_id')
      .unsigned()
      .notNullable()
      .references('favfoodtrucks.id')
      .onDelete('CASCADE')
    .onUpdate('CASCADE')
  })
  .createTable('operators', operators => {
    operators.increments();
    operators.string('username')
    .unique()
    .notNullable()
    operators.string('password')
    .notNullable()
    operators.integer('trucksOwned')
    .notNullable()
})
.createTable('favfoodtrucks', trucks => {
  trucks.increments();
  trucks.string('truckName')
  .notNullable()
})
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('diners')
  .dropTableIfExists('operators')
  .dropTableIfExists('favfoodtrucks')
  
};
