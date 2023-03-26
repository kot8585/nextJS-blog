import Banner from "@/components/Banner";
import React from "react";
import { getSortedPostsData } from "@/utils/post";
import PostsGrid from "@/components/PostsGrid";

export default async function page() {
  const posts = await getSortedPostsData();

  return (
    <>
      <Banner title="코드를 비추는 MOON DEV" url="/images/home.gif" />
      <PostsGrid posts={posts} />
    </>
  );
}
