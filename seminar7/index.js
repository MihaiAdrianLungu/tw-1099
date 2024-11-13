const express = require('express');
const cors = require('cors');
const usersRoutes = require('./user/user.routes');
const app = express();

const PORT = 3000;

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));
app.use('/users', usersRoutes);

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
});