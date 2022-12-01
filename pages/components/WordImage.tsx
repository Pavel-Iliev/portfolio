import Image from 'next/image';
import React, { useState, MouseEvent } from 'react';
import styles from '../../styles/WordImage.module.scss';
import { MousePosition, WordImageType } from '../../utils/constants';
import { wordSplitImage } from '../../utils/helpers';

export default function WordImage(props: WordImageType) {
  const { image, alt, word } = props;

  const [localMousePos, setLocalMousePos] = useState<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    const node = event.target as HTMLElement;
    const localX = event.clientX - node.getBoundingClientRect().left;
    const localY = event.clientY - node.getBoundingClientRect().top;

    setLocalMousePos({ x: localX, y: localY });
  };

  return (
    <span onMouseMove={handleMouseMove} className={styles.wrap_word}>
      {wordSplitImage(word)}
      <span
        style={{ transform: `translate(-${50 + localMousePos.x}%, -${50 + localMousePos.y / 2}%)` }}
        className={styles.wrap_word__image}
      >
        <Image src={image} alt={alt} />
      </span>
    </span>
  );
}
