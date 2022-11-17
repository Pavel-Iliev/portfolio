import React from 'react';
import logoMask from '../../assets/logo-mask.svg';
import Image from 'next/image';
import styles from '../../styles/LogoMask.module.scss';

export default function LogoMask({ children }) {
  return (
    <div className={styles.mask}>
      <div className={styles.mask__logo}>
        <Image src={logoMask} alt="logo-mask" />
      </div>
      {children}
    </div>
  );
}
