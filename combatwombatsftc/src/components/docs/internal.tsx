"use client";

import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { FaCaretRight } from "react-icons/fa";
import { Fragment, useState } from "react";
import { RxCross1 } from "react-icons/rx";

export default function Internal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const pathcode = pathname.split("/").filter(function (item) {
    return item !== "";
  });
  pathcode.forEach((item, index) => {
    return (pathcode[index] = item.replace(/[0-9]/g, ""));
  });

  const pathFinal: any = pathcode.map((item, index) => {
    return (
      <Fragment key={index}>
        <span>{item}</span>
        <FaCaretRight />
      </Fragment>
    );
  });

  console.log(pathFinal);
  return (
    <div className="w-full md:w-1/5">
      <section className="w-full py-12 px-2 flex-col gap-2 2xl:gap-3 hidden md:flex">
        {children}
      </section>
      <section className="flex flex-row gap-2 items-center md:hidden w-[95.83%] mx-auto border-y-[1px] py-1 border-slate-800 dark:border-slate-400">
        <IoMenu className="text-xl" onClick={() => setOpen(true)} />
        <span className="text-sm flex flex-row items-center gap-1 last:child:hidden">
          {pathFinal}
        </span>
      </section>
      <nav className={`fixed overflow-hidden bg-gradient-to-r from-darkgrey to-lightgrey top-0 left-0 ${open ? "w-56 px-3": "w-0 px-0"} flex flex-col h-full py-4 transition-all`}>
        <span className="border-none ml-auto text-2xl mb-8" onClick={() => setOpen(false)}>
          <RxCross1 />
        </span>
        {children}
      </nav>
    </div>
  );
}
