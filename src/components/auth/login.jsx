"use client";

import { useRouter } from "next/navigation";

export const Login = () => {
  const router = useRouter();

  async function handleLogin(formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    // if (isLandlord) {
    //   router.push("/dashboard");
    // } else {
    //   router.push("/");
    // }
    router.push("/dashboard");
  }

  return (
    <main>
      <form action={handleLogin}>
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </main>
  );
};
