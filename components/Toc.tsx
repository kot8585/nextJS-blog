"use client";

import device from "@/styles/device";
import React from "react";
import styled from "styled-components";

export default function Toc({ headings }) {
  return (
    <Wrapper>
      {headings.map((heading) => {
        return (
          <li key={heading.content}>
            <a href={heading.link}>{heading.content}</a>
          </li>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.ol`
  display: none;
  align-self: flex-start;
  width: 350px;
  li {
    padding-top: 4px;
  }

  @media ${device.laptopL} {
    position: sticky;
    display: block;
    list-style: none;
    top: 150px;
  }
`;
