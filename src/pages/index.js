import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const head_data1 = () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || '8SQUARE | Eurotees™'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || '8SQUARE | Eurotees™'} />
      </Helmet>
      <App />
    </>
  );
};

export default head_data1;
