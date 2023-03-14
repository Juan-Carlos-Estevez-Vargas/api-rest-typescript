import { NextFunction, Request, Response } from "express"

const logMiddleware = (request: Request, response: Response, next: NextFunction) => {
  const header = request.headers;
  const userAgent = header["user-agent"]
  next();
}

export { logMiddleware }