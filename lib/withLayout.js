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

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();
const drawerWidth = 240;
const styles = (theme) => ({
  root: {
    // display: 'flex',
    // position: 'sticky',
  },
  shift: {
    position: 'relative',
  },
  shiftAnimate: {
    transition: theme.transitions.create(['margin-left', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  content: {
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 6,
  },
});

export default function withLayout(BaseComponent) {
  class App extends React.Component {
    state = {
      drawerOpen: true,
      instantDrawer: true,
    };

    static async getInitialProps(ctx) {
      const isFromServer = !!ctx.req;
      const props = { isFromServer };

      if (BaseComponent.getInitialProps) {
        Object.assign(props, (await BaseComponent.getInitialProps(ctx)) || {});
      }

      return props;
    }

    componentDidMount() {
      if (typeof window !== 'undefined') {
        let drawerOpen = cookies.getJSON('drawerOpen');
        // console.log('cockie drawerOpen type', typeof drawerOpen);
        if (drawerOpen === undefined) drawerOpen = window.innerWidth > 960;
        this.setState({ drawerOpen, instantDrawer: true });
      }
    }

    toggleDrawerHandler = () => {
      this.setState((prevState, props) => {
        const newVal = !prevState.drawerOpen;
        if (typeof window !== 'undefined') {
          cookies.set('drawerOpen', newVal, { expires: 365 });
        }
        return {
          drawerOpen: newVal,
          instantDrawer: false,
        };
      });
    };

    render() {
      const { classes } = this.props;
      const { drawerOpen, instantDrawer } = this.state;
      // console.log('render', drawerOpen, instantDrawer);
      const shift = drawerOpen ? drawerWidth : 0;
      return (
        <>
          <div
            className={classNames(classes.shift, {
              [classes.shiftAnimate]: !instantDrawer,
            })}
            style={{ marginLeft: `${shift}px`, width: `calc(100% - ${shift}px)` }}
          >
            <Header />
            <AppBar toggleDrawerHandler={this.toggleDrawerHandler} />
            <main className={classes.content}>
              <BaseComponent {...{ ..._.omit(this.props, 'classes'), drawerOpen }} />
            </main>
          </div>
          <Drawer width={drawerWidth} open={drawerOpen} instant={instantDrawer} />
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
