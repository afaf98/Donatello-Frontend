import React from "react";
import { User } from "../api/auth";
import { ISignUp } from "../models/user.interface";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { selectUser } from "../selectors/user";
import { loginSuccess } from "../actions/user";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const onSubmit = async (data: ISignUp): Promise<void> => {
    console.log(data);
    const response = await User.signUp(data);
    dispatch(loginSuccess(response));
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
