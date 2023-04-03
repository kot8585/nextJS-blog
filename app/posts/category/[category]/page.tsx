import FilterablePosts from "@/components/FilterablePosts";
import { getSortedPostsData } from "@/utils/post";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: {
    category: string;
  };
};

export async function generateMetadata({ params: { category } }: Props): Promise<Metadata> {
  return { 
    title: `Moon.dev | ${category}`, 
    description: `Moon.dev 블로그의 ${category}`,
    category,
  }
}

export default async function page({ params: { category } }: Props) {
  const posts = await getSortedPostsData();
  return (
    <>
      <h2 className="text-center bg-gradient-to-r from-end  to-middle bg-[length:15%_3px] bg-no-repeat bg-bottom p-1 text-3xl my-3">
        {category}
      </h2>
      <FilterablePosts posts={posts} category={category} />
    </>
  );
}
