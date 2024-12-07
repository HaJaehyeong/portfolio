'use client';
import useTypingEffect from '@/hooks/useTypingEffect';

const TypingComponent: React.FC = () => {
  const typingText = useTypingEffect('Front-end developer');

  return <>{typingText}</>;
};

export default TypingComponent;
