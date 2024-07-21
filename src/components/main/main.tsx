import styles from './main.module.scss';

const Main: React.FC = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.whoami}>
        <p className={styles.hello}>Hi all, I am</p>
        <h1 className={styles.name}>Jaehyeong Ha</h1>
        <h2 className={styles.job}>{'> Front-end develop'}</h2>

        <label className={styles.comment}>// complete the game to continue</label>
        <label className={styles.comment}>// you can also see it on my Github page</label>
        <div className={styles.code}>
          <label>const</label>
          <label className={styles.valiable}> githubLink</label>
          <label className={styles.equal}> = </label>
          <label className={styles.value}>"htts://github.com/HaJaehyeong/portfolio"</label>
        </div>
      </div>
      <div className={styles.gameBox}>game box</div>
    </div>
  );
};

export default Main;
