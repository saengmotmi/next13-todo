"use client";

import { useQueryClient } from "@tanstack/react-query";

import { useCreateTodo } from "./hooks/useCreateTodo";

const AddTodo = () => {
  const client = useQueryClient();

  const { mutateAsync } = useCreateTodo();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement & {
      title: { value: string };
      content: { value: string };
    };

    const res = await mutateAsync({
      title: form.title.value,
      content: form.content.value,
    });

    if (res.ok) {
      alert("등록이 완료되었습니다.");

      await client.invalidateQueries(["todos"]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="content" placeholder="content" />
      <button>등록</button>
    </form>
  );
};

export default AddTodo;
