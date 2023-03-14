// ./components/PostLayout.js

import { renderToString } from "react-dom/server";
import { MDXProvider } from "@mdx-js/react";

import MDXComponents from "./MDXComponents";

const PostLayout = ({ meta, children }) => {
  const contentString = renderToString(children);

  const getHeadings = (source) => {
    const regex = /<h2>(.*?)<\/h2>/g;

    if (source.match(regex)) {
      return source.match(regex).map((heading) => {
        const headingText = heading.replace("<h2>", "").replace("</h2>", "");

        const link = "#" + headingText.replace(/ /g, "_").toLowerCase();

        return {
          text: headingText,
          link,
        };
      });
    }

    return [];
  };

  const headings = getHeadings(contentString);

  return (
    <>
      <header>
        <h1>{meta.title}</h1>
        {meta.createdAt} - {meta.readTime} minutes read
      </header>

      {headings.length > 0 ? (
        <ol>
          {headings.map((heading) => (
            <li key={heading.text}>
              <a href={heading.link}>{heading.text}</a>
            </li>
          ))}
        </ol>
      ) : null}

      <MDXProvider components={MDXComponents}>
        <>{children}</>
      </MDXProvider>
    </>
  );
};

export default PostLayout;
