import Image from "next/image";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import Link from 'next/link'


export default function Hero() {

  return (
    <div className={"bg-wombatbig"}>
      <section className="pl-12 pt-24 mb-80">
        <h1 className="font-bold text-5xl md:text-8xl">
          Meet the <br />
          <span className="combat">Combat Wombats</span>
        </h1>
        <article className="font-medium mt-8 ml-2 md:text-xl">
          Yap <u>summary</u> about us. u know we <strong>cool</strong> and
          whatnot. please support us.
          <br />
          Some parts gonna be{" "}
          <span className="text-combatgreen font-bold">green</span> and some
          gonna be <span className="text-wombatbrown font-bold">brown</span>
        </article>
        <article className="ml-2">
          <ul className="flex flex-row mt-6 child:mx-4 text-2xl">
            <li className="ml-0"><Link href="https://www.instagram.com/combat_wombats_ftc_aus/"><FaInstagram /></Link></li>
            <li><Link href="https://www.youtube.com/@CombatWombats23335"><FaYoutube /></Link></li>
            <li><Link href="mailto: juant@juant.com"><IoMailOpenOutline /></Link></li>
          </ul>
        </article>
      </section>
      <section className="flex flex-col items-center mx-auto text-xl font-semibold pb-12">
        <span>
          Thanks to these{" "}
          <span className="text-combatgreen font-bold">fellows</span> for
          supporting us:
        </span>
        <ul className="flex justify-start child:mx-12 mt-12">
          <li>
            <Image src="/sitelogo.png" alt="QASMT" height="150" width="150" />
          </li>
        </ul>
      </section>
    </div>
  );
}
