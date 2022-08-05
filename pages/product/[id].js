import styles from '@/styles/Product.module.css';
import Image from 'next/image';
import { useState } from 'react';
const Product = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: '/img/pizza.png',
    name: 'MARGHERITA',
    price: [12.49, 18.49, 24.99],
    desc: 'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ips',
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={pizza.img}
            layout="fill"
            alt="pizza"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="sm-pizza" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="md-pizza" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="lg-pizza" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;