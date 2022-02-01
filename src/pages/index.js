import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

// eslint-disable-next-line camelcase
const head_data1 = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Eurotees™ by Eight</title>
      <html lang="en" />
      <meta name="description" content="Eurotees™ by Eight" />
    </Helmet>
    <App />
  </>
);

// eslint-disable-next-line camelcase
export default head_data1;
