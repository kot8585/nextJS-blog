import Banner from "@/components/Banner";
import Date from "@/components/Date";
import Helmet from "@/components/Helmet";
import { MdxContent } from "@/components/MdxContent";
import Toc from "@/components/Toc";
import { getAllPostIds, getPostData } from "@/utils/post";

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

      <article className="h-full">
        <Banner
          title={frontMatter.title}
          url={frontMatter.image}
          date={frontMatter.date}
          category={frontMatter.category}
        />
        <MdxContent source={source} />
      </article>
      <Toc headings={contents} />
    </>
  );
}

export async function generateStaticParams() {
  return getAllPostIds();
}
