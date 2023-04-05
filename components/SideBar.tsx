"use client";

import { clickedSideBarAtom } from "@/state/ClickedSideBarAtom";
import { PostData } from "@/utils/post";
import React, { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import Categories from "./Categories";
import UserInfo from "./UserInfo";
import { FaTimes } from "react-icons/fa";
import { assertIsNode } from "@/util/assertion";

type Props = {
  posts: PostData[];
};

export default function SideBar({ posts }: Props) {
  const [isClicked, setIsClicked] = useRecoilState(clickedSideBarAtom);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      assertIsNode(e.target);
      
      if (ref.current && !ref.current.contains(e.target)) {
        setIsClicked(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [setIsClicked]);

  if(!isClicked)
    return null;

  return (
    <aside 
     ref={ref}
      className='lg:w-1/5 min-w-[230px] shadow-xl max-h-screen h-full z-30 fixed flex-col bg-bgMain p-2 mb-14 flex'
    >
      <button className="self-end text-3xl font-bold"
      onClick={() => setIsClicked(false)}><FaTimes/></button>
      <Categories posts={posts}/>
      <UserInfo/>
    </aside>
  );
}
