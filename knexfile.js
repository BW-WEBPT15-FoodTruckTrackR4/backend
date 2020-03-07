// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection:'postgres://yvwlnpvrhdgipx:848cbce9bcef702f9e6249ec1ae63030f29affd1d6efd3c5b7d91e7877ead0bd@ec2-35-168-54-239.compute-1.amazonaws.com:5432/dducu3uujr8iko',
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    useNullAsDefault: true
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
}