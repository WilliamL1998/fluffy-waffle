const seedUsers = require('./userSeeds.js');
const seedPosts = require('./postSeeds.js');
const seedComments = require('./commentSeeds.js');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPosts();
    await seedComments();
    process.exit(0);
};

seedAll();