const express = require('express');
const router = express.Router();

let posts = [
    { 'id': 1, 'type': 'posting' },
    { 'id': 2, 'type': 'getting' },
    { 'id': 3, 'type': 'updating' },
    { 'id': 4, 'type': 'deleting' }
];

router.get('/', (req, res, next) => {
    res.status(200).json(posts);
});

router.get('/:id', (req, res, next) => {
    let id = req.params.id;
    let getPost = posts.find(a => a.id == id);
    res.status(200).json(getPost);
});

router.post('/', (req, res, next) => {
    let newPost = req.body;
    posts.push(newPost);
    res.status(200).json(posts);
})

router.patch('/:id', (req, res, next) => {
    let id = req.params.id;
    let updatePost = posts.find(a => a.id == id);
    if (updatePost) {
        updatePost.type = req.body.type;
        res.status(200).json(posts);
    } else {
        res.status(200).json({ msg: 'This Id does not exist' });
    }
});

module.exports = router;