import React, { useState } from "react";
import { User } from "../api/auth";
import { ILogin } from "../models/user.interface";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { selectUser } from "../selectors/user";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const user = useSelector(selectUser);
  console.log("user", user);
  const [token, setToken] = useState<string>();

  const onSubmit = async (data: ILogin): Promise<void> => {
    console.log(data);
    const response = await User.login(data);
    console.log("response", response);
    setToken(response.token);
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
