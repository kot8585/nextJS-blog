import { getSortedPostsData } from "@/lib/posts";
export async function getStaticProps() {
  console.log("getstaticprops 실행");
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
