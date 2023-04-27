"use client";

import { GoSearch } from "react-icons/go";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { PostData } from "../../service/post";
import PostsGrid from "./PostsGrid";

type Props = {
  posts: PostData[];
};

export default function PostSearch({ posts }: Props) {
  const [text, setText] = useState<string>("");
  const [searchedPosts, setSearchedPosts] = useState<PostData[] | undefined>(
    undefined
  );
  const timeoutId = useRef<number | null>(null);

  const searchByText = (text: string) => {
    if (!text) {
      setSearchedPosts(undefined);
      return;
    }
    const searchPosts = posts.filter((post) =>
      post.content.toLowerCase().includes(text)
    );
    setSearchedPosts(searchPosts);
  };

  const debounceSearch = (callback: (text: string) => void, delay: number) => {
    if (timeoutId.current) {
      window.clearTimeout(timeoutId.current);
    }
    timeoutId.current = window.setTimeout(callback, delay);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    debounceSearch(() => searchByText(e.target.value), 500);
  };

  return (
    <section className="w-5/6 flex-col mx-auto  mt-20">
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
        {text &&
          searchedPosts &&
          (searchedPosts.length > 0
            ? `총 ${searchedPosts.length}개의 포스트를 찾았습니다.`
            : "검색 결과가 없습니다.")}
      </p>
      {searchedPosts && <PostsGrid posts={searchedPosts} />}
    </section>
  );
}
