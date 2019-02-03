import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
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
    transition: theme.transitions.create(['margin-left', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  content: {
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

export default function withLayout(BaseComponent) {
  class App extends React.Component {
    state = {
      drawerOpen: false,
    };

    static async getInitialProps(ctx) {
      const isFromServer = !!ctx.req;
      const props = { isFromServer };

      if (BaseComponent.getInitialProps) {
        Object.assign(props, (await BaseComponent.getInitialProps(ctx)) || {});
      }

      return props;
    }

    toggleDrawerHandler = () => {
      this.setState((prevState, props) => ({ drawerOpen: !prevState.drawerOpen }));
    };

    render() {
      const { classes } = this.props;
      const { drawerOpen } = this.state;
      const shift = drawerOpen ? drawerWidth : 0;
      return (
        <>
          <div
            className={classes.shift}
            style={{ marginLeft: `${shift}px`, width: `calc(100% - ${shift}px)` }}
          >
            <Header />
            <AppBar toggleDrawerHandler={this.toggleDrawerHandler} />
            <main className={classes.content}>
              <BaseComponent {...this.props} />
            </main>
          </div>
          <Drawer width={drawerWidth} open={drawerOpen} />
        </>
      );
    }
  }
  App.propTypes = {
    classes: PropTypes.object.isRequired,
    drawerOpen: PropTypes.bool,
  };
  App.defaultProps = {
    drawerOpen: false,
  };
  return withStyles(styles)(App);
}
