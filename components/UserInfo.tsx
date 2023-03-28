import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BsPersonVcard } from "react-icons/bs";

export default function UserInfo() {
  return (
    <section className="flex justify-evenly">
      <Link href='https://github.com/kot8585' className="flex flex-col items-center" >
        <AiFillGithub className="w-12 h-12"/>
        <span>Github</span>
      </Link>
      <Link href='https://spangle-nickel-826.notion.site/5abdc6283a284687974e3ca532c83b11?v=145dc9da558f4f5bb1ff55040b0a199f' className="flex flex-col items-center">
        <BsPersonVcard className="w-11 h-12" />
        <span>Portfolio</span>
      </Link>
    </section>
  );
}
