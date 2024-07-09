import styles from './ctaButton.module.scss';

type CtaButtonProps = {
  value: string;
  type?: 'primary' | 'default' | 'ghost';
};

const CtaButton: React.FC<CtaButtonProps> = ({ value, type = 'default' }) => {
  const buttonClass = `${styles.ctaButton} ${styles[type]}`;
  return <button className={buttonClass}>{value}</button>;
};

export default CtaButton;
