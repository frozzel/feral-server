//// create routes for user ////
const express = require('express');
const { create } = require('../controllers/user'); // import create function from user controller


const router = express.Router();

router.get('/', (req, res) => {
    res.send('User route is working');
});

router.post('/create', create); // route to create a user

module.exports = router;