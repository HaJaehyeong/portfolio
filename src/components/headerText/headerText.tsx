import styles from './headerText.module.scss';

type HeaderTextProps = {
  text: string;
  isSelected?: boolean;
  isHeader?: boolean;
};

const HeaderText: React.FC<HeaderTextProps> = ({ text, isSelected = false, isHeader = true }) => {
  return (
    <div
      className={`
      ${styles.headerTextWrapper} 
      ${isSelected ? styles.active : ''} 
      ${isHeader ? styles.rightBorder : styles.leftBorder}
      `}
    >
      {'_' + text}
    </div>
  );
};

export default HeaderText;
