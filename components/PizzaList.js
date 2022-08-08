import styles from '@/styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';
const PizzaList = ({ pizzaListData }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Accumsan sit amet
        nulla facilisi morbi tempus iaculis urna id. Quisque egestas diam in
        arcu cursus euismod. Et tortor at risus viverra.
      </p>
      <div className={styles.wrapper}>
        {pizzaListData.map(pizza => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};
export default PizzaList;
