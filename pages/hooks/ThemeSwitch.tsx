import React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';
import styles from '../../styles/ThemeSwitch.module.scss';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const [checkInput, setCheckInput] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function handleCheckInput() {
    setCheckInput((prev) => !prev);
  }

  return (
    <div className={styles.theme_switch}>
      <input value={theme} type="checkbox" className={styles.theme_switch__checkbox} id="checkbox" />
      <label className={styles.theme_switch__label} htmlFor="checkbox">
        <span
          className={styles.theme_switch__label__icon}
          onClick={(e) => {
            setTheme('light');
            handleCheckInput();
          }}
        >
          <FaSun />
        </span>
        <span
          className={styles.theme_switch__label__icon}
          onClick={(e) => {
            setTheme('dark');
            handleCheckInput();
          }}
        >
          <FaMoon />
        </span>
        <span
          className={`${styles.theme_switch__label__circle} ${
            checkInput ? styles.theme_switch__label__circle__checked : ''
          }`}
        ></span>
      </label>
    </div>
  );
}
