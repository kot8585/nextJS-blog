import HomePage from "./HomePage";
import { getSortedPostsData } from "../lib/posts";
import Helmet from "../components/Helmet";
import Date from "@/components/date";

type HomeProps = {
  allPostsData: {
    id: string;
    date: string;
    title: string;
  }[];
};

export default function Home({ allPostsData }: HomeProps) {
  return (
    <>
      <Helmet title="Home" />
      <HomePage />
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            {title}
            <br />
            {id}
            <br />
            <Date dateString={date} />
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
