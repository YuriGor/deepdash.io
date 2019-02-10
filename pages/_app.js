import _ from 'lodash';
import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../lib/context';

class MyApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  static offset(el) {
    const rect = el.getBoundingClientRect();

    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  scrollToHash(hash) {
    const me = this;
    hash = hash || location.hash;
    // console.log('scrollToHash', hash);
    if (hash) {
      _.delay(() => {
        window.requestAnimationFrame(() => {
          const elem = document.getElementById(hash.substr(1));
          // console.log('scroll to el:', elem);
          if (elem) {
            const off = MyApp.offset(elem);
            // console.log('offset', off);
            window.scroll({ behavior: 'smooth', top: off.top - 108 });
            if (hash !== location.hash) {
              history.pushState(null, '', hash);
            }
          }
        });
      }, 10);
    }
  }

  componentDidMount() {
    // console.log('componentDidMount');
    // Remove the server-side injected CSS.
    const me = this;
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
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
            me.scrollToHash.bind(me)(`#${href[1]}`);
          } else {
            // console.log(`location.${currentHref[0]} !== ${href[0]}`);
          }
        }
      }
    });
    // window.addEventListener('hashchange', (newURL,oldURL) => {
    //   me.scrollToHash.bind(me)()
    // }, false);
    this.scrollToHash();
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>Deepdash</title>
        </Head>
        {/* Wrap every page in Jss and Theme providers */}
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server-side. */}
            <Component pageContext={this.pageContext} {...pageProps} />
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}

export default MyApp;
