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

const DIV_CLASS = "flex items-center text-3xl font-bold";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode() as DarkModeContextType;
  const router = useRouter();
  const [isClicked, setIsClicked] = useRecoilState(clickedSideBarAtom);

  return (
    <header className="flex left-0 top-0 justify-between sticky z-20 text-xl p-2 backdrop-blur-md backdrop-bgMain h-14   border-b-2 border-borderMain">
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
        <Link href="/" className="ml-2">
          MOON.DEV
        </Link>
      </div>
      <div className={DIV_CLASS}>
        <button className="hover:bg-bgSub p-1 rounded-full">
          <BsSearch
            onClick={() => {
              router.push("/search");
            }}
          />
        </button>
        <button
          className="hover:bg-bgSub p-1 rounded-full "
          onClick={toggleDarkMode}
        >
          {darkMode ? <BsFillSunFill /> : <FaRegMoon />}
        </button>
      </div>
    </header>
  );
}
