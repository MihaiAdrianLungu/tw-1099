const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../database/models/User');
const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({
            where: {
                username: username
            }
        })

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found", data: {} });
        }

        const isValidPassword = bcrypt.compareSync(password, user.dataValues.password);

        if (!isValidPassword) {
            return res.status(400).json({ success: false, message: "Invalid password", data: {} });
        }

        const token = jwt.sign({ id: user.dataValues.id }, process.env.TOKEN_SECRET, {
            expiresIn: '1h'
        })

        return res.status(200).json({ success: true, message: "User logged in", data: { token } });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
})

module.exports = router;