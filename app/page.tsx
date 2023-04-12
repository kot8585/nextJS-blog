import Banner from "@/components/molecules/Banner";
import React from "react";
import { getSortedPostsData } from "@/service/post";
import PostsGrid from "@/components/organisms/PostsGrid";

export default async function page() {
  const posts = await getSortedPostsData();

  return (
    <>
      <Banner title="코드를 비추는 MOON DEV" url="/images/home.gif" />
      <PostsGrid posts={posts} />
    </>
  );
}
