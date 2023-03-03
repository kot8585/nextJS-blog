import Head from "next/head";

type HelmetProps = {
  title: string;
};
//TODO: author도 넣을 수 있어?
export default function Helmet({ title }: HelmetProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
