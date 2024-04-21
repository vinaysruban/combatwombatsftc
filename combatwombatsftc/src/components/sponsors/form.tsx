"use client";
import { useState } from "react";
import Image from "next/image";

export default function Form() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function middleman(
    firstName: string,
    lastName: string,
    email: string,
    message: string
  ) {
    setSubmitted(true);
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      message: message,
      email: email,
    });

    let response = await fetch("/api/data", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let status = await response.status;
    console.log(status);
  }

  return !submitted ? (
    <form
      className="w-full max-w-lg"
      onSubmit={async () =>
        await middleman(firstName, lastName, email, message)
      }
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            htmlFor="firstName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your first name"
            value={firstName}
            required
            maxLength={250000}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your last name"
            value={lastName}
            required
            maxLength={250000}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your email address"
          value={email}
          required
          maxLength={250000}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows={5}
          placeholder="Type your message here"
          value={message}
          required
          maxLength={250000}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button
        type="submit"
        className=" hover:bg-combatgreen border-combatgreen border-2 transition-all text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  ) : (
    <div className="flex flex-col items-center gap-6 my-12 pt-6 border-t-4 border-black dark:border-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl 3xl:text-5xl font-bold">
        Thanks for contacting us!
      </h2>
      <p className="text-lg xl:text-xl">
        We&apos;ll try to get back to you as soon as possible
      </p>
      <Image
        src="/images/image-transformed.webp"
        alt="Combat Wombats logo"
        className="animate-bounce dark:invert my-6 mx-auto"
        width={100}
        height={100}
      />
    </div>
  );
}
