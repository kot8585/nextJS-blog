import Image from "next/image";
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
    <section className="relative w-full h-4/5 max-h-[600px]">
      <div className="absolute w-full h-full opacity-40">
        <Image src={url} alt="background image" fill></Image>
      </div>
      <div className="absolute z-10 flex h-full w-full justify-center items-center flex-col">
        <h1 className="text-5xl font-bold text-white">{title}</h1>
        <span>{category}</span>
        <span>{date && <Date dateString={date} />}</span>
      </div>
    </section>
  );
}
