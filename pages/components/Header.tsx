import React from 'react';
import ThemeSwitch from '../hooks/ThemeSwitch';
import styles from '../../styles/Header.module.scss';

type Classes = {
  classes: string;
};

export default function Header({ classes }: Classes) {
  return (
    <>
      <section className={styles[classes]}>
        <div className={styles.container}>
          <h1>Header</h1>
          <p>Text paragraph</p>
          <ThemeSwitch />
        </div>
      </section>
    </>
  );
}
