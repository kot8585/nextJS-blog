import Date from "@/components/Date";
import Helmet from "@/components/Helmet";
import { getAllPostIds, getPostData } from "@/lib/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import styled from "styled-components";
import { SmallSpan } from "../../components/PostCard";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <>
      <Helmet title={postData.title} />
      <Title>{postData.title}</Title>
      <SmallSpan>
        <Date dateString={postData.date} />
      </SmallSpan>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  //id로 사용 가능한 배열을 리턴해야 한다.
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //id를 사용해서 fetch할 데이터들
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};

const Title = styled.h1`
  font-size: 32px;
  margin: 2px;
`;
