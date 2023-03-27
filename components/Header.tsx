"use client";

import { BsFillSunFill, BsSearch } from "react-icons/bs";
import { FaRegMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useDarkMode } from "@/context/DarkModeContext";
import { DarkModeContextType } from "../context/DarkModeContext";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { clickedSideBarAtom } from "@/state/ClickedSideBarAtom";

const DIV_CLASS = "flex items-center gap-2 text-3xl font-bold";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode() as DarkModeContextType;
  const router = useRouter();
  const [isClicked, setIsClicked] = useRecoilState(clickedSideBarAtom);

  return (
    <header className="flex left-0 top-0 justify-between sticky z-20 text-xl p-2 backdrop-blur-md backdrop-bgMain h-14">
      <div className={DIV_CLASS}>
        <button onClick={() => setIsClicked(!isClicked)}>
          {
            <GiHamburgerMenu
              className={`transition-all duration-500 ${
                isClicked ? "rotate-90" : ""
              }`}
            />
          }
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
