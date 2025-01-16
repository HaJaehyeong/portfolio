import { URL_REGEX } from '@/types/constants';
import { RiShareBoxLine } from '@remixicon/react';
import React from 'react';

type ConvertContentBodyProps = {
  content: string;
};

// NOTE(hajae): dangerouslySetInnerHTML로도 가능하지만 XSS 공격에 노출되기 쉬움
const ConvertContentBody: React.FC<ConvertContentBodyProps> = ({ content }) => {
  const convertLink = () => {
    const parts = content.split(URL_REGEX);

    return parts.map((part, index) => {
      if (URL_REGEX.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--secondary-gray)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2px',
              textDecoration: 'underline',
            }}
          >
            Link
            <RiShareBoxLine size={16} />
          </a>
        );
      }

      return <span key={index}>{part}</span>;
    });
  };

  return <>{convertLink()}</>;
};

export default ConvertContentBody;
