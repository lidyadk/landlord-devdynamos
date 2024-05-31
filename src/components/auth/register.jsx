"use client";

import { useRef, useState } from "react";

export const Register = () => {
  const formRef = useRef();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/auth/register", {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password, role }),
    });

    console.log({ username, email, password, role });

    const data = await response.json();
    setMessage(data.message);
    formRef.current.reset();
  };

  return (
    <div className="space-y-6">
      <section className="flex justify-center items-center w-full">
        <h1 className="text-2xl">Create an account</h1>
      </section>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          value={username}
          placeholder="Name"
          onChange={(e) => setUsername(e.target.value)}
          className="input input-bordered input-secondary w-full"
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered input-secondary w-full"
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="input input-bordered input-secondary w-full"
        />
        <div className="flex py-2">
          <label className="flex">
            <input
              type="radio"
              value="LANDLORD"
              name="radio-5"
              className="radio radio-secondary mx-2"
              checked={role === "LANDLORD"}
              onChange={handleRoleChange}
            />
            <p>LANDLORD</p>
          </label>
          <label className="flex">
            <input
              type="radio"
              value="TENANT"
              name="radio-5"
              className="radio radio-secondary mx-2"
              checked={role === "TENANT"}
              onChange={handleRoleChange}
            />
            <p>TENANT</p>
          </label>
        </div>
        <button type="submit" className="btn btn-secondary w-full my-3">
          Sign Up
        </button>
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
    </div>
  );
};
