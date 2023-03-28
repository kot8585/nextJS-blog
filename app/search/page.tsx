import { getSortedPostsData } from "../../utils/post";
import SearchPosts from "@/components/SearchPosts";

export default async function SearchPage() {
  const posts = await getSortedPostsData();
  return (
    <>
      <SearchPosts posts={posts} />
    </>
  );
}
