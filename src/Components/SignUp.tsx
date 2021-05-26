import React from "react";
import { User } from "../api/auth";
import { ISignUp } from "../models/user.interface";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { loginFailed, loginSuccess } from "../actions/user";
import { useHistory } from "react-router";

export default function Signup() {
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

  const onSubmit = async (data: ISignUp): Promise<void> => {
    const response = await User.signUp(data);
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
          <b>First name</b>
        </label>
        <input
          type="text"
          placeholder="Enter name"
          {...register("firstName", { required: true })}
        />
        {errors && <div>First name is required.</div>}
        <label>
          <b>Last name</b>
        </label>
        <input
          type="text"
          placeholder="Enter last name"
          {...register("lastName", { required: true })}
        />
        {errors && <div>Last name is required.</div>}
        <label>
          <b>Email</b>
        </label>
        <input
          type="email"
          placeholder="Enter email"
          {...register("email", { required: true })}
        />
        {errors && <div>Email is required.</div>}
        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter password"
          {...register("password", { required: true })}
        />
        {errors && <div>Password is required.</div>}
        <label>
          <b>Bank Account</b>
        </label>
        <input
          type="text"
          placeholder="Enter Bank account"
          {...register("bankAccount", { required: true })}
        />
        {errors && <div>Bank account is required.</div>}
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
