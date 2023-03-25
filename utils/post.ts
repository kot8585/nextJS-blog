import fs from "fs";
import { readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

const postsDirectory = path.join(process.cwd(), "posts");

export type FrontMatter = {
  title: string;
  date: string;
  category: string;
  description: string;
};

export type PostData = {
  id: string;
  content: string;
  frontMatter: FrontMatter;
};

export type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};

export async function getPost(id: string): Promise<Post<FrontMatter>> {
  // Read the file from the filesystem
  const postFilePath = path.join(
    path.join(process.cwd(), "posts"),
    `${id}.mdx`
  );
  const raw = await readFile(postFilePath, "utf-8");

  // Serialize the MDX content and parse the frontmatter
  const serialized = await serialize(raw, {
    parseFrontmatter: true,
  });

  // Typecast the frontmatter to the correct type
  const frontmatter = serialized.frontmatter as FrontMatter;

  // Return the serialized content and frontmatter
  return {
    frontmatter,
    serialized,
  };
}

export function getSortedPostsData(): PostData[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
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
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const postFilePath = path.join(
    path.join(process.cwd(), "posts"),
    `${id}.mdx`
  );
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const contents = getContents(content);

  const mdxSource: MDXRemoteSerializeResult = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeHighlight],
    },
    scope: data,
  });

  return {
    source: mdxSource,
    frontMatter: data as FrontMatter,
    contents,
  };
}

export function getContents(content: string) {
  // 게시물 본문을 줄바꿈 기준으로 나누고, 제목 요소인 것만 저장
  const contents = content
    .split(`\n`)
    .filter((t) => t.includes("# ") && t[0] === "#")
    .map((t) => {
      //title의 백틱과 고액 없애줌
      const content = t
        .split("# ")[1]
        .replace(/`/g, "")
        .replace("\\", "")
        .trim();
      const link = content.replaceAll(" ", "_");
      return {
        content,
        link: `#${link}`,
      };
    });

  return contents;
}
