const { Comment } = require('../models');

const comments = [
    {
        commentText: 'Yes, I agree.',
        user_id: 1,
        post_id: 1
    },
    {
        commentText: 'Insomnia makes troubleshooting server errors far easier!',
        user_id: 2,
        post_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(comments);

module.exports = seedComments;