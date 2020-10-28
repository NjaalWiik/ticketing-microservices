import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { DatabaseConnectionError } from '../errors/databaseConnectionError';
import { RequestValidationError } from '../errors/requestValidationError';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid.'),
    body('password')
      .trim()
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters in length.')
      .matches('[0-9]')
      .withMessage('Password must contain at least 1 number.')
      .matches('[a-z]')
      .withMessage('Password must contain at least 1 lowercase letter.')
      .matches('[A-Z]')
      .withMessage('Password must contain at least 1 uppercase letter.')
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    throw new DatabaseConnectionError();

    const { email, password } = req.body;

    res.send({});
  }
);

export { router as signupRouter };
