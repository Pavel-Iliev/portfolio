import React from 'react';
import logoMask from '../../assets/logo-mask.svg';
import logoMaskWhite from '../../assets/logo-mask-white.svg';
import Image from 'next/image';
import styles from '../../styles/LogoMask.module.scss';
import { Mask } from '../../utils/types';

export default function LogoMask(props: Mask) {
  const mask = props.white ? logoMaskWhite : logoMask;
  return (
    <div className={styles.mask}>
      <div className={styles.mask__logo}>
        <Image src={mask} alt="logo-mask" />
      </div>
      {props.children}
    </div>
  );
}
