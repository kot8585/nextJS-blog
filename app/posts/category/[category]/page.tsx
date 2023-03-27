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
      <h2>{category}</h2>
      <FilterablePosts posts={posts} category={category} />
    </>
  );
}
