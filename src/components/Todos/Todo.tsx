import { Todo as ITodo } from "@/services/todos";

interface Props extends ITodo {}

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
