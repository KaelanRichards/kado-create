import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface FrontMatter {
  [prop: string]: string;
}

export interface MarkdownRenderingResult {
  frontMatter: FrontMatter;
  html: MDXRemoteSerializeResult;
}
