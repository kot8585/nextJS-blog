"use client";

import { GoSearch } from "react-icons/go";
import { ChangeEvent, useState } from "react";
import { PostData } from "../utils/post";
import PostCard from "./PostCard";
import Helmet from "./Helmet";

type Props = {
  posts: PostData[];
};

export default function SearchPosts({ posts }: Props) {
  const [text, setText] = useState<string>("");

  let filterPostData;
  if (text) {
    filterPostData = posts.filter((post) =>
      post.content.toLowerCase().includes(text)
    );
  }
  console.log("filterPostData", !!filterPostData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <section className="w-5/6 flex-col mx-auto  mt-20">
      <Helmet title="Home" />
      <div className="w-full relative">
        <input
          className="w-full h-13 p-2 pl-10"
          placeholder="검색어를 입력해주세요"
          value={text}
          onChange={handleChange}
        />
        <GoSearch className="absolute left-3 top-3 text-xl" />
      </div>
      <p className="py-5">
        {filterPostData &&
          (filterPostData.length > 0
            ? `총 ${filterPostData.length}개의 포스트를 찾았습니다.`
            : "검색 결과가 없습니다.")}
      </p>
      <ul>
        {filterPostData &&
          filterPostData.map((postData) => (
            <PostCard postData={postData} key={postData.id} />
          ))}
      </ul>
    </section>
  );
}
