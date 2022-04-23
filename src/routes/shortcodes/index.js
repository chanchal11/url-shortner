const router = require('express').Router();
const { getURL, createShortcode } = require('../../services/shortcodes');
const { getStatistics, updateStatistics } = require('../../services/stats');

const errorMessages = require('../../assets/errorMessages/en.json');

router.get('/:shortcode', async (req,res) => {
    try {
        const urlData = await getURL(req.params.shortcode);
        if(urlData && urlData.error){
            const error = errorMessages[urlData.error];
            res.status(error.httpCode).send({ERROR: error.message});
        }else {
            res.status(302).send({url: urlData.url});
            await updateStatistics(req.params.shortcode);
        }
    } catch (error) {
        res.status(500).send({ERROR: errorMessages.UNKNOWN_ERROR});
    }
});

router.post('/', async (req,res) => {
    try {
        const { shortcode, url } = req.body;
        const urlData = await createShortcode({url, shortcode});
        if(urlData && urlData.error){
            const error = errorMessages[urlData.error];
            res.status(error.httpCode).send({ERROR: error.message});
        }else {
            res.status(201).send({ shortcode });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ERROR: error.message});
    }
});

router.get('/:shortcode/stats', async (req,res) => {
    try {
        const statistics = await getStatistics(req.params.shortcode);
        if(statistics && statistics.error){
            const error = errorMessages[statistics.error];
            res.status(error.httpCode).send({ERROR: error.message});
        }else {
            res.status(200).send(statistics.data);
        }
    } catch (error) {
        res.status(500).send({ERROR: errorMessages.UNKNOWN_ERROR});
    }
});

module.exports = router;