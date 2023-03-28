import React from "react";
import { PostData } from "../utils/post";
import PostsGrid from "./PostsGrid";

type Props = {
  posts: PostData[];
  category: string;
};

export default function FilterablePosts({ posts, category }: Props) {
  const filteredPosts = posts.filter(
    (post) => post.frontMatter.category === category
  );
  return <PostsGrid posts={filteredPosts} />;
}
