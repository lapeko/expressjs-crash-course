const logger = (req, res, next) => {
  const time = new Date().toISOString();
  const { protocol, originalUrl, method } = req;
  const path = `${protocol}://${req.get("host")}${originalUrl}`;
  console.log(method, path, time);
  next();
};

module.exports = logger;
