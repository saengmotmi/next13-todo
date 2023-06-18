"use client";

import { TODO_API } from "@/services/todos";
import { useMutation } from "@tanstack/react-query";

const Login = () => {
  const { mutateAsync } = useMutation(
    ["/users/create"],
    ({ email, password }: { email: string; password: string }) => {
      return fetch(TODO_API + "/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
    }
  );

  return (
    <div>
      <h1>회원가입</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const form = e.target as HTMLFormElement & {
            email: { value: string };
            password: { value: string };
            confirmPassword: { value: string };
          };
          if (form.password.value !== form.confirmPassword.value) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
          }
          const res = await mutateAsync({
            email: form.email.value,
            password: form.password.value,
          });

          if (res.ok) {
            localStorage.setItem("token", (await res.json()).token);

            alert("회원가입이 완료되었습니다.");
          }
        }}
      >
        <input name="email" type="text" placeholder="email" />
        <input name="password" type="password" placeholder="password" />
        <input
          name="confirmPassword"
          type="password"
          placeholder="password confirm"
        />
        <button type="submit">회원가입</button>
      </form>

      <h1>로그인</h1>
      <form>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
