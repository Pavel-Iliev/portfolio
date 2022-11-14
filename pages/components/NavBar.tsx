import React from 'react';
import { MENU_SECTION } from '../../utils/constants';
import UseMediaQuery from '../hooks/UseMediaQuery';
import styles from '../../styles/NavBar.module.scss';
import { NavBarTypes } from '../../utils/types';
import Logo from './Logo';
import ThemeSwitch from '../hooks/ThemeSwitch';
import { SectionsEnums } from '../../utils/enums';
import Socials from './Socials';

export default function NavBar(props: NavBarTypes) {
  const { activeMenuLinkId, setActiveMenuLinkId, onMenuLink } = props;
  const isMobile = UseMediaQuery(600);
  const menu = isMobile && 'menu';

  return (
    <>
      <div className={styles.menu}>
        <div className={styles.menu__container}>
          <div
            className={styles.menu__container__wrap_logo}
            onClick={() => {
              setActiveMenuLinkId(0);
              onMenuLink(SectionsEnums.Header);
            }}
          >
            <Logo />
          </div>
          <ul className={styles.menu__nav}>
            {MENU_SECTION &&
              MENU_SECTION.map((section) => {
                return (
                  section.id != 0 && (
                    <li
                      className={`${styles.menu__nav__link} ${
                        activeMenuLinkId === section.id ? styles.menu__nav__link_active : ''
                      }`}
                      key={section.id}
                      onClick={() => {
                        setActiveMenuLinkId(section.id);
                        onMenuLink(section.label);
                      }}
                    >
                      {section.icon && <span className={styles.menu__nav__link_active__icon}>{section.icon}</span>}
                      {section.label}
                      <span className={styles.menu__nav__link_active__selected}>/</span>
                    </li>
                  )
                );
              })}
          </ul>
          <div className={styles.menu__container__socials_switch}>
            <Socials />
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </>
  );
}
