import React from 'react';
import styles from '../../styles/Header.module.scss';
import NavBar from './NavBar';
import { Header as HeaderTypes } from '../../utils/types';
import Presentation from './Header/Presentation';

export default function Header(props: HeaderTypes) {
  const { activeMenuLinkId, setActiveMenuLinkId, onMenuLink } = props;

  return (
    <>
      <div className={styles.container}>
        <NavBar activeMenuLinkId={activeMenuLinkId} setActiveMenuLinkId={setActiveMenuLinkId} onMenuLink={onMenuLink} />
        <div className={styles.container__body}>
          <Presentation />
          {/* <Info /> */}
        </div>
      </div>
    </>
  );
}
