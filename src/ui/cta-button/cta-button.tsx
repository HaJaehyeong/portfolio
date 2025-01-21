import styles from './cta-button.module.scss';

type CtaButtonProps = {
  value: string;
  onClick?: () => void;
  type?: 'primary' | 'default' | 'ghost';
  submit?: boolean;
};

const CtaButton: React.FC<CtaButtonProps> = ({ value, onClick, type = 'default', submit = false }) => {
  const buttonClass = `${styles.ctaButton} ${styles[type]}`;
  return (
    <button className={buttonClass} onClick={onClick} type={submit ? 'submit' : 'button'}>
      {value}
    </button>
  );
};

export default CtaButton;
