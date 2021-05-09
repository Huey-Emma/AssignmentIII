const express = require('express');
const { info } = require('../helpers/logger');
const userRoutes = require('../routes/user');

const NAMESPACE = 'App';
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    info(
      NAMESPACE,
      `METHOD - ${req.method} URL - ${req.url} IP - ${req.socket.remoteAddress}`
    );
    res.on('finish', () => {
      info(
        NAMESPACE,
        `METHOD - ${req.method} URL - ${req.url} IP - ${req.socket.remoteAddress} STATUS - ${res.statusCode}`
      );
    });
    next();
  });
}

app.use(
  express.json({
    limit: '10kb',
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
    return res.status(200).json({});
  }
  next();
});

app.use('/api/v1/user', userRoutes);

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Route - ${req.originalUrl} does not exist on this server`,
  });
});

module.exports = app;
