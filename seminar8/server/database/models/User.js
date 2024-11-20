const { DataTypes } = require('sequelize');
const { sequelize } = require('../server');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: {
        type: DataTypes.STRING,
        values: ['user', 'admin', 'tester'],
        validate: {
            isIn: [['user', 'admin', 'tester']]
        }
    }
}, {
    timestamps: false
})

module.exports = User