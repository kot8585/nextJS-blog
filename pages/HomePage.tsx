import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <div>
        <Image src="/person.jpg" alt="작성자 사진" width="30" height="30" />
        <span>HyoJeong Moon</span>
        <span>어떤 개발자?</span>
      </div>
      <ul>
        <li onClick={() => router.push("/post")}>
          <h1>글 제목</h1>
          <p>글 설명</p>
          <span>2022년 6월 6일</span>
        </li>
      </ul>
    </>
  );
}
