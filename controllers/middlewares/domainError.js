module.exports = (err, _req, res, next) => {
  const errorMap = {
    registeredUser: 409,
  };

  const status = errorMap[err.code];

  if (!status) {
    return next(err);
  }

  return res.status(status).json(err);
};