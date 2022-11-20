import React from 'react';
import styles from '../../../styles/Header/Presentation.module.scss';
import Typewriter from 'typewriter-effect';
import { HI_WORDS } from '../../../utils/constants';
import { labels } from '../../../utils/labels';

export default function Presentation() {
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
          {labels.i_am_pavel}
          <br />
          {labels.full_stack}
        </h1>
        <p>{labels.front_end_passion}</p>
      </div>
      <div className={styles.presentation__contact}>
        <button className={styles.button}>{labels.contact_me}</button>
      </div>
    </div>
  );
}
