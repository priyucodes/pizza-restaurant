import styles from '@/styles/Navbar.module.css';
import Image from 'next/image';
import Telephone from '@/img/telephone.png';
const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src={Telephone} width={32} height={32} alt="" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now!</div>
          <div className={styles.text}>011 2553 2553</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" width="150px" height="105px" alt="peeja" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30px" height="30px" />
          <di className={styles.counter}>2</di>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
