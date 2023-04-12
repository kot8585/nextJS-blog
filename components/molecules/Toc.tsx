"use client";

import { Heading } from "@/service/post";
import React from "react";

type Props = {
  headings: Heading[];
};

export default function Toc({ headings }: Props) {
  return (
    <ul className="hidden xl:w-1/4 sticky top-20 self-start 2xl:block">
      {headings.map((heading) => {
          return (
            <li key={heading.text} className={`list-none !my-1 ${heading.count === 2 ? 'text-md t' : 'ml-5 text-sm'} `}>
              <a className="no-underline font-normal"
              href={heading.link}>{heading.text}</a>
            </li>
          );
      })}
    </ul>
  );
}
