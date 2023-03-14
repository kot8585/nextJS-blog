import React from "react";

type TocProps = {
  content: string;
  count: number;
}[];

export default function Toc({ contents }) {
  return (
    <ul>
      {contents.map((con) => {
        return (
          <li key={con.content}>
            <a href={`#${con.content}`}>{con.content}</a>
          </li>
        );
      })}
    </ul>
  );
}
