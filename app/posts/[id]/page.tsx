import Date from "@/components/Date";
import Helmet from "@/components/Helmet";
import { MdxContent } from "@/components/MdxContent";
import Toc from "@/components/Toc";
import {
  getAllPostIds,
  FrontMatter,
  postIds,
  getPost,
  getPostData,
} from "@/utils/post";

type Props = {
  params: {
    id: string;
  };
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
        <MdxContent source={source} />
      </article>
      <Toc headings={contents} />
    </>
  );
}

export async function generateStaticParams() {
  return getAllPostIds();
}
