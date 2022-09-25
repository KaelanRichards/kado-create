import { readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

export const getParsedFileContentBySlug = (
  fileName: string,
  postPath: string
) => {
  const fullPath = join(postPath, `${fileName}.md`);
  const fileContent = readFileSync(fullPath);

  const { data, content } = matter(fileContent);

  return { frontMatter: data, content };
};

export function renderMarkdown(): string {
  return 'markdown';
}
