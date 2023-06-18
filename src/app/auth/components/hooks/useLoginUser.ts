import { useMutation } from "@tanstack/react-query";

import type { LoginUserDto } from "@/services/users";
import { loginUser, loginUserRoute } from "@/services/users";

export const useLoginUser = () => {
  return useMutation([loginUserRoute()], (payload: LoginUserDto) =>
    loginUser(payload)
  );
};
