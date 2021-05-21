import { IUserState } from "../models/user.interface";
import { AnyAction } from "@reduxjs/toolkit";
import { TUserActions } from "../actions/user";

const initialState: IUserState = {
  token: null,
  user: null,
  message: null,
};

export default function reducer(
  state: IUserState | undefined = initialState,
  action: TUserActions | AnyAction = { type: "NULL" }
) {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      const newState = { ...state, token: action.payload.token };
      return newState;
    }
    case "LOGIN_FAILED": {
      const newState = { ...state, message: action.payload.message };
      return newState;
    }
    case "LOGOUT": {
      const newState = {
        ...state,
        token: null,
        user: null,
        message: action.payload.message,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
}
