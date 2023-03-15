import Helmet from "../components/Helmet";
import styled from "styled-components";
import PostCard from "@/components/PostCard";

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

export { getStaticProps } from "../utils/getStaticProps";

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;
