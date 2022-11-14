import React from 'react';
import styles from '../../styles/Header.module.scss';
import Typewriter from 'typewriter-effect';
import { HI_WORDS } from '../../utils/constants';
import NavBar from './NavBar';
import { Header as HeaderTypes } from '../../utils/types';
import { labels } from '../../utils/labels';

export default function Header(props: HeaderTypes) {
  const { activeMenuLinkId, setActiveMenuLinkId, onMenuLink } = props;

  const presentationMe = labels.presentation_me.split(' ');
  function presentationMeText(word, tag) {
    let text = '';
    presentationMe.forEach((w) => {
      if (w === word) {
        text += '\n';
      } else {
        text += w;
      }
    });
    console.log(text);
    return text;
  }

  return (
    <>
      <div className={styles.container}>
        <NavBar activeMenuLinkId={activeMenuLinkId} setActiveMenuLinkId={setActiveMenuLinkId} onMenuLink={onMenuLink} />
        <div className={styles.container__body}>
          <div className={styles.container__body__presentation}>
            <span className={styles.container__body__presentation__hi}>
              <Typewriter
                options={{
                  strings: HI_WORDS,
                  delay: 200,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <div className={styles.container__body__presentation__me}>
              <h1>
                I&apos;m Pavel,
                <br />
                Full-stack Developer
              </h1>
              <p>With passion for the Front-end and UI</p>
            </div>
            <div className={styles.container__body__presentation_contact}>
              <button className={styles.container__body__button}>Contact</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
