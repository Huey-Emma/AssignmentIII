const dateISOString = () => {
  return new Date().toISOString();
};

exports.info = (namespace, message, ctx) => {
  if (ctx) {
    console.log(`[${dateISOString()}] [INFO] [${namespace}] - ${message}`, ctx);
  } else {
    console.log(`[${dateISOString()}] [INFO] [${namespace}] - ${message}`);
  }
};

exports.error = (namespace, message, ctx) => {
  if (ctx) {
    console.error(
      `[${dateISOString()}] [ERROR] [${namespace}] - ${message}`,
      ctx
    );
  } else {
    console.error(`[${dateISOString()}] [ERROR] [${namespace}] - ${message}`);
  }
};
