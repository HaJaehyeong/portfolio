import styles from './headerText.module.scss';

type HeaderTextProps = {
  text: string;
  isSelected?: boolean;
  isTab?: boolean;
};

const HeaderText: React.FC<HeaderTextProps> = ({ text, isSelected = false, isTab = true }) => {
  return (
    <div
      className={`
      ${styles.headerTextWrapper} 
      ${isSelected ? styles.active : ''} 
      ${isTab ? styles.rightBorder : styles.leftBorder}
      `}
    >
      {'_' + text}
    </div>
  );
};

export default HeaderText;
