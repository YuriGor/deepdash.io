// import '../scss/markdown.scss';
// import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TestTubeIcon from 'mdi-material-ui/FlaskOutline';
import ListItemText from '@material-ui/core/ListItemText';
import LatestVersionIcon from 'mdi-material-ui/TagTextOutline';
import VersionIcon from 'mdi-material-ui/TagOutline';
import ChangeLogIcon from 'mdi-material-ui/FileCompare';
import withLayout from '../lib/withLayout';
import markdown from '../jss/markdown';
import { styles as drawerStyles } from '../components/drawer';
import ListItemLink from '../components/listItemLink';
import ListItemNextLink from '../components/listItemNextLink';

const mdMain = preval`
      module.exports = require('../preval/md')('CHANGELOG');
    `;
// console.log(mdMain);
const styles = (theme) => ({
  ...markdown,
  ...drawerStyles,
});

function Index(props) {
  const { classes } = props;
  const htm = { __html: mdMain };
  return (
    <section>
      <div className={classes.markdown} dangerouslySetInnerHTML={htm} />
    </section>
  );
}
Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

function SideContent(props) {
  const { classes } = props;
  return (
    <>
      {/* <ListItemNextLink href="/lab">
        <ListItemIcon>
          <TestTubeIcon />
        </ListItemIcon>
        <ListItemText primary="Test Lab" />
      </ListItemNextLink> */}
      <ListItemLink href="#change-log">
        <ListItemIcon>
          <ChangeLogIcon />
        </ListItemIcon>
        <ListItemText primary="Change Log" />
      </ListItemLink>
      <List className={classes.nestedList}>
        <ListItemLink href="#v5-1-0">
          <ListItemIcon>
            <LatestVersionIcon />
          </ListItemIcon>
          <ListItemText primary="v5.1.0" />
        </ListItemLink>
        <ListItemLink href="#v4-6-0">
          <ListItemIcon>
            <VersionIcon />
          </ListItemIcon>
          <ListItemText primary="v4.6.0" />
        </ListItemLink>
        <ListItemLink href="#v3-1-0">
          <ListItemIcon>
            <VersionIcon />
          </ListItemIcon>
          <ListItemText primary="v3.1.0" />
        </ListItemLink>
        <ListItemLink href="#v2-1-0">
          <ListItemIcon>
            <VersionIcon />
          </ListItemIcon>
          <ListItemText primary="v2.1.0" />
        </ListItemLink>
        <ListItemLink href="#v2-0-0">
          <ListItemIcon>
            <VersionIcon />
          </ListItemIcon>
          <ListItemText primary="v2.0.0" />
        </ListItemLink>
        <ListItemLink href="#v1-9-5">
          <ListItemIcon>
            <VersionIcon />
          </ListItemIcon>
          <ListItemText primary="v1.9.5" />
        </ListItemLink>
      </List>
    </>
  );
}
SideContent.propTypes = {
  classes: PropTypes.object.isRequired,
};
// export default withLayout(withStyles(styles)(Index));
export default withLayout('/changelog', withStyles(styles)(SideContent), withStyles(styles)(Index));
