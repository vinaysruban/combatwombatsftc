"use client"
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";
import { CiNoWaitingSign } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function DarkMode() {
    const { setTheme, resolvedTheme } = useTheme()
    const [mount, setMount] = useState(false)

    useEffect(() => {
      setMount(true)
    }, [])

    return (
        <div className="cursor-pointer">{
                mount ? resolvedTheme === "light" ? <FaMoon onClick={() => setTheme("dark")} /> : <FaSun onClick={() => setTheme("light")} /> : <CiNoWaitingSign />
            }
        </div>
    );
}