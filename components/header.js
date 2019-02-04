import Head from 'next/head';
import './header.scss';

export default () => (
  <header className="logo">
    <Head>
      <title>Deepdash - traversal extension for Lodash</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/styles/default.min.css">
      <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/highlight.min.js"></script>
    </Head>
    <div className="sand" />
    <h1>
      <img src="/static/deepdash.full.svg" alt="Deepdash logo" />
    </h1>
  </header>
);
