import styles from '@/styles/Product.module.css';
import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from 'redux/cartSlice';

const Product = ({ pizzaData }) => {
  const [price, setPrice] = useState(pizzaData.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();
  const changePrice = number => {
    setPrice(prevState => prevState + number);
  };
  const handleSize = sizeIndex => {
    const difference = pizzaData.prices[sizeIndex] - pizzaData.prices[size];
    setSize(sizeIndex);

    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(option.price);
      setExtras(prevState => [...prevState, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter(extra => extra._id !== option._id));
    }
  };
  const handleClick = () => {
    dispatch(addProduct({ ...pizzaData, extras, price, quantity }));
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={pizzaData.img}
            layout="fill"
            alt="pizza"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizzaData.title}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{pizzaData.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="sm-pizza" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="md-pizza" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="lg-pizza" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingrediants</h3>
        <div className={styles.ingrediants}>
          {pizzaData.extraOptions.map(option => (
            <div key={option._id} className={styles.option}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                onChange={e => handleChange(e, option)}
                className={styles.checkbox}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
          ))}

          {/* <div className={styles.option}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className={styles.checkbox}
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="mustard"
              name="mustard"
              className={styles.checkbox}
            />
            <label htmlFor="mustard">Mustard Sauce</label>
          </div> */}
        </div>
        <div className={styles.add}>
          <input
            onChange={e => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button} onClick={handleClick}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Product;

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      pizzaData: res.data,
    },
  };
};
