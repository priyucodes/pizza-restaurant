import styles from '@/styles/Footer.module.css';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt="" objectFit="cover" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YEAH, WE DID. THE PEEJA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            3815 J. Don Road #304.
            <br /> California, 85022
            <br /> (602) 767-1010
          </p>
          <p className={styles.text}>
            1232 J. Don Road #304.
            <br /> New York, 85022
            <br /> (602) 767-1010
          </p>
          <p className={styles.text}>
            3111 Saint Marie Road #304.
            <br /> Chicago, 85022
            <br /> (602) 767-1010
          </p>
          <p className={styles.text}>
            3815 J. Don Road #304.
            <br /> Mexico, 85022
            <br /> (602) 767-1010
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 10:00 - 23:00
          </p>
          <p className={styles.text}>
            SATURDAY UNTIL SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
