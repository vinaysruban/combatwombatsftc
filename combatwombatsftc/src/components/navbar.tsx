import Image from "next/image";


export default function Navbar() {
    return (
        <nav className="mx-auto font-bold">
        <ul className="flex flex-row flex-nowrap justify-center items-center child:mx-3 py-2 hover:child:text-zinc-500 child:transition child:ease-linear child:duration-150">
          <li>About Us</li>
          <li>Our Robot</li>
          <li className="mx-8"><Image src={"/image-transformed.webp"} alt="Team logo of a wombat" width="40" height="40"></Image></li>
          <li>Guides</li>
          <li>Sponsors</li>
        </ul>
      </nav>
    )
}