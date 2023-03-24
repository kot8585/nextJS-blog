import React from "react";
import Date from "@/components/Date";
import Link from "next/link";
import { PostData } from "@/utils/post";

type Props = {
  postData: PostData;
};
export default function PostCard({
  postData: { id, content, frontMatter },
}: Props) {
  return (
    <Link href={`/posts/${id}`}>
      <li key={id}>
        <h2>{frontMatter.title}</h2>
        <span>{id}</span>
        <span>
          <Date dateString={frontMatter.date} />
        </span>
      </li>
    </Link>
  );
}
