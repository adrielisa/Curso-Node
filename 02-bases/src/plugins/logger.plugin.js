const winstom = require('winston');
const {combine, timestamp, json} = winstom.format;

const logger = winstom.createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        json()
    ),
    transports: [
        new winstom.transports.File({ filename: 'error.log', level: 'error' }),
        new winstom.transports.File({ filename: 'combined.log' })
    ]
});

logger.add(new winstom.transports.Console({
    format: winstom.format.simple()
}));

module.exports = function buildLogger(service) {
    return {
        log: (msg) => {
            logger.log('info', { msg, service });
        },
        error: (msg) => {
            logger.error('error', { 
                msg,
                service,
                at: new Date().toISOString()
            });
        }
    }
}