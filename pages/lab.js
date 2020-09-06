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
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import EachDeepIcon from 'mdi-material-ui/FileTree';
import ChangeLogIcon from 'mdi-material-ui/FileCompare';
import withLayout from '../lib/withLayout';
import markdown from '../jss/markdown';
import { styles as drawerStyles } from '../components/drawer';
import ListItemLink from '../components/listItemLink';
import ListItemNextLink from '../components/listItemNextLink';

// console.log(mdMain);
const styles = (theme) => ({
  ...markdown,
  ...drawerStyles,
});

function Index(props) {
  const { classes } = props;
  // const htm = { __html: mdMain };
  return (
    <section>
      <TextareaAutosize rowsMax={4} aria-label="maximum height" placeholder="Maximum 4 rows" />
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
      <ListItemNextLink href="/lab">
        <ListItemIcon>
          <TestTubeIcon />
        </ListItemIcon>
        <ListItemText primary="Test Lab" />
      </ListItemNextLink>
      <List className={classes.nestedList}>
        <ListItemLink href="#eachdeep-foreachdeep">
          <ListItemIcon>
            <EachDeepIcon />
          </ListItemIcon>
          <ListItemText primary="(for)eachDeep" />
        </ListItemLink>
      </List>
      <ListItemNextLink href="/changelog">
        <ListItemIcon>
          <ChangeLogIcon />
        </ListItemIcon>
        <ListItemText primary="Change Log" />
      </ListItemNextLink>
    </>
  );
}
SideContent.propTypes = {
  classes: PropTypes.object.isRequired,
};
// export default withLayout(withStyles(styles)(Index));
export default withLayout('/lab', withStyles(styles)(SideContent), withStyles(styles)(Index));
