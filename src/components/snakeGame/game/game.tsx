import { useEffect, useState } from 'react';
import styles from './game.module.scss';
import CtaButton from '@/components/ctaButton/ctaButton';

const rows = 30;
const cols = 51;
const defaultSnake = [553, 583, 613, 643, 673, 703, 704, 705, 706, 707, 708, 738, 768, 798, 828, 858];

const Game: React.FC = () => {
  const [snake, setSnake] = useState<number[]>(defaultSnake);
  const [snakeMoveTo, setSnakeMoveTo] = useState<string>('UP');
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [isGameOvered, setIsGameOvered] = useState<boolean>(false);
  const [isGameCleared, setIsGameCleared] = useState<boolean>(false);
  const [foodCount, setFoodCount] = useState<number>(0);
  const [food, setFood] = useState<number>(253);

  const changeDirection = (event: KeyboardEvent) => {
    if (event.key === 'ArrowUp' && snakeMoveTo !== 'DOWN') setSnakeMoveTo('UP');
    if (event.key === 'ArrowDown' && snakeMoveTo !== 'UP') setSnakeMoveTo('DOWN');
    if (event.key === 'ArrowLeft' && snakeMoveTo !== 'RIGHT') setSnakeMoveTo('LEFT');
    if (event.key === 'ArrowRight' && snakeMoveTo !== 'LEFT') setSnakeMoveTo('RIGHT');
  };

  const startGame = (event: KeyboardEvent) => {
    if (event.key === ' ') {
      restartGame();
    }
  };

  const moveSnake = () => {
    setSnake((prevSnake) => {
      const copiedSnake = [...prevSnake];
      let head = copiedSnake[0];

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

      /* NOTE(hajae): Game Over 조건
       * 1. head가 셀 처음, 셀 끝을 벗어나면 Game Over
       *   > 음수, rows * cols 이상
       * 2. head가 왼쪽, 오른쪽 끝을 벗어나면 Game Over
       *   > snakeMoveTo === 'LEFT' && head % rows === rows - 1
       *   > 예를들어 head가 왼쪽으로 움직이는 중에 head가 30에서 한칸 더갔을 경우
       *   > head는 30에서 위의 switch문에서 -1하면 29.
       *   > 29 % 30 = 29, rows - 1 = 29 따라서 29 === 29로 true가 되면서 Gmae Over
       *   > 오른쪽으로 움직일 때도 거의 동일
       * 3. 몸통에 부딪혔을 때
       *   > copiedSnake.includes(head)
       */
      if (
        head < 0 ||
        head >= rows * cols ||
        (snakeMoveTo === 'LEFT' && head % rows === rows - 1) ||
        (snakeMoveTo === 'RIGHT' && head % rows === 0) ||
        copiedSnake.includes(head)
      ) {
        setIsGameStarted(false);
        setIsGameOvered(true);
        return prevSnake;
      }

      // NOTE(hajae): food를 먹었을 땐 꼬리를 늘려준다.. 한개는 좀 쉬우니까 두개 늘리자
      if (head === food) {
        setFoodCount(foodCount + 1);
        // NOTE(hajae): Make a food!!
        setFood(Math.floor(Math.random() * rows * cols));
        copiedSnake.unshift(head);

        switch (snakeMoveTo) {
          case 'UP':
            copiedSnake.push(copiedSnake[copiedSnake.length - 1] + rows);
            copiedSnake.push(copiedSnake[copiedSnake.length - 1] + rows * 2);
            break;
          case 'DOWN':
            copiedSnake.push(copiedSnake[copiedSnake.length - 1] - rows);
            copiedSnake.push(copiedSnake[copiedSnake.length - 1] - rows * 2);
            break;
          case 'LEFT':
            copiedSnake.push(copiedSnake[copiedSnake.length - 1] + 1);
            copiedSnake.push(copiedSnake[copiedSnake.length - 1] + 2);
            break;
          case 'RIGHT':
            copiedSnake.push(copiedSnake[copiedSnake.length - 1] - 1);
            copiedSnake.push(copiedSnake[copiedSnake.length - 1] - 2);
            break;
        }

        copiedSnake.pop();
        return copiedSnake;
      } else {
        copiedSnake.unshift(head);
        copiedSnake.pop();
      }
      return copiedSnake;
    });
  };

  const getGameScreenCells = () => {
    return Array.from({ length: cols }, (_, colIndex) =>
      Array.from({ length: rows }, (_, rowIndex) => {
        const cellIndex = colIndex * rows + rowIndex;
        const snakeIndex = snake.indexOf(cellIndex);
        // NOTE(hajae): min opacity -> 0.1, max opacity -> 1
        const opacity = snakeIndex !== -1 ? Math.max(0.1, 1 - (snakeIndex / snake.length) * 0.9) : 1;

        return (
          <div
            key={cellIndex}
            className={`${styles.cell} ${snake[0] === cellIndex ? styles.head : ''} 
            ${snake.includes(cellIndex) ? styles.head : ''} 
            ${food === cellIndex ? styles.food : ''}
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

  useEffect(() => {
    if (foodCount === 10) {
      setIsGameCleared(true);
      setIsGameStarted(false);
    }
  }, [foodCount]);

  const restartGame = () => {
    setSnake(defaultSnake);
    setSnakeMoveTo('UP');
    setFoodCount(0);
    setFood(253);
    setIsGameOvered(false);
    setIsGameCleared(false);
    setIsGameStarted(true);
  };

  return (
    <div className={styles.gameBox}>
      {getGameScreenCells()}
      {!isGameStarted && !isGameOvered && !isGameCleared && (
        <div className={styles.startGameButton}>
          <CtaButton
            type="primary"
            value="start-game"
            onClick={() => {
              setSnake(defaultSnake);
              setSnakeMoveTo('UP');
              setIsGameStarted(true);
            }}
          />
        </div>
      )}
      {(isGameOvered || isGameCleared) && (
        <div className={styles.gameOverWrapper}>
          <div className={styles.gameOverBox}>
            <div className={styles.gameOver}>{isGameOvered ? 'GAME OVER!' : 'WELL DONE!'}</div>
            <div className={styles.gameRestart} onClick={() => restartGame()}>
              {isGameOvered ? 'start-again' : 'play-again'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
