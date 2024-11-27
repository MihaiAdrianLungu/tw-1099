const express = require('express');
const bcrypt = require('bcrypt');
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

        const user = await User.findByPk(id, {
            attributes: {
                exclude: ['password']
            }
        });

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
        const foundUser = await User.findOne({
            where: {
                username: req.body.username
            }
        })

        if (foundUser) {
            return res.status(400).json({message: "User already exists"})
        }

        const salt = bcrypt.genSalt(10);
        const hashedPassword =  bcrypt.hashSync(req.body.password, salt);

        const newUser = await User.create({
            ...req.body,
            password: hashedPassword
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message})
    }
})

router.put('/:id', async function(req, res) {
    try {
        const id = req.params.id;

        const user = await User.findByPk(id);

        if(!user) {
            return res.status(404).json({error: 'User not found'});
        }

        const updatedUser = await user.update({
            ...req.body
        })

        delete updatedUser.dataValues.password;

        res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message})
    }
})

router.delete('/:id', async function(req, res) {
    try {
        const id = req.params.id;

        const user = await User.findByPk(id);

        if(!user) {
            return res.status(404).json({error: 'User not found'});
        }

        await user.destroy();

        res.status(200).json({message: 'User deleted sucessfully'});
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message})
    }
})

module.exports = router;