// Middleware to log incoming requests
export function logger(req, res, next) {

    const timestamp = new Date().toISOString();

    // Log the HTTP method and requested URL with timestamp
    console.log(`${timestamp} - ${req.method} to ${req.url}`);

    // Move to the next middleware or route handler
    next();
}