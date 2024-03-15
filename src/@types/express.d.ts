import { userProps } from "@src/app/controllers/UsersController";

declare global {
  namespace Express {
    export interface Request {
      user: Partial<userProps>;
    }
  }
}
