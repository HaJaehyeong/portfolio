import styles from './headerText.module.scss';

type HeaderTextProps = {
  text: string;
  isSelected?: boolean;
  isTab?: boolean;
  handleClick?: (tab: string) => void;
};

const HeaderText: React.FC<HeaderTextProps> = ({ text, isSelected = false, isTab = true, handleClick }) => {
  return (
    <div
      className={`
      ${styles.headerTextWrapper} 
      ${isSelected ? styles.active : ''} 
      ${isTab ? styles.rightBorder : styles.leftBorder}
      `}
      onClick={handleClick ? () => handleClick(text) : () => {}}
    >
      {'_' + text}
    </div>
  );
};

export default HeaderText;
