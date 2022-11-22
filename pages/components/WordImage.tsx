import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/WordImage.module.scss';

export default function WordImage(props) {
  const { image, alt, word } = props;

  const [globalMousePos, setGlobalMousePos] = useState({});
  const [localMousePos, setLocalMousePos] = useState({});
  const handleMouseMove = (event) => {
    console.log(event.clientY);

    // 👇 Get mouse position relative to element
    const localX = event.clientX - event.target.offsetLeft;
    const localY = event.clientY - event.target.offsetTop;
    setLocalMousePos({ x: localX, y: localY });
  };
  useEffect(() => {
    const handleMouseMove = (event) => {
      setGlobalMousePos({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <span onMouseMove={handleMouseMove} className={styles.wrap_word}>
      {word}
      <span className={styles.wrap_word__image}>
        ({localMousePos.x}, {localMousePos.y}){/* <Image src={image} alt={alt} /> */}
      </span>
    </span>
  );
}
