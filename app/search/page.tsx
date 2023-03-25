import { getSortedPostsData } from "../../utils/post";
import SearchPosts from "@/components/SearchPosts";

export default function SearchPage() {
  const posts = getSortedPostsData();
  return (
    <>
      <SearchPosts posts={posts} />
    </>
  );
}
