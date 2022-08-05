import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* SEO */}
      <Head>
        <title>Pizza Restaurant in New Delhi</title>
        <meta name="description" content="Best pizza shop in India" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
