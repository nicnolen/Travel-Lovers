/* COLLECT ALL THE SEED FILES */
const seedUsers = require('./user-seeds');
const seedPlaces = require('./place-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.info('--------------');
  await seedUsers();
  console.info('--------------');
  await seedPlaces();
  console.info('--------------');

  process.exit(0);
};

seedAll();
