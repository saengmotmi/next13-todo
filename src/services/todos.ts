import { TodoApi } from "@/api";

export const TODO_API = "http://localhost:8080";

export interface Todo {
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
}

export const getTodosRoute = () => "/todos";

export const getTodos = async () => {
  const response = await TodoApi(getTodosRoute());
  const { data } = await response.json();
  return data as Todo[];
};

export const createTodoRoute = () => "/todos/create";

export type CreateTodoDto = Pick<Todo, "title" | "content">;

export const createTodo = async ({ title, content }: CreateTodoDto) => {
  return TodoApi("/todos", {
    method: "POST",
    headers: { Authorization: localStorage.getItem("token") as string },
    body: JSON.stringify({ title, content }),
  });
};
