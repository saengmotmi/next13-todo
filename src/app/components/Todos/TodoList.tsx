"use client";

import Todo from "@/app/components/Todos/Todo";
import { useGetTodos } from "./hooks/useGetTodos";

const TodoList = () => {
  const { data: todos } = useGetTodos();

  return (
    <ul>
      {todos?.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </ul>
  );
};

export default TodoList;
