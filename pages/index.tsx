import { getSortedPostsData } from "../lib/posts";
import Helmet from "../components/Helmet";
import PostCard from "./PostCard";

type HomeProps = {
  allPostsData: PostData[];
};

export type PostData = {
  id: string;
  date: string;
  title: string;
};

export default function Home({ allPostsData }: HomeProps) {
  return (
    <>
      <Helmet title="Home" />
      {/* <User /> */}
      <ul>
        {allPostsData.map((postData: PostData) => (
          <PostCard postData={postData} key={postData.id} />
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
