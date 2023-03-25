"use client";

import React from "react";

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
