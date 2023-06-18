import { useMutation } from "@tanstack/react-query";

import type { CreateUserDto} from "@/services/users";
import { createUser, createUserRoute } from "@/services/users";

export const useCreateUser = () => {
  return useMutation([createUserRoute()], (payload: CreateUserDto) =>
    createUser(payload)
  );
};
