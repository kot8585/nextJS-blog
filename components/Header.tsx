import React from "react";
import { GoSearch } from "react-icons/go";
import { BsFillSunFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">HyoJeong Blog</Link>
      <button>
        <GoSearch />
      </button>
      <button>
        <BsFillSunFill />
      </button>
    </header>
  );
}
