import { IToken } from "../models/user.interface";

interface ILoginSuccess {
  type: "LOGIN_SUCCESS";
  payload: IToken;
}

export const loginSuccess = (user: IToken): ILoginSuccess => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
