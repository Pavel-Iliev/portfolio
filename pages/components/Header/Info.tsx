import React from 'react';
import styles from '../../../styles/Header/Info.module.scss';
import LogoMask from '../LogoMask';
import pavel from '../../../assets/pavel.jpeg';
import Image from 'next/image';

export default function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.info__image}>
        <LogoMask>
          <Image src={pavel} alt="pavel" />
        </LogoMask>
      </div>
    </div>
  );
}
