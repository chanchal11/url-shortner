const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('statistic', {
        redirectCount: {
            allowNull: true,
            type: DataTypes.INTEGER
        },
        startDate: {
            allowNull: false,
            type: DataTypes.DATE
        },
        lastSeenDate : {
            allowNull: true,
            type: DataTypes.DATE
        } 
    });
}