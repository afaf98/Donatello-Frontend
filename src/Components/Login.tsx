import React, { useState } from "react";
import { User } from "../api/auth";
import { ILogin } from "../models/user.interface";

const { useForm } = require("react-hook-form");

export default function Signup() {
  const { register, handleSubmit, errors } = useForm();
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
          name="email"
          {...register("email", { required: true })}
        />
        {errors && <div>Email is required.</div>}
        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          {...register("password", { required: true })}
        />
        {errors && <div>Password is required.</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
