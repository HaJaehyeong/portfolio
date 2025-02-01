'use client';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './mark-down.module.scss';
import remarkGfm from 'remark-gfm';

type MarkdownProps = {
  description: string;
};

const Markdown: React.FC<MarkdownProps> = ({ description }) => {
  return (
    <div className={styles['project__mark-down']}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
    </div>
  );
};

export default Markdown;
