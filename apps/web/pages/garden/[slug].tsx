import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import styles from './index.module.css';

/* eslint-disable-next-line */
export interface GardenProps extends ParsedUrlQuery {
  slug: string;
}

export function Garden(props: GardenProps) {
  const { slug } = props;
  return (
    <div className={styles['container']}>
      <h1>Welcome to {slug} page!</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: GardenProps;
}) => {
  return {
    props: {
      slug: params.slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths<GardenProps> = async () => {
  return {
    paths: [
      {
        params: {
          slug: 'garden',
        },
      },
      {
        params: {
          slug: 'garden2',
        },
      },
    ],
    fallback: false,
  };
};

export default Garden;
