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
  return TodoApi("/users/create", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};
