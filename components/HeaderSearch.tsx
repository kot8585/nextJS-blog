"use client";

import { GoSearch } from "react-icons/go";
import styled from "styled-components";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function HeaderSearch() {
  const router = useRouter();
  const keyword = router.query.q as string;
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    router.push({
      pathname: "/search",
      query: { q: e.target.value },
    });
  };

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <Div isClicked={isClicked} text={text}>
      <input
        className="input"
        placeholder="검색어를 입력해주세요"
        value={text}
        onChange={handleChange}
        onBlur={() => setIsClicked(false)}
      />
      <GoSearch className="logo" onClick={() => setIsClicked(!isClicked)} />
    </Div>
  );
}

type SearchProps = {
  isClicked: boolean;
  text: string;
};

const Div = styled.div<SearchProps>`
  display: flex;
  justify-content: end;
  position: relative;
  width: ${(props) => (props.isClicked || props.text ? "40%" : "20px")};
  max-width: 300px;

  .input {
    width: 100%;
    height: 30px;
    visibility: ${(props) =>
      props.isClicked || props.text ? "visible" : "hidden"};
    padding-left: 35px;
  }

  .logo {
    position: absolute;
    left: 5px;
    top: 5px;
    font-size: 24px;
  }
`;
