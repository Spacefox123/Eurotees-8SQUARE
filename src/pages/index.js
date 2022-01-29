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
        <title>{title || 'Eurotees™ by Eight'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Eurotees™ by Eight'} />
      </Helmet>
      <App />
    </>
  );
};

export default head_data1;
