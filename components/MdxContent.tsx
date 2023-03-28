"use client";

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { ReactNode } from 'react';

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

type Props = {
  children?: ReactNode;
}
const Heading2 = ({ children}: Props) => {
  const heading = children! as string;
  const idText = heading.replace(/ /g, "_");

  return (
    <h2 id={idText} className="scroll-mt-16">
    {children}
    </h2>
  );
};

const Heading3 = ({ children}: Props) => {
  const heading = children! as string;
  const idText = heading.replace(/ /g, "_");

  return (
    <h3 id={idText} className="scroll-mt-16 text-xl">
    {children}
    </h3>
  );
};

const MdxComponents = {
  h2: Heading2,
  h3: Heading3,
};

export function MdxContent({ source }: MdxContentProps) {
  return (
    <MDXRemote
    {...source}
    components={MdxComponents}
    />
  );
}
