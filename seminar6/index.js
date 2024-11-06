// const number = require("./constants");
// import { number } from "./constants.js";
// console.log(number);

const express = require('express');
const cors = require('cors');
const users = require('./users');
const app = express();

const PORT = 3000;

app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/users', (req, res) => {
    res.status(200).json(users);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
});