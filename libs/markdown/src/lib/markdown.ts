import { readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

import { serialize } from 'next-mdx-remote/serialize';

export const getParsedFileContentBySlug = (
  fileName: string,
  postPath: string
) => {
  const fullPath = join(postPath, `${fileName}.mdx`);
  const fileContent = readFileSync(fullPath);

  const { data, content } = matter(fileContent);

  return { frontMatter: data, content };
};

export function renderMarkdown(markdownContent: string) {
  return serialize(markdownContent || '');
}
