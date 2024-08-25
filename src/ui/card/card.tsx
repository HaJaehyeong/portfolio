import Image, { StaticImageData } from 'next/image';
import styles from './card.module.scss';
import CtaButton from '../ctaButton/ctaButton';

type CardProps = {
  image: StaticImageData;
};

const Card: React.FC<CardProps> = ({ image }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImage}>
        <Image src={image.src} alt="test" fill objectFit="cover" />
      </div>
      <p className={styles.cardDescription}>Duis aute irure dolor in velit esse cillum dolore.</p>
      <div className={styles.buttonWrapper}>
        <CtaButton value="view-project" type="default" />
      </div>
    </div>
  );
};

export default Card;
