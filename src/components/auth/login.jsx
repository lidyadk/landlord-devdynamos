"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const Login = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // loading still not working

  async function handleLogin(formData) {
    setLoading(true);
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (res.status === 200) {
      toast.success("Login success");
      router.push("/dashboard");
      router.refresh();
    } else {
      toast.error("Login failed");
      setMessage(data.message);
    }
  }

  return (
    <main className="space-y-6">
      <section className="items-center w-full">
        <h1 className="text-3xl flex justify-center font-bold font-sans ">
          Welcome back
        </h1>
        <p className="flex justify-center text-gray-600 pt-2">
          Please login to your account
        </p>
      </section>
      <form action={handleLogin} disabled={loading} className="space-y-2">
        <label className="input input-bordered flex items-center gap-2 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            name="email"
            className="grow"
            placeholder="Email"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            name="password"
            placeholder="Password"
          />
        </label>
        <button className="btn w-full my-3 disabled:opacity-40 disabled:cursor-wait">
          Sign in
        </button>
        <p className="flex justify-center pt-1 font-sans text-gray-600">
          Don't have an account?{" "}
          <Link href="/register" className="pl-1 text-blue-600">
            {" "}
            Sign Up
          </Link>
        </p>
      </form>
      {message !== "" ? (
        <div role="alert" className="alert alert-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>{message}</span>
        </div>
      ) : null}
    </main>
  );
};
