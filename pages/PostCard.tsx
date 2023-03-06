import React from "react";
import Date from "@/components/Date";
import { PostData } from "./index";
import styled from "styled-components";

type PostCardProps = {
  postData: PostData;
};

export default function PostCard({
  postData: { id, date, title },
}: PostCardProps) {
  return (
    <Li key={id}>
      <H2>{title}</H2>
      <Span>{id}</Span>
      <SmallSpan color="gray">
        <Date dateString={date} />
      </SmallSpan>
    </Li>
  );
}

const Li = styled.li`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 20px 0;
`;

const H2 = styled.h2`
  font-size: larger;
  font-weight: 600;
`;

const Span = styled.span`
  font-size: medium;
  font-weight: 300;
  color: ${(props) => (props.color ? props.color : "black")};
`;

const SmallSpan = styled.span`
  font-size: small;
  font-weight: 300;
  color: ${(props) => (props.color ? props.color : "black")};
`;
