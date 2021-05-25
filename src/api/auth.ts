import axios, { AxiosResponse } from "axios";
import { ISignUp, IUser, ILogin, IToken } from "../models/user.interface";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const responseData = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseData),
  post: (url: string, body: Object) =>
    instance.post(url, body).then(responseData),
  // put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  // delete: (url: string) => instance.delete(url).then(responseBody),
};

export const User = {
  signUp: (userData: ISignUp): Promise<IUser> =>
    requests.post("/users/", userData),
  login: (userData: ILogin): Promise<IUser> =>
    requests.post(`/login`, userData),
  // createPost: (post: PostType): Promise<PostType> =>
  //   requests.post("posts", post),
  // updatePost: (post: PostType, id: number): Promise<PostType> =>
  //   requests.put(`posts/${id}`, post),
  // deletePost: (id: number): Promise<void> => requests.delete(`posts/${id}`),
};
