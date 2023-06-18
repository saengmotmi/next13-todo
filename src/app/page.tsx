import AddTodo from "@/app/components/Todos/AddTodo";
import TodoList from "@/app/components/Todos/TodoList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div>
      <div>todos</div>
      <div>
        <div>
          <AddTodo />
        </div>
        <div>
          <Suspense fallback={<div>로딩 중...</div>}>
            <TodoList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
