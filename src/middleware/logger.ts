import { NextFunction, Request, Response } from 'express';
const logger = (req: Request, res: Response, next: NextFunction): any => {
  res.on('finish', () => {
    const log = {
      code: res.statusCode,
      method: req.method,
      path: req.originalUrl,
      body: req.body,
    };
    console.log(log);
  });
  next();
};

export default logger;
