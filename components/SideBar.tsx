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
      className={`lg:w-1/5  h-full z-20 fixed top-30 flex-col backdrop-blur-xl backdrop-bgMain ${
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
            >
              <span>{category}</span>
              <span>{categoryCount[category]}</span>
            </Link>
          );
        })}
    </aside>
  );
}
