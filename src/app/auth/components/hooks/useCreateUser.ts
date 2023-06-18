import { CreateUserDto, createUser, createUserRoute } from "@/services/users";
import { useMutation } from "@tanstack/react-query";

export const useCreateUser = () => {
  return useMutation([createUserRoute()], (payload: CreateUserDto) =>
    createUser(payload)
  );
};
