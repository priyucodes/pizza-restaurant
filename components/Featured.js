import styles from '@/styles/Featured.module.css';
import Image from 'next/image';
import { useState } from 'react';
const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    // '/img/arrowl.png',
    '/img/featured.png',
    '/img/featured2.png',
    '/img/featured3.png',
  ];
  const handleArrow = direction => {
    if (direction === 'l') {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === 'r') {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow('l')}
      >
        <Image
          src="/img/arrowl.png"
          alt="back(left-arrow)"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((image, i) => (
          <div key={i} className={styles.imgContainer}>
            <Image src={image} alt="img" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow('r')}
      >
        <Image
          src="/img/arrowr.png"
          alt="forward(right-arrow)"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};
export default Featured;
