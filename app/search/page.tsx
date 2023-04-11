import { Metadata } from "next";
import { getSortedPostsData } from "../../service/post";
import PostSearch from "@/components/organisms/PostSearch";

export const metadata: Metadata = {
  title: "Post Search",
  description : "Search Posts in Moon.dev blog"
}
export default async function SearchPage() {
   
  const posts = await getSortedPostsData();
  return (
    <>
      <PostSearch posts={posts} />
    </>
  );
}
