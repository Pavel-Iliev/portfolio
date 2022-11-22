import Image from 'next/image';
import React, { ReactElement } from 'react';
import styles from '../../styles/About.module.scss';
import LogoMask from './LogoMask';
import pavel from '../../assets/pavel.jpeg';
import hand from '../../assets/hand.gif';
import WordImage from './WordImage';

export default function About(): ReactElement {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>About</h2>
      <div className={styles.container__content}>
        <div className={styles.container__content__text}>
          <p>
            I’m a Developer located in Bergamo, {<WordImage word={'Italy'} image={hand} alt={'italy hand'} />}. With
            passion for all the Fron-End aspects, animations, UI effects, dynamic user experiences and more...
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
