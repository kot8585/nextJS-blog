"use client";

import { clickedSideBarAtom } from "@/state/ClickedSideBarAtom";
import { PostData } from "@/utils/post";
import React from "react";
import { useRecoilState } from "recoil";
import Categories from "./Categories";
import UserInfo from "./UserInfo";

type Props = {
  posts: PostData[];
};

export default function SideBar({ posts }: Props) {
  const [isClicked, setIsClicked] = useRecoilState(clickedSideBarAtom);

  return (
    <aside
      className={`lg:w-1/5  max-h-screen h-full z-20 fixed flex-col bg-bgMain p-2 justify-between mb-14 ${
        isClicked ? "flex" : "hidden"
      }`}
    >
      <Categories posts={posts}/>
      <UserInfo />
    </aside>
  );
}
