import Helmet from "../components/Helmet";
import styled from "styled-components";
import PostCard from "@/components/PostCard";
import { PostData } from "@/utils/post";

type Props = {
  allPostsData: PostData[];
};
export default function Home({ allPostsData }: Props) {
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
