function applyAssociation(sequelize) {
    const { shortcode, statistic } = sequelize.models;
     
    statistic.belongsTo(shortcode);
}

module.exports = { applyAssociation };