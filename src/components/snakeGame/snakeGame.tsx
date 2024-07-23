import styles from './snakeGame.module.scss';
import Game from './game/game';

const SnakeGame: React.FC = () => {
  return (
    <div className={styles.gameBoxWrapper}>
      <Game />
    </div>
  );
};

export default SnakeGame;
