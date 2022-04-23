const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('statistic', {
        redirectCount: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        lastSeenDate : {
            defaultValue: Date.now(),
            type: DataTypes.DATE
        } 
    });
}