import { useEffect, useRef, useState } from 'react';
import styles from './body.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { EXPLORER_CONTENTS } from '@/types/constants';

const AboutContentBody: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const explorerState = useSelector((state: RootState) => state.aboutExplorerReducer);

  useEffect(() => {
    const targetContent = EXPLORER_CONTENTS.contents.find((content) => {
      if (explorerState.fileId !== undefined) {
        return content.fileId === explorerState.fileId;
      } else {
        return content.directoryId === explorerState.directoryId;
      }
    });

    if (targetContent) {
      setContent(targetContent.content);
    }
  }, [explorerState.directoryId, explorerState.fileId]);

  const [formattedText, setFormattedText] = useState<string[]>([]);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = textRef.current;
    if (container) {
      const originalText = content;
      const contentWidth = container.getBoundingClientRect().width;
      const words = originalText.split(' ');
      let currentLine = '';
      const lines: string[] = [];

      const tempElement = document.createElement('span');
      tempElement.style.visibility = 'hidden';
      tempElement.style.position = 'absolute';
      tempElement.style.whiteSpace = 'nowrap';
      container.appendChild(tempElement);

      words.forEach((word, index) => {
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        tempElement.textContent = testLine;

        if (tempElement.scrollWidth > contentWidth) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      });

      if (currentLine) {
        lines.push(currentLine.trim());
      }

      setFormattedText(lines);

      container.removeChild(tempElement);
    }
  }, [content]);

  return (
    <div className={styles.contentBodyWrapper}>
      <pre className={styles.lineNo}>
        <span />
        <span />
        <span />
        <span />
      </pre>
      <div className={styles.content} ref={textRef}>
        {formattedText.map((line, index) => (
          <div key={index} className={styles.line}>
            <span className={styles.prefix}>*</span>
            <span>{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutContentBody;
