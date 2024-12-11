const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const User = require('./database/models/User');
const Order = require('./database/models/Order');
const usersRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const orderRoutes = require('./routes/order.routes');
const { verifyToken } = require('./utils');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;

User.hasMany(Order, { foreignKey: 'userId' });

app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', usersRoutes);
app.use('/orders', verifyToken, orderRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
});