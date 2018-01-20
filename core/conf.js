const nconf = require('nconf');
const path = require('path');

nconf.env().argv();

const envConf = process.env.NODE_ENV;
if (envConf && envConf !== 'development') {
  nconf.file('override', path.resolve('./conf/', `${process.env.NODE_ENV}.json`));
}

// Base configuration for all environments
nconf.file('default', path.resolve('./conf/', 'development.json'));

module.exports = nconf;
