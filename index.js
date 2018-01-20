const conf = require('./core/conf');
const logger = require('./core/logger');

const { app } = require('./src/app');

const port = conf.get('port');

app.listen(port, () => logger.info(`Server startted at port - ${port}`));
