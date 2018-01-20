const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const logger = require('../core/logger');
const { router } = require('./routes/router');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

logger.stream = {
  write: message => logger.info(message),
};

app.use(morgan('combined', {
  stream: logger.stream,
}));

app.use('/api/v1/', router);

// index route
app.get('/', (req, res) => res.send('Tickit gateway'));


exports.app = app;
