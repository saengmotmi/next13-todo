import { useCreateUser } from "../hooks/useCreateUser";

const SignUp = () => {
  const { mutateAsync } = useCreateUser();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
  };

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <input name="email" type="text" placeholder="email" />
        <input name="password" type="password" placeholder="password" />
        <input
          name="confirmPassword"
          type="password"
          placeholder="password confirm"
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignUp;
