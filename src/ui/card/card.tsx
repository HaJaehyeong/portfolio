import Image from 'next/image';
import styles from './card.module.scss';
import CtaButton from '../cta-button/cta-button';
import Link from 'next/link';

type CardProps = {
  projectId: string;
  imageSrc: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ projectId, imageSrc, description }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImage}>
        <Image src={imageSrc} alt="test" fill objectFit="cover" />
      </div>
      <p className={styles.cardDescription}>{description}</p>
      <div className={styles.buttonWrapper}>
        <Link href={`/project/${projectId}`}>
          <CtaButton value="view-project" type="default" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
