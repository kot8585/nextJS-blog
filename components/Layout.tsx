import React from "react";
import styled from "styled-components";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 768px;
  margin: 0 auto;
`;

const Main = styled.main`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
