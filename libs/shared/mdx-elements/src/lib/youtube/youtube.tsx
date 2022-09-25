import styles from './youtube.module.css';

/* eslint-disable-next-line */
export interface YoutubeProps {
  title: string;
  uid: string;
}

export function Youtube(props: YoutubeProps) {
  return (
    <div>
      <iframe
        className={styles['video']}
        src={`https://www.youtube.com/embed/${props.uid}`}
        title={props.title}
        allowFullScreen
        width="100%"
      />
    </div>
  );
}

export default Youtube;
