const logger = (req, res, next) => {
  const time = new Date().toISOString();
  const path = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
  console.log(time, path);
  next();
};

module.exports = logger;
