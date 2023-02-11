module.exports = {
  HOST: 'localhost',
  USER: 'postgres',
  PASSWORD: 'admin',
  DB: 'postgres',
  schema: 'main',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}
