import Head from 'next/head';
import Image from 'next/image';
import Featured from '@/components/Featured';
import styles from '@/styles/Home.module.css';
import PizzaList from '@/components/PizzaList';
import axios from 'axios';

export default function Home({ pizzaListData }) {
  // instead of useEff for fetching data, serverSide props are better.
  // fetch data before rendering components
  // whereas useEff fetch data after rendering component
  return (
    <div className={styles.container}>
      {/* SEO */}
      <Head>
        <title>Pizza Restaurant in New Delhi</title>
        <meta name="description" content="Best pizza shop in India" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaListData={pizzaListData} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/products');
  return {
    props: {
      pizzaListData: res.data,
    },
  };
};
