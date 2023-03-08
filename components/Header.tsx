import { GoSearch } from "react-icons/go";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";
import styled from "styled-components";
import { useDarkMode } from "@/context/DarkModeContext";
import { DarkModeContextType } from "../context/DarkModeContext";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode() as DarkModeContextType;

  return (
    <HeaderWrapper>
      <Link href="/">HyoJeong Blog</Link>
      <div>
        <Button onClick={toggleDarkMode}>
          {darkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
        </Button>
        <Button>
          <GoSearch />
        </Button>
      </div>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 26px;
  font-weight: bold;
  padding: 7px 0;
  position: fixed;
  z-index: 1;
  width: inherit;
`;

const Button = styled.button`
  font-size: 20px;
  line-height: 13px;
`;
