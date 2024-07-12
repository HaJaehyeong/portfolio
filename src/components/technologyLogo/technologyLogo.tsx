import { Enums } from '@/enums/enums';

type TechnologyLogoProps = {
  icon: string;
  size?: number;
};

const TechnologyLogo: React.FC<TechnologyLogoProps> = ({ icon, size }) => {
  const targetIcon = Enums.Technology.valueOf(icon);

  // TODO(hajae): Loading Spinner와 같은 에러 헨들링을 할 수 있도록 수정
  if (!targetIcon) return <></>;

  return <targetIcon.icon color="var(--secondary-gray)" size={size ? size : 24} />;
};

export default TechnologyLogo;
