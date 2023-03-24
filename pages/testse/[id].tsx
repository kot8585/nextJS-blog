import Date from "@/components/Date";
import Helmet from "@/components/Helmet";
import Toc from "@/components/Toc";
import { getAllPostIds, getPostData, FrontMatter, postIds } from "@/utils/post";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import styled from "styled-components";

import MDXComponents from "../../components/MDXComponents";

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: FrontMatter;
  contents: { content: string; link: string };
};

export default function PostPage({ source, frontMatter, contents }: Props) {
  return (
    <>
      <Helmet title={frontMatter.title} />

      <Article>
        <div className="post-header">
          <h1>{frontMatter.title}</h1>
          <span>
            <Date dateString={frontMatter.date} />
          </span>
        </div>
        <hr />
        <MDXRemote {...source} components={MDXComponents} />
      </Article>
      <Toc headings={contents} />
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
  };
};

const Article = styled.article`
  margin: 0 auto;
  width: 100%;
`;
