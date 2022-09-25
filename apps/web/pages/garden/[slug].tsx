import { readdirSync } from 'fs';
import {
  getParsedFileContentBySlug,
  renderMarkdown,
} from '@kado-create/markdown';
import { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import { MDXRemote } from 'next-mdx-remote';
import dynamic from 'next/dynamic';
import { Youtube, CustomLink } from '@kado-create/shared/mdx-elements';

export interface GardenProps extends ParsedUrlQuery {
  slug: string;
}

const mdxElements = {
  Youtube: dynamic(() => Promise.resolve(Youtube)),
  a: CustomLink,
};

const POSTS_PATH = join(process.cwd(), process.env.postsMarkdownPath);

export function Garden({ frontMatter, html }) {
  return (
    <div className="m-6">
      <article className="prose prose-lg">
        <h1>{frontMatter.title}</h1>
        <p>{frontMatter.date}</p>
      </article>
      <hr />
      <MDXRemote {...html} components={mdxElements} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: GardenProps;
}) => {
  const { slug } = params;

  const postMarkdownContent = getParsedFileContentBySlug(slug, POSTS_PATH);

  const renderHtml = await renderMarkdown(postMarkdownContent.content);

  return {
    props: {
      frontMatter: postMarkdownContent.frontMatter,
      html: renderHtml,
    },
  };
};

export const getStaticPaths: GetStaticPaths<GardenProps> = async () => {
  const paths = readdirSync(POSTS_PATH).map((file) => ({
    params: {
      slug: file.replace(/\.mdx?$/, ''),
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export default Garden;
