import styles from './codebox.module.scss';

type AboutCodeShowcaseCodeBoxProps = {
  code: React.ReactNode;
};

const AboutCodeShowcaseCodeBox: React.FC<AboutCodeShowcaseCodeBoxProps> = ({ code }) => {
  return (
    <div>
      <div>Icon, name, detail button, like button</div>
      {code}
    </div>
  );
};

export default AboutCodeShowcaseCodeBox;
