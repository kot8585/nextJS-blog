import Date from "@/components/Date";
import Helmet from "@/components/Helmet";
import MDXComponents from "@/components/MDXComponents";
import Toc from "@/components/Toc";
import { getAllPostIds, getPostData, FrontMatter, postIds } from "@/utils/post";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

type Props = {
  params: {
    id: string;
  };
};

type MdxPostData = {
  source: MDXRemoteSerializeResult;
  frontMatter: FrontMatter;
  contents: { content: string; link: string };
};

export default async function PostPage({ params: { id } }: Props) {
  const { source, frontMatter, contents } = await getPostData(id);

  return (
    <>
      <Helmet title={frontMatter.title} />

      <article>
        <div className="post-header">
          <h1>{frontMatter.title}</h1>
          <span>
            <Date dateString={frontMatter.date} />
          </span>
        </div>
        <hr />
        <MDXRemote {...source} components={MDXComponents} />
      </article>
      <Toc headings={contents} />
    </>
  );
}

export async function generateStaticParams() {
  return getAllPostIds();
}
