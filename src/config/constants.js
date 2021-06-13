const developConfig = require('./types');

const devConfig = {}
const testConfig = {}
const prodConfig = {}


const defaulConfig = {
    PORT: process.env.PORT || 5000,
    TOKEN_HEADER: 'x-access-token'
}

const envConfig = (env) => {
    if (developConfig.config) {
        switch(env){
            case developConfig.DEVELOPMENT_TITLE:
                return devConfig;
            case developConfig.TEST_TITLE:
                return testConfig;
            case developConfig.PRODUCTION_TITLE:
                return prodConfig;
            default:
                return null;
        }
    }
   
}

module.exports = {
    ...defaulConfig,
    ...envConfig(process.env.NODE_ENV),
}