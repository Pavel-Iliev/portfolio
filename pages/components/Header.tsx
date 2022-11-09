import React from 'react';

type Classes = {
  classes: string;
};

export default function Header({ classes }: Classes) {
  return (
    <>
      <section className={classes}>
        <h1>Header</h1>
        <p>Text paragraph</p>
      </section>
    </>
  );
}
