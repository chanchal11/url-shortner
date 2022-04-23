const { models } = require('../../data');
const sequelize = require('../../data');
const getStatistics = async ( shortcode ) => {
    try {
        const urlData = await models.shortcode.findOne({ where: { shortcode } });
        if(urlData){
            const statistics = await models.statistic.findOne({ where: { id: urlData.id } });
            if(statistics)
                return { data: {startDate : urlData.startDate, lastSeenDate: statistics.lastSeenDate, redirectCount: statistics.redirectCount}, error: null };
            else 
            return { data: {startDate : urlData.startDate, lastSeenDate: null, redirectCount: null}, error: null };
        }else {
            throw new Error("SHORTCODE_NOT_FOUND");
        }
    } catch (error) {
        return { data : null, error: error.message };
    }
}

const updateStatistics = async ( shortcode ) => {
    // we need to improve this method so that it can handles multiple requests for update
    const urlData = await models.shortcode.findOne({where: { shortcode } });
    const { id } = urlData;
    const stats = await models.statistic.findOne({ where : { id } });
    if(stats)
        await models.statistic.create({ redirectCount: 1, id , lastSeenDate: Date.now() });
    else
        await models.statistic.update({ redirectCount: stats.redirectCount + 1, lastSeenDate: Date.now() } , { where : { id } });
    // console.log(">>>>>>>>> ",stats.redirectCount + 1);
}

module.exports = { getStatistics, updateStatistics };