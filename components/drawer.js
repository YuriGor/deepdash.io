import PropTypes from 'prop-types';
// import Drawer from '@material-ui/core/Drawer';
// import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const styles = (theme) => ({
  drawer: {
    flexShrink: 0,
    position: 'fixed',
    // float: 'left',
    overflow: 'visible',
    backgroundColor: theme.palette.background.default,
    top: 0,
    left: 0,
    bottom: 0,
    boxShadow: '0px 0px 15px rgba(0,0,0,1)',
  },
  animated: {
    transition: theme.transitions.create(['transform'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
});

function drawer(props) {
  const { classes, open, width, instant } = props;
  const shift = open ? 0 : -width;
  return (
    <div
      className={classNames(classes.drawer, {
        [classes.animated]: !instant,
      })}
      style={{ width: `${width}px`, transform: `translate3d(${shift}px,0,0)` }}
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
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
};

export default withStyles(styles)(drawer);
