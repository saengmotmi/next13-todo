import { Todo, getTodos, getTodosRoute } from "@/services/todos";
import { useQuery } from "@tanstack/react-query";

export const useGetTodos = () => {
  return useQuery({
    queryKey: [getTodosRoute()],
    queryFn: () => getTodos(),
    select: sortedTodosByNewest,
    suspense: true,
  });
};

const sortedTodosByNewest = (todos: Todo[]) => {
  return todos?.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
};
