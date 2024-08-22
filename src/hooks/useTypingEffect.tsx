import { useState, useEffect } from 'react';

const useTypingEffect = (text: string, speed: number = 200) => {
  const [typingText, setTypingText] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < text.length) {
        setTypingText((prev) => prev + text[count]);
        setCount((prev) => prev + 1);
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [count, text, speed]);

  const cursorStyle = {
    display: 'inline-block',
    marginLeft: '2px',
    width: '10px',
    animation: 'cursorBlink 1s infinite',
    fontWeight: 500,
    color: 'var(--secondary-white)',
  };

  return (
    <>
      <span>{typingText}</span>
      <span style={cursorStyle}>|</span>
    </>
  );
};

export default useTypingEffect;
