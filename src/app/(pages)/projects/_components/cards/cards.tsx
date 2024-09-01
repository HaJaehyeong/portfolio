import styles from './cards.module.scss';
import Card from '@/ui/card/card';
import cardImage from '@/public/images/card-example.jpg';

const ProjectsCards: React.FC = () => {
  return (
    <div className={styles.cardsWrapper}>
      <div className={styles.cardItem}>
        <label>Project1 // title</label>
        <Card image={cardImage}></Card>
      </div>
      <div className={styles.cardItem}>
        <label>Project1 // title</label>
        <Card image={cardImage}></Card>
      </div>
      <div className={styles.cardItem}>
        <label>Project1 // title</label>
        <Card image={cardImage}></Card>
      </div>
      <div className={styles.cardItem}>
        <label>Project1 // title</label>
        <Card image={cardImage}></Card>
      </div>
      <div className={styles.cardItem}>
        <label>Project1 // title</label>
        <Card image={cardImage}></Card>
      </div>
    </div>
  );
};

export default ProjectsCards;
