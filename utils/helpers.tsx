import { ReactElement } from 'react';
import styles from '../styles/SplitWord.module.scss';

export function splitToSpan(text: string) {
  let result: ReactElement[] = [];
  text.split('').map((letter, i) => {
    return result.push(
      <span className={styles.splitted__letter} key={i}>
        <span>{letter}</span>
      </span>,
    );
  });
  result.push(<span key={result.length + 1}></span>);
  return result;
}
