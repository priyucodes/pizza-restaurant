import { useEffect } from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';
let deferredPrompt;
if (typeof window !== 'undefined') {
  if (!window.Promise) {
    window.Promise = Promise;
  }
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then(() => {
          console.log('Service Worker registered');
        })
        .catch(err => {
          console.error(err);
        });
    }
    window.addEventListener('beforepromptload', e => {
      e.preventDefault();
      deferredPrompt = e;
      console.log('beforepromptload fired!');
      return false;
    });
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
