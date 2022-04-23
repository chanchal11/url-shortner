const { models } = require('../../data');
const { validateShortcodeByClient, validateURL } = require('../validation');

const getURL = async (shortcode) => {
    try {
        const urlData = await models.shortcode.findOne({ where: { shortcode } });
        if(urlData){
            return { url : urlData.url, error: null };
        }else {
            throw new Error("SHORTCODE_NOT_FOUND");
        }
    } catch (error) {
        return { url : null, error: error.message };
    }
}

const generateShortCode = () => {

}

const createShortcode = async ({ url, shortcode}) => {
    try {
        if(!validateShortcodeByClient(shortcode))
            throw new Error('INVALID_SHORTCODE');
        if(!validateURL(url))
            throw new Error('INVALID_URL');
        const urlData = await models.shortcode.findOne({ where: { shortcode } });
        if(urlData){
            throw new Error("SHORTCODE_ALREADY_EXISTS");
        }else {
            if(shortcode){
                const shortcodeData = await models.shortcode.create({ url, shortcode });
            }else {
                const shortcodeData = await models.shortcode.create({ url,shortcode: generateShortCode() });
            }
        }
    } catch (error) {
        console.log(error);
        return { shortcode : null, error: error.message };
    }
}

module.exports = { getURL, generateShortCode, createShortcode };