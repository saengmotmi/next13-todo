"use client";

import { useLoginUser } from "../hooks/useLoginUser";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const { mutateAsync } = useLoginUser();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement & {
      email: { value: string };
      password: { value: string };
    };

    const res = await mutateAsync({
      email: form.email.value,
      password: form.password.value,
    });

    if (res.ok) {
      localStorage.setItem("token", (await res.json()).token);

      alert("로그인에 성공했습니다.");
      router.push("/");
    }
  };
  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <input name="email" type="text" placeholder="email" />
        <input name="password" type="password" placeholder="password" />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
