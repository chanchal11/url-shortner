const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan());
app.use(cors({}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', require('./routes/shortcodes'));
app.use('*', (req,res)=> res.status(404).send({ERROR: "Incorrect API URL triggered"}));
module.exports = app;