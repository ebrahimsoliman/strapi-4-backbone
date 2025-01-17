module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 6603),
      database: env('DATABASE_NAME', 'learn'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'example'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
