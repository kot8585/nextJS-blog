import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  url: string;
  date?: string;
};

export default function Banner({ title, date, url }: Props) {
  return (
    <section className="relative w-full h-3/5 bg-slate-300">
      <div className="absolute w-full h-full opacity-80">
        <Image src={url} alt="background image" fill></Image>
      </div>
      <div className="absolute z-10 flex h-full w-full justify-center items-center">
        <h1>{title}</h1>
        <span>{date}</span>
      </div>
    </section>
  );
}
