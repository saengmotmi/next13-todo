import type { Todo as ITodo } from "@/services/todos";

type Props = ITodo

const Todo = ({ title, content, createdAt, updatedAt }: Props) => {
  return (
    <li>
      <p>{title}</p>
      <p>{content}</p>
      <p>{createdAt}</p>
      <p>{updatedAt}</p>
    </li>
  );
};

export default Todo;
