import { Enums } from '@/enums/enums';
import { TechCodesType } from '@/types/constants';

type TechnologyLogoProps = {
  icon: TechCodesType;
  size?: number;
  active?: boolean;
};

const TechnologyLogo: React.FC<TechnologyLogoProps> = ({ icon, size, active = false }) => {
  const targetIcon = Enums.Technology.valueOf(icon);

  // TODO(hajae): Loading Spinner와 같은 에러 헨들링을 할 수 있도록 수정
  if (!targetIcon) return <></>;

  return <targetIcon.icon color="var(--secondary-gray)" size={size ? size : 24} opacity={active ? '1' : '0.4'} />;
};

export default TechnologyLogo;
