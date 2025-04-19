export function logger(req, res, next)
{
    const timestamp = new Date().toISOString();
    console.log(`${timestamp} - ${req.method} to ${req.url}`);
    next();
}