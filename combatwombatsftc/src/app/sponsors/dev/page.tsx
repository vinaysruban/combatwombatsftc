import { useState } from "react";
import Link from "next/link";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [requests, setRequests] = useState([]);

  async function fetchRequests() {
    try {
      const response = await fetch("/api/data", {
        headers: {
          Accept: "*/*"
        }
      });

      if (!response.ok) throw new Error("Failed to fetch requests");

      const data = await response.json();
      const mappedRequests = data.body.map((item: any) => (
        <div key={item.email} className="border w-full text-center">
          <Link href={`mailto:${item.email}`}>{item.email}</Link>
          <p>{item.firstName}</p>
          <p>{item.lastName}</p>
          <p className="text-justify">{item.message}</p>
        </div>
      ));

      setRequests(mappedRequests);
    } catch (error) {
      console.error(error);
    }
  }

  async function checkAuth(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      if (!response.ok) throw new Error("Authentication failed");

      const { result } = await response.json();
      setUser(result);
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }

  return (
    <div>
      {error && <div>error</div>}
      {user ? (
        <>
          <button
            onClick={fetchRequests}
            className="text-white dark:text-black bg-black dark:bg-white rounded-3xl px-2 py-3 mb-6"
          >
            Generate Requests
          </button>
          <div className="flex flex-col gap-6">{requests}</div>
        </>
      ) : (
        <form onSubmit={checkAuth}>
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
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
