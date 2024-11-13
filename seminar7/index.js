const express = require('express');
const cors = require('cors');
const usersRoutes = require('./user/user.routes');
const dotenv = require('dotenv');
const path = require('path');
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;
 
app.use(express.static(path.join(__dirname, 'client')));
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/users', usersRoutes);

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
});