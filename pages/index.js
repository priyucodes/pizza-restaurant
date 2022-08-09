import Head from 'next/head';
import Image from 'next/image';
import Featured from '@/components/Featured';
import styles from '@/styles/Home.module.css';
import PizzaList from '@/components/PizzaList';
import axios from 'axios';
import { useState } from 'react';
import Add from '@/components/Add';
import AddButton from '@/components/AddButton';

export default function Home({ pizzaListData, admin }) {
  const [close, setClose] = useState(true);
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
      {admin && <AddButton setClose={setClose} />}
      <PizzaList pizzaListData={pizzaListData} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async ctx => {
  const myCookie = ctx.req?.cookies || '';
  let admin = false;
  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  const res = await axios.get('http://localhost:3000/api/products');
  return {
    props: {
      pizzaListData: res.data,
      admin,
    },
  };
};
