import React from 'react';
import styles from '../../../styles/Header/Presentation.module.scss';
import Typewriter from 'typewriter-effect';
import { HI_WORDS } from '../../../utils/constants';
import { labels } from '../../../utils/labels';

export default function Presentation() {
  function presentationMeNewLine(
    word: string,
    tag: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>,
  ) {
    const presentationMe = labels.presentation_me.split(word);
    let result: (string | React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>)[] = [];
    presentationMe.forEach((w, i) => {
      result.push(w);
      if (i < presentationMe.length - 1) {
        result.push(tag);
      }
    });
    return result;
  }

  return (
    <div className={styles.presentation}>
      <h3 className={styles.presentation__hi}>
        <Typewriter
          options={{
            strings: HI_WORDS,
            delay: 200,
            autoStart: true,
            loop: true,
          }}
        />
      </h3>
      <div className={styles.presentation__me}>
        <h1>
          <>
            {presentationMeNewLine('[BR]', <br />).map((el, i) =>
              el && typeof el === 'string' ? <span key={i}>{el}</span> : el,
            )}
          </>
        </h1>
        <p>{labels.front_end_passion}</p>
      </div>
      <div className={styles.presentation__contact}>
        <button className={styles.button}>{labels.contact_me}</button>
      </div>
    </div>
  );
}
