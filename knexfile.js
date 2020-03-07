// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection:'postgres://localhost/foodtrucks',
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    useNullAsDefault: true
  },
}