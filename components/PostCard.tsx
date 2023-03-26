import React from "react";
import Date from "@/components/Date";
import Link from "next/link";
import { PostData } from "@/utils/post";
import Image from "next/image";

type Props = {
  postData: PostData;
};

export default async function PostCard({
  postData: { id, content, frontMatter },
}: Props) {
  return (
    <Link href={`/posts/${id}`}>
      <article className="rounded-md overflow-hidden shadow-md hover:shadow-xl">
        <Image
          className="w-full aspect-video"
          src={frontMatter.imageUrl}
          alt={frontMatter.title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center p-4">
          <h3 className="text-lg font-bold line-clamp-1">
            {frontMatter.title}
          </h3>
          <p className="w-full h-12 text-center line-clamp-2">
            {frontMatter.description}
          </p>
          <span className="text-sm rounded-lg bg-green-100 px-2 my-2">
            {frontMatter.category}
          </span>
          <Date dateString={frontMatter.date} />
        </div>
      </article>
    </Link>
  );
}
