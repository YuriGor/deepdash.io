import Head from 'next/head';
import cssClasses from './header.module.scss';

const header = () => (
  <header className={cssClasses.logo}>
    <Head>
      <title>Deepdash - easy search, filter and process deep nested data</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    <div className={cssClasses.sand} />
    <h1>
      <img src="/static/deepdash.full.svg" alt="Deepdash logo" />
    </h1>
  </header>
);

export default header;
