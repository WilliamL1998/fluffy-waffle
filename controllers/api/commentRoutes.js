const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Comment.findAll()
        .then(data => res.json(data))
        .catch(err => {
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    Comment.create({
        commentText: req.body.commentText,
        user_id: req.session.user_id,
        post_id: req.body.post_id
    })
        .then(data => res.json(data))
        .catch(err => {
            res.status(400).json(err);
        });
});

router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'No comment found with this id!' });
                return;
            }
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;