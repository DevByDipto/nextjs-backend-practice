import jwt from 'jsonwebtoken';
import { AppError, handleError } from './handleError';

const JWT_SECRET = process.env.JWT_SECRET || 'secret_key'; // .env এ রাখো

export const signJwt = (payload: object, expiresIn = '1h'): string => {
  return jwt.sign(payload, JWT_SECRET, {
    algorithm: "HS256",
    expiresIn: "1h",
  });
};

export const verifyJwt = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET, { algorithms: ["HS256"] });
  } catch (err) {
    return handleError(err)
  }
};
