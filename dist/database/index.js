const mongoose = require('mongoose');
const { error, info } = require('../helpers/logger');

const NAMESPACE = 'Database';

exports.dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    info(NAMESPACE, 'Database connection established');
  } catch (err) {
    error(NAMESPACE, 'Could not connect to the database', err);
  }
};
