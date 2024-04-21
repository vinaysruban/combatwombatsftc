import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function GoBack(props: any) {
  return (
    <button className={`italic transition-all hover:font-semibold flex items-center hover:-translate-x-2 md:w-36 w-auto ${roboto.className}`}>
      <FaArrowLeft className="inline text-sm" />
      <Link href={props.path} className="ml-2">
        Go back.
      </Link>
    </button>
  );
}
