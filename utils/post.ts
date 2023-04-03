import fs from "fs";
import { readFile, readdir } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import remarkGfm from "remark-gfm";
import rehypePrism from 'rehype-prism-plus';


const postsDirectory = path.join(process.cwd(), "posts");

export type FrontMatter = {
  title: string;
  date: string;
  category: string;
  description: string;
  imageUrl: string;
};

export type PostData = {
  id: string;
  content: string;
  frontMatter: FrontMatter;
};

export type Heading = {
  text: string;
  link: string;
  count: number;
};

export type Post<TFrontMatter> = {
  source: MDXRemoteSerializeResult;
  frontMatter: TFrontMatter;
  headings: Heading[];
};

export async function getSortedPostsData(): Promise<PostData[]> {
  console.log('sorted post 불림');
  // Get file names under /posts
  const fileNames = await readdir(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    return {
      id,
      content: content,
      frontMatter: data as FrontMatter,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.frontMatter.date < b.frontMatter.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export type postIds = {
  params: {
    id: string;
  };
};
export async function getAllPostIds() {
  const fileNames = await readdir(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}

export async function getPostData(id: string): Promise<Post<FrontMatter>> {
  const postFilePath = path.join(
    path.join(process.cwd(), "posts"),
    `${id}.mdx`
  );
  const file = await readFile(postFilePath);

  const { content, data } = matter(file);

  const headings = getHeadings(content);

  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    },
    scope: data,
  });

  return {
    source,
    frontMatter: data as FrontMatter,
    headings,
  };
}

export function getHeadings(content: string): Heading[] {
  // 게시물 본문을 줄바꿈 기준으로 나누고, 제목 요소인 것만 저장
  const headings = content
    .split(`\n`)
    .filter((str) => str.includes("# ") && str[0] === "#")
    .map((item) => {
      let count = item.match(/#/g)?.length!;
      
      //title의 백틱과 고액 없애줌
      const text = item
        .split("# ")[1]
        .replace(/`/g, "")
        .replace("\\", "")
        .trim();

      const link = text.replaceAll(" ", "_");

      return {
        text,
        link: `#${link}`,
        count
      };
    });

  return headings;
}
