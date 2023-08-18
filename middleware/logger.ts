import express from 'express';
const loggerMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(`[${new Date().toLocaleString()}] [${req.method}] ${req.path}`);
    next()
}

export { loggerMiddleware }