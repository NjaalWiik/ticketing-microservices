import { Request, Response, NextFunction } from 'express';
import { DatabaseConnectionError } from '../errors/databaseConnectionError';
import { RequestValidationError } from '../errors/requestValidationError';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    console.log('handling this error as a validation error');
  }
  if (err instanceof DatabaseConnectionError) {
    console.log('handling this error as a database error');
  }

  res.status(400).send({
    message: err.message
  });
};
