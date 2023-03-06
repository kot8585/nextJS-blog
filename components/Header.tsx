import React from "react";
import { GoSearch } from "react-icons/go";
import { BsFillSunFill } from "react-icons/bs";
import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrapper>
      <Link href="/">HyoJeong Blog</Link>
      <div>
        <Button>
          <BsFillSunFill />
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
  background-color: white;
  width: inherit;
`;

const Button = styled.button`
  font-size: 20px;
  line-height: 13px;
`;
