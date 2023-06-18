"use client";

import Todo from "@/components/Todos/Todo";
import { getTodos } from "@/services/todos";
import { useQuery } from "@tanstack/react-query";

const TodoList = () => {
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodos(),
    select: (data) => {
      return data?.sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
    },
  });

  return (
    <ul>
      {todos?.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </ul>
  );
};

export default TodoList;
