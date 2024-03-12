"use client"
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";
import { CiNoWaitingSign } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function DarkMode() {
    const { setTheme, resolvedTheme, systemTheme } = useTheme()
    const [mount, setMount] = useState(false)

    useEffect(() => {
      setMount(true)

      if (systemTheme) {
        setTheme(systemTheme)
      }
    }, [])

    console.log(useTheme())

    return (
        <div>
        <li className="mx-6">{
                mount ? resolvedTheme === "light" ? <FaMoon onClick={() => setTheme("dark")} /> : <FaSun onClick={() => setTheme("light")} /> : <CiNoWaitingSign />
            }</li>
        </div>
    );
}