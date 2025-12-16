import { handleError } from "./handleError";

export const withErrorHandler = (handler: Function) => async (req: any) => {
  try {
    return await handler(req);
  } catch (err) {
    return handleError(err);
  }
};