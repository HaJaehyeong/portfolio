'use client';
import { Enums } from '@/enums/enums';
import { TechCodesType } from '@/types/constants';
import styles from './technologyLogo.module.scss';

type TechnologyLogoProps = {
  icon: TechCodesType;
  size?: number;
  active?: boolean;
  useHover?: boolean;
  onClick?: () => void;
};

const TechnologyLogo: React.FC<TechnologyLogoProps> = ({ icon, size, active = false, useHover = false, onClick }) => {
  const targetIcon = Enums.Technology.valueOf(icon);

  // TODO(hajae): Loading Spinner와 같은 에러 헨들링을 할 수 있도록 수정
  if (!targetIcon) return <></>;

  const getClassName = () => {
    if (active) {
      return styles.active;
    } else if (useHover) {
      return styles.hover;
    } else return '';
  };

  return (
    <targetIcon.icon
      className={getClassName()}
      color="var(--secondary-gray)"
      size={size ? size : 24}
      cursor="pointer"
      onClick={onClick}
    />
  );
};

export default TechnologyLogo;
