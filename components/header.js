import Head from 'next/head';
import '../scss/styles.scss';

export default () => (
  <header>
    <Head>
      <title>Deepdash - traversal extension for Lodash</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Head>
    <h1>
      <img src="/static/deepdash.full.svg" alt="Deepdash logo" />
    </h1>
  </header>
);
