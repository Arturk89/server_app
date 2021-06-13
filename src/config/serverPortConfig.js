require('dotenv').config();
const constants = require('./constants');

module.exports = (app) => {
    if (typeof(app) === 'function') {
        app.listen(constants.PORT, err => {
            if(err) {
                throw err;
            } else {
                console.log(`
                    Server running on port ${constants.PORT}
                    -- Running on ${process.env.NODE_ENV}
                    -- Listening...
                `)
            }
        })
    }
}