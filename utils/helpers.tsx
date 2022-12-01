import { ReactElement } from 'react';
import styles from '../styles/SplitWord.module.scss';

export function splitToSpan(text: string) {
  let result: ReactElement[] = [];
  text.split('').map((letter, i) => {
    return result.push(<span key={i}>{letter}</span>);
  });
  result.push(<span key={result.length + 1}></span>);
  return result;
}

export function wordSplitImage(text: string) {
  let result: ReactElement[] = [];
  text.split('').map((letter, i) => {
    return result.push(
      <span key={i} className={styles.letter}>
        <span>{letter}</span>
      </span>,
    );
  });
  result.push(<span key={result.length + 1}></span>);
  return result;
}
