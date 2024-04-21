import Image from "next/image";
import Form from "./form";

export default function Sponsors() {
  return (
    <div className="container mx-auto px-4 pt-24">
      <div className="flex flex-col gap-12 my-24 mb-32">
        <h1 className="text-3xl ms:text-4xl md:text-5xl xl:text-6xl 3xl:text-7xl font-bold text-center">
          We&apos;re dedicated to our sponsors!
        </h1>
        <p className="text-center italic text-base sm:text-lg md:text-xl xl:text-2xl 3xl:text-3xl">
          We're putting a lot of work into this page.
        </p>
      </div>
      <hr className="mt-12 border-t-4 border-black dark:border-white" />
      <div className="flex flex-col items-center justify-center min-h-full py-12">
        <main className="flex flex-col items-center justify-center w-full flex-1 md:px-20 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl 3xl:text-5xl font-bold mb-4">
            Contact Us for Sponsorship
          </h1>
          <p className="text-lg xl:text-xl mb-8">
            Interested in sponsoring our team? Fill out the form below to get in
            touch with us!
          </p>
          <Form />
        </main>
      </div>
    </div>
  );
}
