import styles from './page.module.scss';
import boltUpLeft from '/public/images/bolt-up-left.png';
import boltUpRight from '/public/images/bolt-up-right.png';
import boltDownLeft from '/public/images/bolt-down-left.png';
import boltDownRight from '/public/images/bolt-down-right.png';
import Image from 'next/image';
import SnakeGame from '@/app/_components/snake-game/snake-game';
import TypingComponent from './_components/typing/typing';

const Home: React.FC = () => {
  return (
    <div className={styles['main']}>
      <div className={styles['blur']}>
        <div className={`${styles['blur__item-1']} ${styles['blur__green']}`} />
        <div className={`${styles['blur__item-2']} ${styles['blur__green']}`} />
        <div className={`${styles['blur__item-3']} ${styles['blur__blue']}`} />
        <div className={`${styles['blur__item-4']} ${styles['blur__blue']}`} />
      </div>
      <div className={styles['whoami']}>
        <p className={styles['whoami__hello']}>Hi all👋, I am</p>
        <h1 className={styles['whoami__name']}>Jaehyeong Ha</h1>
        <h2 className={styles['whoami__job']}>
          {'> '}
          <TypingComponent />
        </h2>

        <label className={styles['comment']}>{'// complete the game to continue'}</label>
        <label className={styles['comment']}>{'// you can also see it on my Github page'}</label>
        <div className={styles['code']}>
          <label>const</label>
          <label className={styles['code__valiable']}> githubLink</label>
          <label className={styles['code__equal']}> = </label>
          <a href="https://github.com/HaJaehyeong/portfolio" target="_blank">
            <label className={styles['code__value']}>{'"https://github.com/HaJaehyeong/portfolio"'}</label>
          </a>
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
