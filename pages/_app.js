import _ from 'lodash';
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import '../node_modules/highlight.js/styles/nord.css';
import './app.scss';

import theme from '../lib/theme';

function offset(el) {
  const rect = el.getBoundingClientRect();

  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

function scrollToHash(hash) {
  // const behavior = hash === undefined ? 'instant' : 'smooth';
  const behavior = 'instant';
  hash = hash || location.hash;
  // console.log('scrollToHash', hash);
  if (hash) {
    _.delay(() => {
      window.requestAnimationFrame(() => {
        const elem = document.getElementById(hash.substr(1));
        // console.log('scroll to el:', elem);
        if (elem) {
          const off = offset(elem);
          // console.log('offset', off);
          window.scrollTo({ behavior, top: off.top - 108 });
          if (hash !== location.hash) {
            history.pushState(null, '', hash);
          }
        }
      });
    }, 10);
  }
}
export default function MyApp(props) {
  const { Component, pageProps } = props;
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    const root = document.getElementsByTagName('html')[0];
    root.classList.add('mounted');

    document.addEventListener('click', (event) => {
      // console.log('a.click', event.target, event.target.closest('a'));
      const link = event.target.closest('a');
      if (link) {
        const href = link.href.split('#');
        if (href.length > 1) {
          const currentHref = location.href.split('#');
          if (currentHref[0] === href[0]) {
            // console.log(`location.${currentHref[0]} === ${href[0]}`);
            event.preventDefault();
            event.stopPropagation();
            scrollToHash(`#${href[1]}`);
          } else {
            // console.log(`location.${currentHref[0]} !== ${href[0]}`);
          }
        }
      }
    });
    // window.addEventListener('hashchange', (newURL,oldURL) => {
    //   me.scrollToHash.bind(me)()
    // }, false);
    scrollToHash();
  }, []);

  return (
    <>
      <Head>
        {/* Use minimum-scale=1 to enable GPU rasterization */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <title>Deepdash</title>
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
