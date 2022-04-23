const { Sequelize } = require('sequelize');
const { applyAssociation } = require('./association');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite',
    logQueryParameters: true,
    benchmark: true
});

const modelDefiners = [
    require('./models/shortcode.model'),
    require('./models/statistics.model')
];

for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

applyAssociation(sequelize);

sequelize.sync();

module.exports = sequelize;