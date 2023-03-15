import React from "react";

type TocProps = {
  content: string;
  count: number;
}[];

export default function Toc({ headings }) {
  return (
    <ol>
      {headings.map((heading) => {
        return (
          <li key={heading.content}>
            <a href={heading.link}>{heading.content}</a>
          </li>
        );
      })}
    </ol>
  );
}
