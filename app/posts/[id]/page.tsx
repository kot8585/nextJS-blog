import Banner from "@/components/Banner";
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

      <article className="h-full mx-auto">
        <Banner
          title={frontMatter.title}
          url={frontMatter.imageUrl}
          date={frontMatter.date}
          category={frontMatter.category}
        />
        <section className="max-w-none flex relative gap-8 justify-center px-5 dark:prose-invert prose lg:prose-xl">
          <section className="xl:w-3/4">
            <MdxContent source={source} />
          </section>
          <Toc headings={contents} />
        </section>
      </article>
    </>
  );
}

export async function generateStaticParams() {
  return getAllPostIds();
}
