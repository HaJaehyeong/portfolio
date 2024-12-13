import CtaButton from '@/ui/cta-button/cta-button';
import { RiEmotionSadLine } from '@remixicon/react';
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <RiEmotionSadLine size={42} />
      <span style={{ fontSize: '32px', fontWeight: '600' }}>404 Not Found</span>
      <span>Could not find requested resource</span>
      <Link href="/">
        <CtaButton value="return-home"></CtaButton>
      </Link>
    </div>
  );
};

export default NotFound;
