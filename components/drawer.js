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
import InstallIcon from 'mdi-material-ui/ArrowDownBoldHexagonOutline';
import UseIcon from '@material-ui/icons/PlayCircleOutline';
import FuncIcon from 'mdi-material-ui/FunctionVariant';
import CondenseIcon from 'mdi-material-ui/ArrowCollapseHorizontal';
import CondenseAllIcon from 'mdi-material-ui/ArrowCollapseAll';
import EachDeepIcon from 'mdi-material-ui/FileTree';
import ExistsIcon from 'mdi-material-ui/HelpNetworkOutline';
import FilterIcon from 'mdi-material-ui/FilterOutline';
import IndexIcon from 'mdi-material-ui/FormatListBulleted';
import OmitIcon from 'mdi-material-ui/PlaylistRemove';
import KeysIcon from 'mdi-material-ui/DotsVertical';
import PathIcon from 'mdi-material-ui/MapMarkerPath';
import ContactIcon from 'mdi-material-ui/Forum';
import GithubIcon from 'mdi-material-ui/GithubCircle';
import GithubAltIcon from 'mdi-material-ui/GithubBox';
import EmailIcon from 'mdi-material-ui/EmailOutline';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
const styles = (theme) => ({
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
    zIndex: theme.zIndex.drawer,
  },
  animated: {
    transition: theme.transitions.create(['transform'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  versionLabel: {
    float: 'left',
    marginTop: 24,
    marginLeft: 24,
  },
  closeDrawerButton: {
    margin: 10,
    marginBottom: 9,
    textAlign: 'right',
  },
  nestedList: {
    paddingLeft: 20,
  },
  drawerList: {},
});

function drawer(props) {
  const { classes, open, width, instant, toggleDrawerHandler } = props;
  const shift = open ? 0 : -width;
  return (
    <div
      className={classNames(classes.drawer, {
        [classes.animated]: !instant,
      })}
      style={{ width: `${width}px`, transform: `translate3d(${shift}px,0,0)` }}
    >
      <span className={classes.versionLabel}>v1.9.5</span>
      <div className={classes.closeDrawerButton}>
        <IconButton onClick={toggleDrawerHandler} aria-label="Close Sidebar">
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>
      <Divider />
      <List className={classes.drawerList}>
        <ListItemLink href="#installation">
          <ListItemIcon>
            <InstallIcon />
          </ListItemIcon>
          <ListItemText primary="Installation" />
        </ListItemLink>
        <ListItemLink href="#usage">
          <ListItemIcon>
            <UseIcon />
          </ListItemIcon>
          <ListItemText primary="Usage" />
        </ListItemLink>
        <ListItemLink href="#methods">
          <ListItemIcon>
            <FuncIcon />
          </ListItemIcon>
          <ListItemText primary="Methods" />
        </ListItemLink>
        <List className={classes.nestedList}>
          <ListItemLink href="#condense">
            <ListItemIcon>
              <CondenseIcon />
            </ListItemIcon>
            <ListItemText inset primary="condense" />
          </ListItemLink>
          <ListItemLink href="#condensedeep">
            <ListItemIcon>
              <CondenseAllIcon />
            </ListItemIcon>
            <ListItemText inset primary="condenseDeep" />
          </ListItemLink>
          <ListItemLink href="#eachdeep-foreachdeep">
            <ListItemIcon>
              <EachDeepIcon />
            </ListItemIcon>
            <ListItemText inset primary="(for)eachDeep" />
          </ListItemLink>
          <ListItemLink href="#exists">
            <ListItemIcon>
              <ExistsIcon />
            </ListItemIcon>
            <ListItemText inset primary="exists" />
          </ListItemLink>
          <ListItemLink href="#filterdeep">
            <ListItemIcon>
              <FilterIcon />
            </ListItemIcon>
            <ListItemText inset primary="filterDeep" />
          </ListItemLink>
          <ListItemLink href="#indexate">
            <ListItemIcon>
              <IndexIcon />
            </ListItemIcon>
            <ListItemText inset primary="indexate" />
          </ListItemLink>
          <ListItemLink href="#paths-keysdeep">
            <ListItemIcon>
              <KeysIcon />
            </ListItemIcon>
            <ListItemText inset primary="paths(keysDeep)" />
          </ListItemLink>
          <ListItemLink href="#omitdeep">
            <ListItemIcon>
              <OmitIcon />
            </ListItemIcon>
            <ListItemText inset primary="omitDeep" />
          </ListItemLink>
          <ListItemLink href="#pathtostring">
            <ListItemIcon>
              <PathIcon />
            </ListItemIcon>
            <ListItemText inset primary="pathToString" />
          </ListItemLink>
        </List>
        <Divider />
        <ListItem href="#methods">
          <ListItemIcon>
            <ContactIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
        <List className={classes.nestedList}>
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
          <ListItemLink href="http://yurigor.com/contact-me/">
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText inset primary="Message" />
          </ListItemLink>
        </List>
      </List>
    </div>
  );
}
drawer.defaultProps = {
  open: true,
  instant: true,
};
drawer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
  instant: PropTypes.bool,
  width: PropTypes.number.isRequired,
  toggleDrawerHandler: PropTypes.func.isRequired,
};

export default withStyles(styles)(drawer);
