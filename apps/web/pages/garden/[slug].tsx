import { readdirSync } from 'fs';
import {
  getParsedFileContentBySlug,
  renderMarkdown,
} from '@kado-create/markdown';
import { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';

export interface GardenProps extends ParsedUrlQuery {
  slug: string;
}

const POSTS_PATH = join(process.cwd(), '_posts');

export function Garden({ frontMatter }) {
  console.log(join(__dirname, 'tailwind.config.js'));

  return (
    <div className="m-6">
      <article className="prose prose-lg">
        <h1>{frontMatter.title}</h1>
        <p>{frontMatter.date}</p>
      </article>
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

  // const renderHtml = renderMarkdown(postMarkdownContent);

  return {
    props: {
      frontMatter: postMarkdownContent.frontMatter,
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
