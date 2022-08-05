import styles from '@/styles/PizzaCard.module.css';
import Image from 'next/image';
const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="pizza" width={500} height={500} />
      <h1 className={styles.title}>BOHEMiA WALELULU ZUKA</h1>
      <span className={styles.price}>$24.99</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit bilal consectetur elit eiusmod
      </p>
    </div>
  );
};
export default PizzaCard;
