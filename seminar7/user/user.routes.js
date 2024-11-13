const express = require("express");
const users = require('./users');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(users);
})

module.exports = router;