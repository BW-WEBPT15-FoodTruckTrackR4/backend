// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://host.docker.internal:5432/foodtrucks'
    ,
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    // pool: {
    //   afterCreate: (conn, done) => {
    //     conn.run('PRAGMA foreign_keys = ON', done);
    //   },
    // },
  },
}