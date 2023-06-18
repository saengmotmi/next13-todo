import AddTodo from "@/components/Todos/AddTodo";
import TodoList from "@/components/Todos/TodoList";

export default async function Home() {
  return (
    <div>
      <div>todos</div>
      <div>
        <div>
          <AddTodo />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    </div>
  );
}
