import Image from "next/image";

export default function Sponsors() {
  return (
    <div className="container mx-auto px-4 pt-24">
      <h1 className="text-3xl ms:text-4xl md:text-5xl xl:text-6xl 3xl:text-7xl font-bold text-center">
        We&apos;re dedicated to our sponsors!
      </h1>
      <p className="text-center italic my-6 text-base sm:text-lg md:text-xl xl:text-2xl 3xl:text-3xl">Once we get some.</p>
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

          <form className="w-full max-w-lg">
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
              ></textarea>
            </div>
            <button
              type="submit"
              className=" hover:bg-combatgreen border-combatgreen border-2 transition-all text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </main>
      </div>
      <Image src="/images/image-transformed.webp" alt="Combat Wombats logo" className="animate-bounce dark:invert my-12 mx-auto" width={100} height={100} />
    </div>
  );
}
