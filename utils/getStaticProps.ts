import { getSortedPostsData } from "@/utils/post";
import { GetStaticProps } from "next";
export const getStaticProps: GetStaticProps = async () => {
  console.log("getstaticprops 실행");
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
