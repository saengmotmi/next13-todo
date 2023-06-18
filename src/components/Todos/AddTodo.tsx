"use client";

import { TODO_API } from "@/services/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const AddTodo = () => {
  const client = useQueryClient();

  const { mutateAsync } = useMutation(
    ["/todos/create"],
    ({ title, contents }: { title: string; contents: string }) => {
      return fetch(TODO_API + "/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token")!,
        },
        body: JSON.stringify({
          title,
          contents,
        }),
      });
    }
  );

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement & {
          title: { value: string };
          contents: { value: string };
        };
        const res = await mutateAsync({
          title: form.title.value,
          contents: form.contents.value,
        });

        if (res.ok) {
          alert("등록이 완료되었습니다.");

          await client.invalidateQueries(["todos"]);
        }
      }}
    >
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="contents" placeholder="contents" />
      <button>등록</button>
    </form>
  );
};

export default AddTodo;
