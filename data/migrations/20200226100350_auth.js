
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
      diners.string('favoriteTrucks')
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
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('diners')
  .dropTableIfExists('operators')
  
};
