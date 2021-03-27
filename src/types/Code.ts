export type Code = 401 | 404 | 500;

export const enum Codes {
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}
