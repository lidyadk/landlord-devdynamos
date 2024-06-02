"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const Login = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");

  async function handleLogin(formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setMessage(data.message);

    if (res.status === 200) {
      router.push("/dashboard");
    } else {
    }
  }

  return (
    <main className="space-y-6">
      <section className="flex justify-center items-center w-full">
        <h1 className="text-2xl">Welcome back</h1>
      </section>
      <form action={handleLogin} className="space-y-2">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="input input-bordered input-secondary w-full"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="input input-bordered input-secondary w-full"
        />
        <button className="btn btn-secondary w-full my-3">Sign in</button>
      </form>
      {message !== "" ? (
        <div role="alert" className="alert alert-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>{message}</span>
        </div>
      ) : null}
    </main>
  );
};
