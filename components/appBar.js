import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from 'next/link';
// import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const styles = (theme) => ({
  appBar: {
    // width: `calc(100% - ${drawerWidth}px)`,
    // marginLeft: drawerWidth,
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 0,
  },
  logo: {
    display: 'none',
    height: '24px',
    marginRight: '20px',
    top: '4px',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logoSmall: {
    display: 'block',
    height: '24px',
    marginRight: '15px',
    top: '2px',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
});

function appBar(props) {
  const { classes, toggleDrawerHandler } = props;

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        <IconButton
          onClick={toggleDrawerHandler}
          className={classes.menuButton}
          color="inherit"
          aria-label="Open drawer"
        >
          <MenuIcon />
        </IconButton>
        <IconButton href="/">
          <>
            <img
              className={classes.logo}
              src="/static/deepdash.white.full.svg"
              alt="Deepdash logo"
            />
            <img
              className={classes.logoSmall}
              src="/static/deepdash.white.svg"
              alt="Deepdash logo"
            />
          </>
        </IconButton>
        <div className={classes.grow} />
        <IconButton href="#deepdash" color="inherit">
          <KeyboardArrowUpIcon aria-label="Scroll to Top" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
appBar.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawerHandler: PropTypes.func.isRequired,
};

export default withStyles(styles)(appBar);
