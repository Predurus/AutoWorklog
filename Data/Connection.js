const {Sequelize} = require('sequelize');
let path = require('path');

module.exports =  new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '../Database/Worklog.sqlite')
});