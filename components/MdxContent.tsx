"use client";

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

//❗️ 도대체 타입이 모지이이이이이ㅣㅣ이이이이이이이이???????????????/
const Heading2 = ({ children }) => {
  const idText = children.replace(/ /g, "_").toLowerCase();

  return <h2 id={idText}>{children}</h2>;
};

const MdxComponents = {
  h2: Heading2,
  // h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
  //   <h1 style={{ color: "#FFF676" }} {...props} />
  // ),
};

export function MdxContent({ source }: MdxContentProps) {
  return <MDXRemote {...source} components={MdxComponents} />;
}
