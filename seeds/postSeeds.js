const { Post } = require('../models');

const posts = [
    {
        title: 'Bootstrap',
        description: 'Bootstrap allows me to quickly whip up the frontend so I can focus on the backend.',
        user_id: 1
    },
    {
        title: 'Insomnia',
        description: 'Insomnia lets me test my server endpoints in a much simpler fashion.',
        user_id: 2
    },
];

const seedPosts = () => Post.bulkCreate(posts);

module.exports = seedPosts;