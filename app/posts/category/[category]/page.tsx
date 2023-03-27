import FilterablePosts from "@/components/FilterablePosts";
import { getSortedPostsData } from "@/utils/post";
import React from "react";

type Props = {
  params: {
    category: string;
  };
};

export default async function page({ params: { category } }: Props) {
  const posts = await getSortedPostsData();
  return (
    <>
      <h2 className="text-center bg-gradient-to-r from-end  to-middle bg-[length:15%_3px] bg-no-repeat bg-bottom p-1 text-3xl">
        {category}
      </h2>
      <FilterablePosts posts={posts} category={category} />
    </>
  );
}
