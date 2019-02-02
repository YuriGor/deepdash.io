import Head from 'next/head';
import '../scss/styles.scss';

export default () => (
  <header className="logo">
    <Head>
      <title>Deepdash - traversal extension for Lodash</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    <div className="sand" />
    <h1>
      <img src="/static/deepdash.full.svg" alt="Deepdash logo" />
    </h1>
  </header>
);
