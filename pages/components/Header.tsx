import React from 'react';
import styles from '../../styles/Header.module.scss';
import Typewriter from 'typewriter-effect';
import { HI_WORDS } from '../../utils/constants';
import NavBar from './NavBar';

type Classes = {
  classes: string;
};

export default function Header({ classes }: Classes) {
  return (
    <>
      <section className={styles[classes]}>
        <div className={styles.container}>
          <NavBar />
          <h2>
            <Typewriter
              options={{
                strings: HI_WORDS,
                delay: 200,
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
      </section>
    </>
  );
}
