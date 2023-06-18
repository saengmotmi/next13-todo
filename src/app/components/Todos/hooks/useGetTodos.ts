import { getTodos, getTodosRoute } from "@/services/todos";
import { useQuery } from "@tanstack/react-query";

export const useGetTodos = () => {
  return useQuery({
    queryKey: [getTodosRoute()],
    queryFn: () => getTodos(),
    select: (data) => {
      return data?.sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
    },
    suspense: true,
  });
};
