"use client";

import { GoSearch } from "react-icons/go";
import { ChangeEvent, useState } from "react";
import { PostData } from "../utils/post";
import PostCard from "./PostCard";
import Helmet from "./Helmet";
import PostsGrid from "./PostsGrid";

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <section className="w-5/6 flex-col mx-auto  mt-20">
      <Helmet title="Home" />
      <div className="w-full relative">
        <input
          className="w-full h-14 p-2 pl-12 bg-bgSub text-xl outline-none focus:border"
          placeholder="검색어를 입력해주세요"
          value={text}
          onChange={handleChange}
          autoFocus
        />
        <GoSearch className="absolute left-3 top-4 text-2xl" />
      </div>
      <p className="py-5">
        {filterPostData &&
          (filterPostData.length > 0
            ? `총 ${filterPostData.length}개의 포스트를 찾았습니다.`
            : "검색 결과가 없습니다.")}
      </p>
      {/* TODO: postList 만들기 */}
      <ul>{filterPostData && <PostsGrid posts={filterPostData} />}</ul>
    </section>
  );
}
