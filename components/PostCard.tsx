import React from "react";
import Date from "@/components/Date";
import Link from "next/link";
import { PostData } from "@/utils/post";
import Image from "next/image";

type Props = {
  postData: PostData;
};

export default function PostCard({
  postData: { id, content, frontMatter },
}: Props) {
  return (
    <Link href={`/posts/${id}`}>
      <article className="rounded-md overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 border border-borderMain">
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
          <div className="flex items-center">
            <div className="m-2 p-[1px] rounded-full bg-gradient-to-r from-middle to-end ">
              <div className="bg-bgMain rounded-full px-2 ">
                {frontMatter.category}
              </div>
            </div>
            <Date dateString={frontMatter.date} />
          </div>
        </div>
      </article>
    </Link>
  );
}
