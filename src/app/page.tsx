'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import boltUpLeft from '@/public/images/bolt-up-left.png';
import boltUpRight from '@/public/images/bolt-up-right.png';
import boltDownLeft from '@/public/images/bolt-down-left.png';
import boltDownRight from '@/public/images/bolt-down-right.png';
import Image from 'next/image';
import SnakeGame from '@/components/snakeGame/snakeGame';

const Home: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [count, setCount] = useState(0);
  const fullText = 'Front-end developer';

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < fullText.length) {
        setDisplayedText((prev) => prev + fullText[count]);
        setCount((prev) => prev + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, [count, fullText.length]);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.whoami}>
        <p className={styles.hello}>Hi all👋, I am</p>
        <h1 className={styles.name}>Jaehyeong Ha</h1>
        <h2 className={styles.job}>
          {'> '}
          <span>{displayedText}</span>
          <span className={styles.cursor}>|</span>
        </h2>

        <label className={styles.comment}>// complete the game to continue</label>
        <label className={styles.comment}>// you can also see it on my Github page</label>
        <div className={styles.code}>
          <label>const</label>
          <label className={styles.valiable}> githubLink</label>
          <label className={styles.equal}> = </label>
          <label className={styles.value}>"htts://github.com/HaJaehyeong/portfolio"</label>
        </div>
      </div>
      <div className={styles.gameBox}>
        <Image className={styles.boltUpLeft} src={boltUpLeft.src} width={25} height={25} alt="boltUpLeft" />
        <Image className={styles.boltUpRight} src={boltUpRight.src} width={25} height={25} alt="boltUpRight" />
        <Image className={styles.boltDownLeft} src={boltDownLeft.src} width={25} height={25} alt="boltDownLeft" />
        <Image className={styles.boltDownRight} src={boltDownRight.src} width={25} height={25} alt="boltDonwRight" />
        <SnakeGame />
      </div>
    </div>
  );
};

export default Home;
