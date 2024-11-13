const express = require("express");
const users = require('./users');
const router = express.Router();

router.get('/', (req, res) => {
    // const name = req.query.name;
    // const age = req.query.age;
    const { name, age } = req.query;
    let filteredUsers = [...users];

    if (name) {
        filteredUsers = filteredUsers.filter(user => user.name.toLowerCase().includes(name.toLowerCase()))
    }

    if (age && !isNaN(age)) {
        filteredUsers = filteredUsers.filter(user => user.age == Number(age));
    }

    res.status(200).json(filteredUsers);
})

router.get('/:id', (req, res) => {
    try {
        const id = req.params.id;

        if (isNaN(id)) {
            throw new Error('not a number');
        }

        const user = users.find(user => user.id === Number(id));

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: 'User not found' })
    }
})

router.post('/', (req, res) => {
    const body = req.body;

    const newUser = {
        id: users.length + 1,
        ...body,
    }

    users.push(newUser);

    res.status(201).json(newUser);
})

module.exports = router;