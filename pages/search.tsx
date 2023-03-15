import { useRouter } from "next/router";
import Helmet from "../components/Helmet";
import styled from "styled-components";
import PostCard from "@/components/PostCard";

export default function Search({ allPostsData }) {
  const router = useRouter();
  const keyword = router.query.q;
  const filterPostData = allPostsData.filter((post) =>
    post.content.toLowerCase().includes(keyword)
  );
  return (
    <>
      <Helmet title="Home" />
      {/* <User /> */}
      <p>
        {filterPostData.length > 0
          ? `${filterPostData.length}개의 검색결과가 있어요`
          : "검색결과가 없어요"}
      </p>
      <Ul>
        {filterPostData &&
          filterPostData.map((postData) => (
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
