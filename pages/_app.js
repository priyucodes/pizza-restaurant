import { useEffect } from 'react';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  let deferredPrompt;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!window.Promise) {
        window.Promise = Promise;
      }
    }
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
    // window.addEventListener('beforepromptload', e => {
    //   e.preventDefault();
    //   // deferredPrompt = e;
    //   console.log('beforepromptload fired!');
    //   return false;
    // });
  }, []);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
