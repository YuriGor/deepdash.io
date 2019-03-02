import _ from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ContactIcon from 'mdi-material-ui/Message';
import ChatIcon from 'mdi-material-ui/Forum';
import GithubIcon from 'mdi-material-ui/GithubCircle';
import GithubAltIcon from 'mdi-material-ui/GithubBox';
import EmailIcon from 'mdi-material-ui/EmailOutline';
import TwitterIcon from 'mdi-material-ui/TwitterCircle';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
// import MenuItem from '@material-ui/core/MenuItem';
import Router from 'next/router';
import DocsIcon from 'mdi-material-ui/BookOpenPageVariant';
import ListItemLink from './listItemLink';
import versions from '../lib/versions';
import ListItemNextLink from './listItemNextLink';

const nestedListStyle = {
  paddingLeft: 20,
};
const stylesPrivate = (theme) => ({
  drawer: {
    flexShrink: 0,
    position: 'fixed',
    // float: 'left',
    overflow: 'auto',
    backgroundColor: theme.palette.background.default,
    top: 0,
    left: 0,
    bottom: 0,
    boxShadow: '0px 0px 15px rgba(0,0,0,1)',
    opacity: 0.95,
    zIndex: theme.zIndex.drawer,
    [theme.breakpoints.up('sm')]: {
      opacity: 1,
    },
  },
  animated: {
    transition: theme.transitions.create(['transform'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  versionSelect: {
    float: 'left',
    marginTop: 14,
    marginLeft: 24,
  },
  closeDrawerButton: {
    margin: 10,
    marginBottom: 9,
    textAlign: 'right',
  },
  drawerList: {},
  nestedList: nestedListStyle,
});

function drawer(props) {
  const { classes, open, width, instant, closeDrawerHandler, currentUrl, children } = props;
  // console.log('currentUrl', currentUrl);
  const showVersions = _.some(versions, ['u', currentUrl]);
  const clickAwayHandler = (e) => {
    if (window.innerWidth >= 600) {
      return;
    }
    closeDrawerHandler(e);
  };
  const shift = open ? 0 : -width;
  return (
    <div
      className={classNames('hide-till-mounted-sm', classes.drawer, {
        [classes.animated]: !instant,
      })}
      style={{ width: `${width}px`, transform: `translate3d(${shift}px,0,0)` }}
    >
      <ClickAwayListener onClickAway={clickAwayHandler}>
        <>
          {showVersions && (
            <NativeSelect
              value={currentUrl}
              onChange={(event) => Router.push(event.target.value)}
              name="age"
              className={classes.versionSelect}
            >
              {versions.map((version) => (
                <option key={version.v} value={version.u}>
                  {version.v}
                </option>
              ))}
            </NativeSelect>
          )}
          <div className={classes.closeDrawerButton}>
            <IconButton onClick={closeDrawerHandler} aria-label="Close Sidebar">
              <CloseIcon fontSize="small" />
            </IconButton>
          </div>
          <Divider />
          <ListItemNextLink href="/">
            <ListItemIcon>
              <DocsIcon />
            </ListItemIcon>
            <ListItemText inset primary="Docs" />
          </ListItemNextLink>
          <List className={classes.drawerList}>{children}</List>
          <Divider />
          <ListItem href="#methods">
            <ListItemIcon>
              <ContactIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
          <List className={classes.nestedList}>
            <ListItemLink href="https://spectrum.chat/deepdash">
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText inset primary="Chat" />
            </ListItemLink>
            <ListItemLink href="https://github.com/YuriGor/deepdash/issues">
              <ListItemIcon>
                <GithubIcon />
              </ListItemIcon>
              <ListItemText inset primary="Deepdash" />
            </ListItemLink>
            <ListItemLink href="https://github.com/YuriGor/deepdash.io/issues">
              <ListItemIcon>
                <GithubAltIcon />
              </ListItemIcon>
              <ListItemText inset primary="Site" />
            </ListItemLink>
            <ListItemLink href="https://twitter.com/gor_yuri">
              <ListItemIcon>
                <TwitterIcon />
              </ListItemIcon>
              <ListItemText inset primary="Twitter" />
            </ListItemLink>
            <ListItemLink href="http://yurigor.com/contact-me/">
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText inset primary="Message" />
            </ListItemLink>
          </List>
        </>
      </ClickAwayListener>
    </div>
  );
}
drawer.defaultProps = {
  open: true,
  instant: true,
  currentUrl: '/',
};
drawer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
  instant: PropTypes.bool,
  width: PropTypes.number.isRequired,
  currentUrl: PropTypes.string.isRequired,
  closeDrawerHandler: PropTypes.func.isRequired,
};

export default withStyles(stylesPrivate)(drawer);
export const styles = {
  nestedList: nestedListStyle,
};
