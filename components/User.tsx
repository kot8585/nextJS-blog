import Image from "next/image";

export default function User() {
  return (
    <>
      <Image
        src="/images/person.jpg"
        alt="작성자 사진"
        width="30"
        height="30"
      />
      <span>HyoJeong Moon</span>
      <span>어떤 개발자?</span>
    </>
  );
}
