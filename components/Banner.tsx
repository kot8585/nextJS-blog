import Image from "next/image";
import Link from "next/link";
import React from "react";
import Date from "./Date";

type Props = {
  title: string;
  url: string;
  date?: string;
  category?: string;
};

export default function Banner({ title, date, url, category }: Props) {
  return (
    <section className="relative w-full h-3/5 max-h-[400px] text-center">
      <div className="absolute w-full h-full opacity-40">
        <Image src={url} alt="background image" fill priority></Image>
      </div>
      <div className="absolute z-10 flex h-full w-full justify-center items-center flex-col">
        <h1 className="text-5xl font-bold p-3">{title}</h1>
        <Link href={`/posts/category/${category}`} className="flex gap-3">
          <span className="bg-gradient-to-r from-middle to-end rounded-full px-2 text-black">
            {category}
          </span>
          <span>{date && <Date dateString={date} />}</span>
        </Link>
      </div>
    </section>
  );
}
