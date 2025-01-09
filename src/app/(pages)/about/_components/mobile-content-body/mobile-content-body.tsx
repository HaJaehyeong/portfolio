import { RiShareBoxLine } from '@remixicon/react';
import React from 'react';

const urlRegex = /(https?:\/\/[^\s]+)/g;

type MobileContentBodyProps = {
  content: string;
};

const MobileContentBody: React.FC<MobileContentBodyProps> = ({ content }) => {
  const convertLink = () => {
    const parts = content.split(urlRegex);

    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
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

export default MobileContentBody;
