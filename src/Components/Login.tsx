import React from "react";
import { User } from "../api/auth";
import { ILogin } from "../models/user.interface";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { loginFailed, loginSuccess } from "../actions/user";
import { useHistory } from "react-router";

export default function Login() {
  const token = localStorage.getItem("token");
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  if (token) {
    history.push("/projects");
  }

  const onSubmit = async (data: ILogin): Promise<void> => {
    const response = await User.login(data);
    if (response.token) {
      dispatch(loginSuccess(response));
      localStorage.setItem("token", response.token);
      return;
    }
    dispatch(loginFailed({ message: response.message }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <b>Email</b>
        </label>
        <input
          type="email"
          placeholder="Enter Email"
          {...register("email", { required: true })}
        />
        {errors && <div>Email is required.</div>}
        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          {...register("password", { required: true })}
        />
        {errors && <div>Password is required.</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
