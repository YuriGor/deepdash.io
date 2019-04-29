// import '../scss/markdown.scss';
// import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InstallIcon from 'mdi-material-ui/ArrowDownBoldHexagonOutline';
import UseIcon from '@material-ui/icons/PlayCircleOutline';
import FuncIcon from 'mdi-material-ui/FunctionVariant';
import CondenseIcon from 'mdi-material-ui/ArrowCollapseHorizontal';
import CondenseAllIcon from 'mdi-material-ui/ArrowCollapseAll';
import EachDeepIcon from 'mdi-material-ui/FileTree';
import ExistsIcon from 'mdi-material-ui/HelpNetworkOutline';
import FilterIcon from 'mdi-material-ui/FilterOutline';
import IndexIcon from 'mdi-material-ui/FormatListBulleted';
import PickIcon from 'mdi-material-ui/PlaylistPlus';
import OmitIcon from 'mdi-material-ui/PlaylistRemove';
import ReduceIcon from 'mdi-material-ui/DebugStepInto';
import KeysIcon from 'mdi-material-ui/DotsVertical';
import PathIcon from 'mdi-material-ui/MapMarkerPath';
import CallbackIcon from 'mdi-material-ui/UndoVariant';
import ChangeLogIcon from 'mdi-material-ui/FileCompare';
import MapIcon from 'mdi-material-ui/TransitionMasked';
import withLayout from '../lib/withLayout';
import markdown from '../jss/markdown';
import { styles as drawerStyles } from '../components/drawer';
import ListItemLink from '../components/listItemLink';
import ListItemNextLink from '../components/listItemNextLink';

const mdMain = preval`
      module.exports = require('../preval/md')('docs/index');
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
        <List className={classes.nestedList}>
          <ListItemLink href="#iteratee">
            <ListItemIcon>
              <CallbackIcon />
            </ListItemIcon>
            <ListItemText inset primary="iteratee" />
          </ListItemLink>
        </List>
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
        <ListItemLink href="#index">
          <ListItemIcon>
            <IndexIcon />
          </ListItemIcon>
          <ListItemText inset primary="index" />
        </ListItemLink>
        <ListItemLink href="#paths-keysdeep">
          <ListItemIcon>
            <KeysIcon />
          </ListItemIcon>
          <ListItemText inset primary="paths(keysDeep)" />
        </ListItemLink>
        <ListItemLink href="#pickdeep">
          <ListItemIcon>
            <PickIcon />
          </ListItemIcon>
          <ListItemText inset primary="pickDeep" />
        </ListItemLink>
        <ListItemLink href="#omitdeep">
          <ListItemIcon>
            <OmitIcon />
          </ListItemIcon>
          <ListItemText inset primary="omitDeep" />
        </ListItemLink>
        <ListItemLink href="#mapdeep">
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText inset primary="mapDeep" />
        </ListItemLink>
        <ListItemLink href="#reducedeep">
          <ListItemIcon>
            <ReduceIcon />
          </ListItemIcon>
          <ListItemText inset primary="reduceDeep" />
        </ListItemLink>
        <ListItemLink href="#pathtostring">
          <ListItemIcon>
            <PathIcon />
          </ListItemIcon>
          <ListItemText inset primary="pathToString" />
        </ListItemLink>
      </List>
      <ListItemNextLink href="/changelog#v3-1-0">
        <ListItemIcon>
          <ChangeLogIcon />
        </ListItemIcon>
        <ListItemText inset primary="Change Log" />
      </ListItemNextLink>
    </>
  );
}
SideContent.propTypes = {
  classes: PropTypes.object.isRequired,
};
// export default withLayout(withStyles(styles)(Index));
export default withLayout('/', withStyles(styles)(SideContent), withStyles(styles)(Index));
