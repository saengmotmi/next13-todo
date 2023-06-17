import Todo from "@/components/Todos/Todo";

export default function Home() {
  return (
    <div>
      <div>todos</div>
      <div>
        <div>
          <input type="text" />
          <button>등록</button>
        </div>
        <ul>
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </ul>
      </div>
    </div>
  );
}
