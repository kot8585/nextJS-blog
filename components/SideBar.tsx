"use client";

import { clickedSideBarAtom } from "@/state/ClickedSideBarAtom";
import { PostData } from "@/utils/post";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";

type Props = {
  posts: PostData[];
};

export default function SideBar({ posts }: Props) {
  const [isClicked, setIsClicked] = useRecoilState(clickedSideBarAtom);

  let init: { [category: string]: number } = {};
  const categoryCount = posts.reduce((accumulator, currentValue) => {
    const category = currentValue.frontMatter.category;
    const currCount = accumulator[category] ?? 0;
    return {
      ...accumulator,
      [category]: currCount + 1,
    };
  }, init);

  return (
    <aside
      className={`lg:w-1/5  h-full z-20 fixed top-30 flex-col bg-bgMain p-2 ${
        isClicked ? "flex" : "hidden"
      }`}
    >
      {categoryCount &&
        Object.keys(categoryCount).map((category) => {
          return (
            <Link
              key={category}
              href={`/posts/category/${category}`}
              onClick={() => setIsClicked(false)}
              className="hover:-translate-y-0.5"
            >
              <span className="text-xl">{category}</span>
              <span className="ml-2 border border-brandMain px-2 text-xs rounded-full text-brandMain">
                {categoryCount[category]}
              </span>
            </Link>
          );
        })}
    </aside>
  );
}
