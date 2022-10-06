import { NextFunction, Request, Response } from "express";
import ApiError from "../helpers/ApiError";

export const errorMiddleWare = (err: ApiError, _req: Request, res: Response, next: NextFunction) => {
  const status = err.statusCode ? err.statusCode : 500;
  const message = err.statusCode ? err.message : 'Internal Server Error!';

  res.status(status).json({ message });
};