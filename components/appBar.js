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
import GithubIcon from 'mdi-material-ui/Github';
import NpmIcon from 'mdi-material-ui/PackageDown';
import CdnIcon from 'mdi-material-ui/CloudDownloadOutline';

const styles = (theme) => ({
  appBar: {
    // width: `calc(100% - ${drawerWidth}px)`,
    // marginLeft: drawerWidth,
    zIndex: theme.zIndex.drawer - 1,
    color: '#FFF',
    opacity: 0.9,
    '&:hover': {
      opacity: 1,
    },
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
    marginRight: '0px',
    top: '4px',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  logoSmall: {
    display: 'block',
    height: '24px',
    marginRight: '0px',
    top: '2px',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

function appBar(props) {
  const { classes, openDrawerHandler } = props;

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        <IconButton
          id="btOpenDrawer"
          onClick={openDrawerHandler}
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
        <IconButton href="https://github.com/YuriGor/deepdash" color="inherit">
          <GithubIcon />
        </IconButton>
        <IconButton href="https://www.npmjs.com/package/deepdash" color="inherit">
          <NpmIcon />
        </IconButton>
        <IconButton href="https://www.jsdelivr.com/package/npm/deepdash" color="inherit">
          <CdnIcon />
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
  openDrawerHandler: PropTypes.func.isRequired,
};

export default withStyles(styles)(appBar);
