"use client";

import React from "react";

export default function Toc({ headings }) {
  return (
    <ol className="hidden xl:w-1/4 sticky top-20 self-start xl:block">
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
