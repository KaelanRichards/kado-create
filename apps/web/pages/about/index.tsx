import styles from './index.module.css';

/* eslint-disable-next-line */
export interface AboutProps {
  name: string;
}

export function About(props: AboutProps) {
  const { name } = props;

  return (
    <div className={styles['container']}>
      <h1>Welcome to {name} page!</h1>
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      name: 'About',
    },
  };
};

export default About;
