const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('shortcode', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        shortcode: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING
        },
        url : {
            allowNull: false,
            type: DataTypes.STRING
        },startDate: {
            defaultValue: Date.now(),
            type: DataTypes.DATE
        } 
    });
}