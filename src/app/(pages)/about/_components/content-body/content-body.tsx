'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './content-body.module.scss';
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
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = divRef.current;
    if (!container) return;

    const handleResize = () => {
      const originalText = content;
      const contentWidth = container.getBoundingClientRect().width - 55;
      const words = originalText.split(' ');
      let currentLine = '';
      const lines: string[] = [];

      // NOTE(hajae): absolute가 아니면 tempElement가 container내부에 생성되어 container width를 넘을 수 없는 현상이 발생하므로
      // 표시하지않고 숨기며, whitespace: nowrap으로 개행시키지 않아 width를 비교할 수 있게 한다.
      const tempElement = document.createElement('span');
      tempElement.style.visibility = 'hidden';
      tempElement.style.position = 'absolute';
      tempElement.style.whiteSpace = 'nowrap';
      container.appendChild(tempElement);

      words.forEach((word) => {
        const textLine = currentLine ? `${currentLine} ${word}` : word;
        tempElement.textContent = textLine;

        if (word === '\n\n') {
          lines.push(' ');
        } else if (word === '\n') {
          lines.push(currentLine);
          currentLine = '';
        } else if (tempElement.scrollWidth > contentWidth) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine = textLine;
        }
      });

      if (currentLine) {
        lines.push(currentLine.trim());
      }

      setFormattedText(lines);

      container.removeChild(tempElement);
    };

    // NOTE(hajae): DOM 요소의 크기 변화를 감지하고 관찰하는 데 사용되는 API
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    handleResize();

    return () => {
      resizeObserver.disconnect();
    };
  }, [content]);

  return (
    <div className={styles.contentBodyWrapper}>
      <pre className={styles.lineNo}>
        <span />
        {formattedText.map((_, index) => (
          <span key={index} />
        ))}
        <span />
      </pre>
      <div className={styles.content} ref={divRef}>
        <div className={styles.line}>
          <span>{'/**'}</span>
        </div>
        {formattedText.map((line, index) => (
          <div key={line[0] + index} className={styles.line}>
            <span className={styles.prefix}>*</span>
            <span>{line}</span>
          </div>
        ))}
        <div className={styles.line}>
          <span style={{ marginLeft: '10px' }}>{'*/'}</span>
        </div>
      </div>
      {/* NOTE(hajae): 디자인용 동작하지 않음 */}
      <div className={styles.scrollBar}>
        <div className={styles.scroll} />
      </div>
    </div>
  );
};

export default AboutContentBody;
