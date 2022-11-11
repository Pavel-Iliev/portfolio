import React from 'react';
import styles from '../../styles/Logo.module.scss';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <h3 className={styles.logo__icon}>
        <span>I</span>
        <span>l</span>
        <span>i</span>
      </h3>
      <h3>
        <span>P</span>
        <span>a</span>
        <span>v</span>
        <span>e</span>
        <span>l</span>
      </h3>
    </div>
  );
}
