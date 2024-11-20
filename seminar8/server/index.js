const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const usersRoutes = require('./routes/user.routes');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
});