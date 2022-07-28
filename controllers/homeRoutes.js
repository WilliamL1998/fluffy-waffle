const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require("../models");

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/")
        return
    } else {
        res.render("login")
    }
})

router.get("signup", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/")
        return
    } else {
        res.render("signup")
    }
})

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'description',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'commentText', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(data => {
            const posts = data.map(post => post.get({ plain: true }));
            res.render('home', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'description',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'commentText', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'No post with this id' });
                return;
            }

            const post = data.get({ plain: true });

            res.render('postById', {
                post,
                loggedIn: req.session.loggedIn,

            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;