const express = require('express');
const User = require('../database/models/User');
const router = express.Router();

router.get('/', async function(req, res) {
    try {
        const users = await User.findAll();

        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message})
    }
})

router.get('/:id', async function(req, res) {
    try {
        const id = req.params.id;

        const user = await User.findByPk(id);

        if(!user) {
            return res.status(404).json({error: 'User not found'});
        }

        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message})
    }
})

router.post('/', async function(req, res) {
    try {
        const newUser = await User.create(req.body);

        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message})
    }
})

module.exports = router;