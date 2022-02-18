/* COLLECT ALL THE SEED FILES */
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.info('--------------');
  await seedUsers();
  console.info('--------------');

  process.exit(0);
};

seedAll();
