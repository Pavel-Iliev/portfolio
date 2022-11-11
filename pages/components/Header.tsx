import React from 'react';
import styles from '../../styles/Header.module.scss';
import Typewriter from 'typewriter-effect';
import { HI_WORDS } from '../../utils/constants';
import NavBar from './NavBar';
import { Header as HeaderTypes } from '../../utils/types';

export default function Header(props: HeaderTypes) {
  const { activeMenuLinkId, setActiveMenuLinkId, onMenuLink } = props;
  return (
    <>
      <div className={styles.container}>
        <NavBar activeMenuLinkId={activeMenuLinkId} setActiveMenuLinkId={setActiveMenuLinkId} onMenuLink={onMenuLink} />
        <h2>
          {/* <Typewriter
            options={{
              strings: HI_WORDS,
              delay: 200,
              autoStart: true,
              loop: true,
            }}
          /> */}
        </h2>
      </div>
    </>
  );
}
