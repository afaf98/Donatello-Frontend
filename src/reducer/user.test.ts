import userReducer from "./user";
import { loginFailed, loginSuccess, logout } from "../actions/user";

describe("user reducer", () => {
  test("should return an initial state", () => {
    const initialState = userReducer();

    expect(initialState).toStrictEqual({
      token: null,
      user: null,
      message: null,
    });
  });
  test("should store the token when a loginSuccess action is dispatched", () => {
    const initialState = userReducer();

    const loginSuccessAction = loginSuccess({ token: "blablablablabalba" });

    const newState = userReducer(initialState, loginSuccessAction);

    expect(newState).toStrictEqual({
      token: "blablablablabalba",
      user: null,
      message: null,
    });
  });
  test("should give store and error message when a loginFailed action is dispatched", () => {
    const initialState = userReducer();

    const loginFailedAction = loginFailed({
      message: "You're credential are incorrect",
    });

    const newState = userReducer(initialState, loginFailedAction);

    expect(newState).toStrictEqual({
      token: null,
      user: null,
      message: "You're credential are incorrect",
    });
  });
  test("should return to initial state when a logout action is dispatched", () => {
    const initialState = userReducer();

    const loginFailedAction = logout({
      message: "You're logged out",
    });

    const newState = userReducer(initialState, loginFailedAction);

    expect(newState).toStrictEqual({
      token: null,
      user: null,
      message: "You're logged out",
    });
  });
  test.todo("Re-write loginSuccess when you got the user back");
});
