"use client";

import Link from "next/link";
import { useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [requests, setRequests] = useState(<div></div>);

  async function Requests() {
    let headersList = {
      Accept: "*/*",
    };

    let response = await fetch("/api/data", {
      method: "GET",
      headers: headersList,
    });

    let data = await response.json();
    const map = data.body.map((item: any) => {
      if (item.email) {
        return (
          <div key={item.email} className="border w-full text-center">
            <Link href={`mailto: ${item.email}`}>{item.email}</Link>
            <p>{item.firstName}</p>
            <p>{item.lastName}</p>
            <p className="text-justify">{item.message}</p>
          </div>
        );
      }
    });

    setRequests(map);
    return <div>{map}</div>;
  }

  async function checkAuth(e: any, email: string, password: string) {
    e.preventDefault();
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      email: email,
      password: password,
    });

    let response = await fetch("/api/auth", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    const { result, error } = await response.json();

    if (result) {
      setUser(result);
      return;
    }

    setError(true);
    return;
  }

  return error ? (
    <div>error</div>
  ) : user ? (
    <div>
      <button onClick={() => Requests()} className="text-white dark:text-black bg-black dark:bg-white rounded-3xl px-2 py-3 mb-6">Generate Requests</button>
      <div className="flex flex-col gap-6">{requests}</div>
    </div>
  ) : (
    <div>
      <form onSubmit={async (e) => await checkAuth(e, email, password)}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
