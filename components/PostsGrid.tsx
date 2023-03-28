import { PostData } from "../utils/post";
import PostCard from "./PostCard";

type Props = {
  posts: PostData[];
};

export default function PostsGrid({ posts }: Props) {
  return (
    <ul className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-3">
      {posts.map((postData: PostData) => {
        {/* @ts-expect-error Server Component */}
        return <PostCard postData={postData} key={postData.id} />;
      })}
    </ul>
  );
}
