import { useEffect, useState } from 'react';
import styles from './snakeGame.module.scss';
import CtaButton from '../ctaButton/ctaButton';

const rows = 30;
const cols = 51;

const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState<number[]>([
    553, 583, 613, 643, 673, 703, 704, 705, 706, 707, 708, 738, 768, 798, 828, 858,
  ]);
  const [snakeMoveTo, setSnakeMoveTo] = useState<string>('UP');
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [food, setFoot] = useState<number>();

  const changeDirection = (event: KeyboardEvent) => {
    if (event.key === 'ArrowUp' && snakeMoveTo !== 'DOWN') setSnakeMoveTo('UP');
    if (event.key === 'ArrowDown' && snakeMoveTo !== 'UP') setSnakeMoveTo('DOWN');
    if (event.key === 'ArrowLeft' && snakeMoveTo !== 'RIGHT') setSnakeMoveTo('LEFT');
    if (event.key === 'ArrowRight' && snakeMoveTo !== 'LEFT') setSnakeMoveTo('RIGHT');
  };

  const startGame = (event: KeyboardEvent) => {
    if (event.key === ' ') setIsGameStarted(true);
  };

  const moveSnake = () => {
    setSnake((prevSnake) => {
      const newSnake = [...prevSnake];
      let head = newSnake[0];

      switch (snakeMoveTo) {
        case 'UP':
          head -= rows;
          break;
        case 'DOWN':
          head += rows;
          break;
        case 'LEFT':
          head -= 1;
          break;
        case 'RIGHT':
          head += 1;
          break;
      }

      newSnake.unshift(head);
      newSnake.pop();
      return newSnake;
    });
  };

  const getGameScreenCells = () => {
    return Array.from({ length: cols }, (_, colIndex) =>
      Array.from({ length: rows }, (_, rowIndex) => {
        const cellIndex = colIndex * rows + rowIndex;
        const opacity = snake.indexOf(cellIndex) !== -1 ? 1 - snake.indexOf(cellIndex) * 0.05 : 1;

        return (
          <div
            className={`${styles.cell} ${snake[0] === cellIndex ? styles.head : ''} 
            ${snake.includes(cellIndex) ? styles.head : ''} 
            ${snake[0] === cellIndex && snakeMoveTo === 'UP' ? styles.headUp : ''} 
            ${snake[0] === cellIndex && snakeMoveTo === 'DOWN' ? styles.headDown : ''} 
            ${snake[0] === cellIndex && snakeMoveTo === 'LEFT' ? styles.headLeft : ''} 
            ${snake[0] === cellIndex && snakeMoveTo === 'RIGHT' ? styles.headRight : ''}`}
            style={{ opacity }}
          ></div>
        );
      })
    );
  };

  useEffect(() => {
    if (isGameStarted) {
      const interval = setInterval(moveSnake, 40);
      document.addEventListener('keydown', changeDirection);

      return () => {
        clearInterval(interval);
        document.removeEventListener('keydown', changeDirection);
      };
    }
  }, [isGameStarted, snakeMoveTo]);

  useEffect(() => {
    document.addEventListener('keydown', startGame);

    return () => {
      document.removeEventListener('keydown', startGame);
    };
  }, []);

  return (
    <div className={styles.gameBoxWrapper}>
      <div className={styles.gameBox}>
        {getGameScreenCells()}
        {isGameStarted === false && (
          <div className={styles.startGameButton}>
            <CtaButton
              type="primary"
              value="start-game"
              onClick={() => {
                setIsGameStarted(true);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SnakeGame;
