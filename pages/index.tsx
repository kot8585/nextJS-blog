import { getSortedPostsData } from "../lib/posts";
import Helmet from "../components/Helmet";
import PostCard from "../components/PostCard";
import styled from "styled-components";

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
      <Ul>
        {allPostsData.map((postData: PostData) => (
          <PostCard postData={postData} key={postData.id} />
        ))}
      </Ul>
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

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;
