import { readdirSync } from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';

export interface GardenProps extends ParsedUrlQuery {
  slug: string;
}

const POSTS_PATH = join(process.cwd(), '_posts');

export function Garden(props: GardenProps) {
  const { slug } = props;
  return (
    <div>
      <h1>Welcome to {slug} page!</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: GardenProps;
}) => {
  const { slug } = params;

  return {
    props: {
      slug: slug,
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
