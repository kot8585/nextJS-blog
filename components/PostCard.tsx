import React from "react";
import Date from "@/components/Date";
import { PostData } from "../pages/index";
import styled from "styled-components";
import Link from "next/link";

type PostCardProps = {
  postData: PostData;
};

export default function PostCard({
  postData: { id, date, title },
}: PostCardProps) {
  return (
    <Link href={`posts/${id}`}>
      <Li key={id}>
        <H2>{title}</H2>
        <Span>{id}</Span>
        <SmallSpan>
          <Date dateString={date} />
        </SmallSpan>
      </Li>
    </Link>
  );
}

const Li = styled.li`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 18px 0;
`;

const H2 = styled.h2`
  font-size: larger;
  font-weight: 600;
  margin: 0;
`;

const Span = styled.span`
  font-size: medium;
  font-weight: 300;
  color: var(--text-main);
`;

export const SmallSpan = styled.span`
  font-size: small;
  font-weight: 300;
  color: gray;
`;
