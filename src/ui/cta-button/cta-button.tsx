import styles from './cta-button.module.scss';

type CtaButtonProps = {
  value: string;
  onClick?: () => void;
  type?: 'primary' | 'default' | 'ghost';
};

const CtaButton: React.FC<CtaButtonProps> = ({ value, onClick, type = 'default' }) => {
  const buttonClass = `${styles.ctaButton} ${styles[type]}`;
  return (
    <button className={buttonClass} onClick={onClick}>
      {value}
    </button>
  );
};

export default CtaButton;
