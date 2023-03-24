import { PostData } from "../utils/post";
import PostCard from "./PostCard";

type Props = {
  allPostsData: PostData[];
};

export default function PostsList({ allPostsData }: Props) {
  return (
    <ul>
      {allPostsData.map((postData: PostData) => (
        <PostCard postData={postData} key={postData.id} />
      ))}
    </ul>
  );
}
