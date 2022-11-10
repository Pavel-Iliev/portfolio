import React from 'react';
import UseMediaQuery from '../hooks/UseMediaQuery';
import ThemeSwitch from '../hooks/ThemeSwitch';

export default function NavBar() {
  const isMobile = UseMediaQuery(600);
  const menu = isMobile && 'menu';
  return (
    <>
      <h1>Header</h1>
      <p>Text paragraph</p>
      {menu}
      <ThemeSwitch />
    </>
  );
}
