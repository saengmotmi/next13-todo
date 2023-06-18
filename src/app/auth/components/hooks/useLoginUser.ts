import { LoginUserDto, loginUser, loginUserRoute } from "@/services/users";
import { useMutation } from "@tanstack/react-query";

export const useLoginUser = () => {
  return useMutation([loginUserRoute()], (payload: LoginUserDto) =>
    loginUser(payload)
  );
};
