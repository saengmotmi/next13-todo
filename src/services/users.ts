import { TodoApi } from "@/api";

export interface User {
  id: string;
  email: string;
  password: string;
  createdAt: string;
}

export type CreateUserDto = Pick<User, "email" | "password">;

export const createUserRoute = () => "/users/create";

export const createUser = async ({ email, password }: CreateUserDto) => {
  return TodoApi(createUserRoute(), {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};

export type LoginUserDto = Pick<User, "email" | "password">;

export const loginUserRoute = () => "/users/login";

export const loginUser = async ({ email, password }: CreateUserDto) => {
  return TodoApi(loginUserRoute(), {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};
