import { useState } from 'react';
import styles from './snakeGame.module.scss';

const rows = 30;
const cols = 51;

const SnakeGame: React.FC = () => {
  const [head, setHead] = useState<number>(615);

  const getHead = (col: number, row: number): boolean => {
    return Math.floor(head / rows) === col && head % rows === row;
  };

  const getGameScreenCells = () => {
    return Array.from({ length: cols }, (_, colIndex) =>
      Array.from({ length: rows }, (_, rowIndex) => (
        <div className={`${styles.cell} ${getHead(colIndex, rowIndex) ? styles.head : ''}`}></div>
      ))
    );
  };

  return (
    <div className={styles.gameBoxWrapper}>
      <div className={styles.gameBox}>{getGameScreenCells()}</div>
    </div>
  );
};

export default SnakeGame;
