// Global Error handler Middleware
const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Something went wrong";
  res.status(err.statusCode).json({
    status: "fail",
    message: err.message,
  });
};
module.exports = errorHandler;
