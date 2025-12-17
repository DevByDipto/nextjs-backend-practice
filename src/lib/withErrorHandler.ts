/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { handleError } from "./handleError";

export const withErrorHandler = (handler: Function) => async (req: any) => {
  try {
    return await handler(req);
  } catch (err) {
    return handleError(err);
  }
};