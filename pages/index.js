import Head from 'next/head';
import Image from 'next/image';
import Featured from '@/components/Featured';
import styles from '@/styles/Home.module.css';
import PizzaList from '@/components/PizzaList';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* SEO */}
      <Head>
        <title>Pizza Restaurant in New Delhi</title>
        <meta name="description" content="Best pizza shop in India" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  );
}
