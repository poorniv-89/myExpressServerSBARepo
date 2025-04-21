// Error-handling middleware
export function errorHandler(err, req, res, next) {
  const statusCode = err.status || 500;

  // Send a JSON response with the error message
  res.status(statusCode).json({
    error: 'Something went wrong!', 
    message: err.message || 'Internal Server Error' 
  });
} 