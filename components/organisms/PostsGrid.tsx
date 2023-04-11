import { PostData } from "../../service/post";
import PostCard from "../molecules/PostCard";

type Props = {
  posts: PostData[];
};

export default function PostsGrid({ posts }: Props) {
  return (
    <ul className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-3">
      {posts.map((postData: PostData) => {
        return <PostCard postData={postData} key={postData.id} />;
      })}
    </ul>
  );
}
