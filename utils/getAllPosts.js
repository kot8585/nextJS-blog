import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";

const postsDirectory = path.join(process.cwd(), "pages", "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const dirFiles = fs.readdirSync(postsDirectory, {
    withFileTypes: true,
  });

  const allPostsData = dirFiles
    .map((file) => {
      if (!file.name.endsWith(".mdx")) return;

      // Remove ".mdx" from file name to get id
      const id = file.name.replace(/\.mdx$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, file.name);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        content: matterResult.content,
        ...matterResult.data,
      };
    })
    .filter((post) => post);
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const contents = getContents(matterResult.content);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(prism)
    .use(html, { sanitize: false })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    contents,
    ...matterResult.data,
  };
}
