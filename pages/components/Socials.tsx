import React from 'react';
import styles from '../../styles/Socials.module.scss';
import { SOCIALS } from '../../utils/constants';

export default function Socials() {
  return (
    SOCIALS && (
      <ul className={styles.socials}>
        {SOCIALS.map((social) => {
          return (
            <li key={social.id} className={styles.socials__icon}>
              <a target="_blank" rel="noopener noreferrer" href={social.link}>
                {social.icon}
              </a>
            </li>
          );
        })}
      </ul>
    )
  );
}
