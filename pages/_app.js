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

  offset(el) {
    const rect = el.getBoundingClientRect();

    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  shiftHashScroll() {
    const me = this;
    console.log('shiftHashScroll', location.hash);
    if (location.hash) {
      _.delay(() => {
        window.requestAnimationFrame(() => {
          const elem = document.getElementById(location.hash.substr(1));
          if (elem) {
            const off = me.offset(elem);
            console.log('offset', off);
            window.scroll({ behavior: 'smooth', top: off.top - 120 });
          }
        });
      }, 10);
    }
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
      window.addEventListener('hashchange', this.shiftHashScroll.bind(this), false);
      this.shiftHashScroll();
    }
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
