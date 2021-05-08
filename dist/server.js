require('dotenv').config();

const { createServer } = require('http');

const app = require('./app');
const { info } = require('./helpers/logger');
const { dbConnection } = require('./database');

const NAMESPACE = 'Server';
const PORT = process.env.PORT || 3000;

dbConnection();

createServer(app).listen(PORT, () =>
  info(NAMESPACE, `App is listening on port ${PORT}`)
);
