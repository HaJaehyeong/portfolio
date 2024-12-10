import Image, { StaticImageData } from 'next/image';
import styles from './card.module.scss';
import CtaButton from '../cta-button/cta-button';
import Link from 'next/link';

type CardProps = {
  image: StaticImageData;
  description: string;
};

const Card: React.FC<CardProps> = ({ image, description }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImage}>
        <Image src={image.src} alt="test" fill objectFit="cover" />
      </div>
      <p className={styles.cardDescription}>{description}</p>
      <div className={styles.buttonWrapper}>
        <Link href={'/project/12'}>
          <CtaButton value="view-project" type="default" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
