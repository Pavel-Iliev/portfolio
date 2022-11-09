import React from 'react';
import ThemeSwitch from '../hooks/ThemeSwitch';

type Classes = {
  classes: string;
};

export default function Header({ classes }: Classes) {
  return (
    <>
      <section className={classes}>
        <h1>Header</h1>
        <p>Text paragraph</p>
        <ThemeSwitch />
      </section>
    </>
  );
}
