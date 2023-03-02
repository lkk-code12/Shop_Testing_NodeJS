const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({ 'message': 'This is user router' });
});

router.post('/', (req, res, next) => {
    let userData = req.body;
    res.status(200).json(userData);
});

router.route('/:id')
    .get((req, res, next) => {
        let id = req.params.id;
        res.status(200).json({ 'message': `User id is ${id}` });
    })
    .patch((req, res, next) => {
        let id = req.params.id;
        res.status(200).json(`Patch id is ${id}`);
    })
    .delete((req, res, next) => {
        let id = req.params.id;
        res.status(200).json(`Delete id is ${id}`);
    })

// router.get('/:id', (req, res, next) => {
//     let id = req.params.id;
//     res.status(200).json({ 'message': `User id is ${id}` });
// });

// router.patch('/:id', (req, res, next) => {
//     let id = req.params.id;
//     res.status(200).json(`Patch id is ${id}`);
// });

// router.delete('/:id', (req, res, next) => {
//     let id = req.params.id;
//     res.status(200).json(`Delete id is ${id}`);
// });

module.exports = router;