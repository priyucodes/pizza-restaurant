import styles from '@/styles/PizzaCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
const PizzaCard = ({ pizza }) => {
  // https://stackoverflow.com/questions/66421459/warning-function-components-cannot-be-given-refs
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <a>
          <Image src={pizza.img} alt="pizza" width={500} height={500} />
        </a>
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[0]}</span>
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  );
};
export default PizzaCard;
