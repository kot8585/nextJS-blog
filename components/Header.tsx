import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";
import styled from "styled-components";
import { useDarkMode } from "@/context/DarkModeContext";
import { DarkModeContextType } from "../context/DarkModeContext";
import HeaderSearch from "./HeaderSearch";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode() as DarkModeContextType;

  return (
    <HeaderWrapper>
      <Link href="/">HyoJeong Blog</Link>
      <Div>
        <HeaderSearch />
        <Button onClick={toggleDarkMode}>
          {darkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
        </Button>
      </Div>
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
  background-color: var(--bg-main);
  border-bottom: 1px solid var(--border-main);
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: end;
  gap: 0 15px;
`;

const Button = styled.button`
  font-size: 24px;
  line-height: 13px;
`;
