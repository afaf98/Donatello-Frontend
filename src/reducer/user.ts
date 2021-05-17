import { IUserState } from "../models/user.interface";
import { AnyAction, PayloadAction } from "@reduxjs/toolkit";

const initialState: IUserState = {
  token: null,
  user: null,
  message: null,
};

export default function reducer(
  state = initialState,
  action: PayloadAction<any> | AnyAction
) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
