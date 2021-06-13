require('dotenv').config();
const express = require('express');
const listen = require('./src/config/serverPortConfig');
const middlewareConfig = require('./src/config/middleware');
//const apiEndpoints = require('./src/endpoints');

const app = express();
middlewareConfig(app);

app.get('/ping', (req, res) => {
    res.json({status: 'ok'});
})


//apiEndpoints(app);

listen(app);


