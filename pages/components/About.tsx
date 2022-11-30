import Image from 'next/image';
import React, { ReactElement } from 'react';
import styles from '../../styles/About.module.scss';
import LogoMask from './LogoMask';
import pavel from '../../assets/pavel.jpeg';
import hand from '../../assets/hand.gif';
import love from '../../assets/love-code.gif';
import WordImage from './WordImage';

export default function About(): ReactElement {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>About</h2>
      <div className={styles.container__content}>
        <div className={styles.container__content__text}>
          <p>
            I’m a Developer located in&nbsp;Bergamo, {<WordImage word={'Italy'} image={hand} alt={'italy hand'} />}.
          </p>
          <p>
            With passion for all the Fron-End aspects, animations, UI effects, dynamic user experiences and&nbsp;more...
          </p>
          <p>
            <WordImage image={love} word={'Love'} alt={'love coding'} /> every one project i work on, and enjoy to
            experiment and try to build new stuff.
          </p>
        </div>
        <div className={styles.container__content__image}>
          <div className={styles.container__content__image__height}>
            <LogoMask white={true}>
              <Image src={pavel} alt="Pavel image" />
            </LogoMask>
          </div>
        </div>
      </div>
    </div>
  );
}
