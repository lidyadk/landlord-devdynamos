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
    <div>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          value={username}
          placeholder="name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <label>
            <input
              type="radio"
              value="LANDLORD"
              checked={role === "LANDLORD"}
              onChange={handleRoleChange}
            />
            LANDLORD
          </label>
          <label>
            <input
              type="radio"
              value="TENANT"
              checked={role === "TENANT"}
              onChange={handleRoleChange}
            />
            TENANT
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {message !== "" ? <div>{message}</div> : null}
    </div>
  );
};
