import { CreateTodoDto, createTodo, createTodoRoute } from "@/services/todos";
import { useMutation } from "@tanstack/react-query";

export const useCreateTodo = () => {
  return useMutation([createTodoRoute()], (payload: CreateTodoDto) =>
    createTodo(payload)
  );
};
