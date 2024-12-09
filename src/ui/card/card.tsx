import Image, { StaticImageData } from 'next/image';
import styles from './card.module.scss';
import CtaButton from '../cta-button/cta-button';

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
        <CtaButton value="view-project" type="default" />
      </div>
    </div>
  );
};

export default Card;
