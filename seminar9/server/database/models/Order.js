const { sequelize } = require("../server");
const { DataTypes } = require('sequelize');

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status: DataTypes.STRING,
    value: DataTypes.INTEGER
})

module.exports = Order