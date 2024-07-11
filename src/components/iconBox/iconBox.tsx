import { RiReactjsFill } from '@remixicon/react';
import styles from './iconBox.module.scss';
import { Enums } from '@/enums/enums';

type IconBoxProps = {
  icon: string;
};

const IconBox: React.FC<IconBoxProps> = ({ icon }) => {
  const targetIcon = Enums.Technology.valueOf(icon);

  // TODO(hajae): Loading Spinner와 같은 에러 헨들링을 할 수 있도록 수정
  if (!targetIcon) return <></>;

  return (
    <div className={styles.iconBoxWrapper} style={{ backgroundColor: targetIcon?.backgroundColor }}>
      <targetIcon.icon size={20}></targetIcon.icon>
    </div>
  );
};

export default IconBox;
