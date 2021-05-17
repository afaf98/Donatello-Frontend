import axios, { AxiosResponse } from "axios";
import { body, responseBody, login } from "../models/user.interface";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const responseData = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseData),
  post: (url: string, body: body) =>
    instance.post(url, body).then(responseData),
  // put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  // delete: (url: string) => instance.delete(url).then(responseBody),
};

export const User = {
  signUp: (userData: body): Promise<responseBody> =>
    requests.post("/users/", userData),
  login: (userData: login): Promise<any> => requests.post(`/login`, userData),
  // createPost: (post: PostType): Promise<PostType> =>
  //   requests.post("posts", post),
  // updatePost: (post: PostType, id: number): Promise<PostType> =>
  //   requests.put(`posts/${id}`, post),
  // deletePost: (id: number): Promise<void> => requests.delete(`posts/${id}`),
};
