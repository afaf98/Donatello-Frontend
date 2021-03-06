import { IMassage, IUser } from "../models/user.interface";

interface ILoginSuccess {
  type: "LOGIN_SUCCESS";
  payload: IUser;
}
interface ILoginFailed {
  type: "LOGIN_FAILED";
  payload: IMassage;
}
interface ILogout {
  type: "LOGOUT";
  payload: IMassage;
}

export const loginSuccess = (user: IUser): ILoginSuccess => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const loginFailed = (message: IMassage): ILoginFailed => ({
  type: "LOGIN_FAILED",
  payload: message,
});

export const logout = (message: IMassage): ILogout => ({
  type: "LOGOUT",
  payload: message,
});

export type TUserActions = ILoginSuccess; // in case you want to add more action use union type and name function
