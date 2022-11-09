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

  function handleSwitch(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    setCheckInput((prev) => !prev);
  }

  return (
    <div className={styles.theme_switch} onClick={handleSwitch}>
      <input value={theme} type="checkbox" className={styles.theme_switch__checkbox} id="checkbox" />
      <label className={styles.theme_switch__label} htmlFor="checkbox">
        <span className={styles.theme_switch__label__icon}>
          <FaSun />
        </span>
        <span className={styles.theme_switch__label__icon}>
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
