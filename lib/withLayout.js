import _ from 'lodash';
import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import cookies from 'js-cookie';
import Header from '../components/header';
import AppBar from '../components/appBar';
import Drawer from '../components/drawer';
import * as gtag from './gtag';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

const drawerWidth = 240;
const styles = (theme) => ({
  root: {
    // display: 'flex',
    // position: 'sticky',
  },
  shiftable: {
    [theme.breakpoints.up('sm')]: {
      position: 'relative',
    },
    width: '100%',
  },
  shiftableAnimate: {
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create(['transform'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  shift: {
    [theme.breakpoints.up('sm')]: {
      transform: `translateX(${drawerWidth}px)`,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: [
        theme.transitions.create(['transform'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        theme.transitions.create(['width'], {
          easing: 'linear',
          duration: 0,
          delay: theme.transitions.duration.leavingScreen,
        }),
      ],
    },
  },
  content: {
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 6,
    maxWidth: '100%',
  },
});

export default function withLayout(currentUrl, SideContent, Page) {
  class App extends React.Component {
    state = {
      drawerOpen: true,
      instantDrawer: true,
    };

    static async getInitialProps(ctx) {
      const isFromServer = !!ctx.req;
      const props = { isFromServer };

      if (Page.getInitialProps) {
        Object.assign(props, (await Page.getInitialProps(ctx)) || {});
      }

      if (SideContent.getInitialProps) {
        Object.assign(props, (await SideContent.getInitialProps(ctx)) || {});
      }

      return props;
    }

    componentDidMount() {
      if (typeof window !== 'undefined') {
        let drawerOpen = cookies.getJSON('drawerOpen');
        // console.log('cockie drawerOpen type', typeof drawerOpen);
        if (drawerOpen === undefined) drawerOpen = window.innerWidth >= 960;
        if (window.innerWidth < 600) drawerOpen = false;
        this.setState({ drawerOpen, instantDrawer: true });
      }
    }

    toggleDrawerHandler = (open) => {
      // console.log('toggleDrawerHandler');
      this.setState((prevState, props) => {
        if (open === prevState.drawerOpen) return;
        if (open === undefined) open = !prevState.drawerOpen;
        if (typeof window !== 'undefined') {
          cookies.set('drawerOpen', open, { expires: 365 });
        }
        return {
          drawerOpen: open,
          instantDrawer: false,
        };
      });
    };

    render() {
      const me = this;
      const { classes } = me.props;
      const { drawerOpen, instantDrawer } = me.state;
      // console.log(drawerOpen);
      const openDrawerHandler = () => {
        me.toggleDrawerHandler();
      };
      const closeDrawerHandler = (e) => {
        // console.log(`closeDrawerHandler, drawerOpen:${drawerOpen}`, e);
        if (!_.find(e.path, ['id', 'btOpenDrawer'])) {
          me.toggleDrawerHandler(false);
        }
      };
      // const openDrawerHandler = !drawerOpen
      //   ? this.toggleDrawerHandler
      //   : () => {
      //       console.log('drawer opened already');
      //     };
      return (
        <>
          <div
            className={classNames(
              classes.shiftable,
              {
                [classes.shiftableAnimate]: !instantDrawer,
              },
              {
                [classes.shift]: drawerOpen,
              },
            )}
          >
            <Header />
            <AppBar openDrawerHandler={openDrawerHandler} />
            <main className={classes.content}>
              <Page drawerOpen={drawerOpen} />
            </main>
          </div>
          <Drawer
            closeDrawerHandler={closeDrawerHandler}
            width={drawerWidth}
            open={drawerOpen}
            instant={instantDrawer}
            currentUrl={currentUrl}
          >
            <SideContent />
          </Drawer>
        </>
      );
    }
  }
  App.propTypes = {
    classes: PropTypes.object.isRequired,
    drawerOpen: PropTypes.bool,
    instantDrawer: PropTypes.bool,
  };
  App.defaultProps = {
    drawerOpen: true,
    instantDrawer: true,
  };
  return withStyles(styles)(App);
}
