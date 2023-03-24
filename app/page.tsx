import Banner from "@/components/Banner";
import PostsList from "@/components/PostsList";
import React from "react";
import { getSortedPostsData } from "@/utils/post";

export default function page() {
  const posts = getSortedPostsData();

  return (
    <>
      <Banner title="코드를 비추는 MOON DEV" url="/images/home.gif" />
      <PostsList allPostsData={posts} />
    </>
  );
}
