import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-midbeige dark:bg-lightgrey shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between justify-center">
          <Link
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse justify-center"
          >
            <Image
              src="/images/image-transformed.webp"
              className="h-8 dark:invert"
              alt="Flowbite Logo"
              width={32}
              height={32}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Combat Wombats
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-semibold sm:mb-0 justify-center">
            <li>
              <Link href="about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="docs" className="hover:underline me-4 md:me-6">
                Robot Docs
              </Link>
            </li>
            <li>
              <Link href="contact" className="hover:underline me-4 md:me-6">
                Contact Us
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-combatgreen sm:mx-autolg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 2024{" "}
          <Link
            href="https://github.com/vinaysruban"
            className="hover:underline"
          >
            Vinay Saravana Ruban
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
