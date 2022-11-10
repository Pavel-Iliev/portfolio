import React from 'react';
import ThemeSwitch from '../hooks/ThemeSwitch';
import styles from '../../styles/Header.module.scss';
import Typewriter from 'typewriter-effect';
import UseMediaQuery from '../hooks/UseMediaQuery';

type Classes = {
  classes: string;
};

const hiWords: string[] = ['Hi,', 'Ciao,', 'Здравеи,', 'Hallo,', 'Hola,', 'Bonjour', 'こんにちは,'];

export default function Header({ classes }: Classes) {
  // const isMobile = UseMediaQuery(600);
  // const hamburgerMenu = isMobile && 'sticazzi';
  return (
    <>
      <section className={styles[classes]}>
        <div className={styles.container}>
          <h1>Header</h1>
          <p>Text paragraph</p>
          <ThemeSwitch />
          <h2>
            <Typewriter
              options={{
                strings: hiWords,
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
