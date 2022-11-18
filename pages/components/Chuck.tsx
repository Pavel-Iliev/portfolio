import React, { useState } from 'react';
import { getChuckJoke } from '../api/chuck';
import chuckIcon from '../../assets/chuck.gif';
import styles from '../../styles/Chuck.module.scss';
import Image from 'next/image';
import { Chuck as ChuckType } from '../../utils/types';
import { CHUCKTEXT } from '../../utils/constants';

export default function Chuck(props: ChuckType) {
  const { scroll } = props;
  const [chuck, setChuck] = useState<string>();

  async function askChuck() {
    const response = await getChuckJoke();

    if (!response) {
      throw new Error(`Error! status: ${response}`);
    }
    setChuck(response.data.value);
  }

  function chuckText(text: string) {
    let result = [];
    text.split('').map((letter, i) => result.push(<span key={i}>{letter}</span>));
    result.push(<span key={result.length + 1}></span>);
    return result;
  }

  chuck && console.log(chuck);

  return (
    <div className={styles.wrap_chuck} onClick={() => askChuck()}>
      <Image src={chuckIcon} alt="chuck" />
      <div style={{ transform: `translate(-50%, -50%) rotate(${scroll / 10}deg)` }} className={styles.wrap_chuck__text}>
        {chuckText(CHUCKTEXT)}
      </div>
    </div>
  );
}
