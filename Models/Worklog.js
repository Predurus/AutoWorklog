const conn = require('../Data/Connection');
const {
    DataTypes
} = require('sequelize');

module.exports = conn.define('Worklog', {
    // Model attributes are defined here
    WorklogId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    User: {
        type: DataTypes.STRING,
        allowNull: false
    },
    BoardId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ProjectId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    IssueId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    StartDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    EndDate: {
        type: DataTypes.DATE
    },
    Comments: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    // Other model options go here
});