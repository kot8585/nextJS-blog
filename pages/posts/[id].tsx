import Toc from "@/components/Toc";
import { getAllPostIds, getPostData, postIds } from "@/utils/post";
import { MDXRemote } from "next-mdx-remote";

import MDXComponents from "../../components/MDXComponents";

export default function PostPage({ source, frontMatter, contents }) {
  return (
    <>
      <Toc headings={contents} />
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {/* {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )} */}
      </div>
      <main>
        <MDXRemote {...source} components={MDXComponents} />
      </main>
    </>
  );
}

export const getStaticProps = async ({ params }: postIds) => {
  const post = await getPostData(params.id);

  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};
