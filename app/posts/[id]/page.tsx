import Banner from "@/components/Banner";
import Helmet from "@/components/Helmet";
import { MdxContent } from "@/components/MdxContent";
import Toc from "@/components/Toc";
import { FrontMatter, getAllPostIds, getPostData } from "@/utils/post";
import '../../../themes/prism-atom_dark.css'
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params: {id} }: Props): Promise<Metadata> {
  const {frontMatter: { title, category, description }} = await getPostData(id);
  return { title, category, description }
}


export default async function PostPage({ params: { id } }: Props) {
  const { source, frontMatter, headings } = await getPostData(id);

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
          <section className="xl:w-3/4 w-full">
            <MdxContent source={source} />
          </section>
          <Toc headings={headings} />
        </section>
      </article>
    </>
  );
}

export async function generateStaticParams() {
  return getAllPostIds();
}
