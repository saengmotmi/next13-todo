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
  const response = await fetch(TODO_API + getTodosRoute(), {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.b2o4bW1AbmF2ZXIuY29t.OV2SJ34Aci90EiBD-PzNM_xIW6eG8y1hKPfQVYlN7Ng",
    },
  });
  const todos = await response.json();
  return todos.data as Todo[];
};
