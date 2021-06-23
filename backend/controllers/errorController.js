export default (err, req, res, next) => {
  const messages = [];
  err.type = err.type || 'Error';
  err.statusCode = err.statusCode || 500;
  
  // Makes sure that errors are in development are more extensive then other environments
  if (process.env.NODE_ENV === 'development') {
    res.status(err.statusCode).json({
      type: err.type,
      error: err,
      message: messages.length > 0 ? messages : err.message,
      stack: err.stack
    });
  } else {
    res.status(err.statusCode).json({
      type: err.type,
      message: messages.length > 0 ? messages : err.message
    });
  }
};
