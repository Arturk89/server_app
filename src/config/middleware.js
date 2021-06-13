const express = require('express');
const cors = require('cors');
const developConfig = require('./types');

const constants = require('../config/constants');
const env = process.env.NODE_ENV;

module.exports = app => {
    if(typeof(app) === 'function'){
        app.use(express.json())
        app.use(express.urlencoded({
            extended: true
        }))

        if(developConfig.PRODUCTION_TITLE){
            //compression
        }

        if(developConfig.DEVELOPMENT_TITLE){
            const corsOptions = {
                origin: '*',
                exposeHeaders: [constants.TOKEN_HEADER]
            };
            app.use(cors(corsOptions));
        }
    }
}