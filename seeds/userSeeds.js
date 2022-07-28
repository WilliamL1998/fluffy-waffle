const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const users = [
    {
        username: 'williaml',
        email: 'williamliao1998@gmail.com',
        password: 'password123'
    },
    {
        username: 'sammyc',
        email: 'sammyc@gmail.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(users, { individualHooks: true });

module.exports = seedUsers;