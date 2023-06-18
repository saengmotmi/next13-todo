import { useMutation } from "@tanstack/react-query";

import type { CreateTodoDto} from "@/services/todos";
import { createTodo, createTodoRoute } from "@/services/todos";

export const useCreateTodo = () => {
  return useMutation([createTodoRoute()], (payload: CreateTodoDto) =>
    createTodo(payload)
  );
};
