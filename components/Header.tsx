"use client";

import { BsFillSunFill, BsSearch } from "react-icons/bs";
import { FaRegMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useDarkMode } from "@/context/DarkModeContext";
import { DarkModeContextType } from "../context/DarkModeContext";
import { useRouter } from "next/navigation";

const DIV_CLASS = "flex items-center gap-2 text-3xl font-bold";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode() as DarkModeContextType;
  const router = useRouter();

  return (
    <header className="flex justify-between fixed z-10 w-full text-xl p-2 backdrop-blur-md backdrop-bgMain">
      <div className={DIV_CLASS}>
        <button>
          <GiHamburgerMenu />
        </button>
        <Link href="/">MOON.DEV</Link>
      </div>
      <div className={DIV_CLASS}>
        <button>
          <BsSearch
            onClick={() => {
              router.push("/search");
            }}
          />
        </button>
        <button onClick={toggleDarkMode}>
          {darkMode ? <BsFillSunFill /> : <FaRegMoon />}
        </button>
      </div>
    </header>
  );
}
