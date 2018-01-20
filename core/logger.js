const winston = require('winston');
const conf = require('./conf');

const logConf = conf.get('log');
module.exports = new winston.Logger({
  level: logConf.level,
  transports: [
    new (winston.transports.Console)({
      colorize: true,
    }),
  ],
});
