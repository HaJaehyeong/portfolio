import Image from 'next/image';
import styles from './card.module.scss';
import CtaButton from '../cta-button/cta-button';
import Link from 'next/link';
import IconBox from '../icon-box/icon-box';
import { TechnologyEnum } from '@/enums/technology.enum';

type CardProps = {
  projectId: string;
  imageSrc: string;
  mainSkill: TechnologyEnum['code'];
  description: string;
};

const Card: React.FC<CardProps> = ({ projectId, imageSrc, mainSkill, description }) => {
  return (
    <div className={styles['card']}>
      <div className={styles['card__logo']}>
        <IconBox icon={mainSkill} />
      </div>
      <div className={styles['card__image']}>
        <Image src={imageSrc} alt="test" fill objectFit="cover" />
      </div>
      <p className={styles['card__description']}>{description}</p>
      <div className={styles['card__button']}>
        <Link href={`/project/${projectId}`}>
          <CtaButton value="view-project" type="default" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
