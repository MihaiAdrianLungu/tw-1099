const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/database.sqlite',
    logging: false
})

sequelize.sync()
    .then(() => {
        console.log('Models successfully (re)created');
    })
    .catch((error) => {
        console.warn(error)
    })

module.exports = {
    sequelize
}