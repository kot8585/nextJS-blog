import React from "react";
import { GoSearch } from "react-icons/go";
import { BsFillSunFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">HyoJeong Blog</Link>
      <button>
        <BsFillSunFill />
      </button>
      <button>
        <GoSearch />
      </button>
    </header>
  );
}
