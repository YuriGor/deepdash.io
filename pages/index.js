// import '../scss/markdown.scss';
// import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InstallIcon from 'mdi-material-ui/ArrowDownBoldHexagonOutline';
import UseIcon from '@material-ui/icons/PlayCircleOutline';
import TestTubeIcon from 'mdi-material-ui/FlaskOutline';
import FuncIcon from 'mdi-material-ui/FunctionVariant';
import CondenseIcon from 'mdi-material-ui/ArrowCollapseHorizontal';
import CondenseAllIcon from 'mdi-material-ui/ArrowCollapseAll';
import EachDeepIcon from 'mdi-material-ui/FileTree';
import ExistsIcon from 'mdi-material-ui/HelpNetworkOutline';
import FilterIcon from 'mdi-material-ui/FilterOutline';
import FindIcon from 'mdi-material-ui/SelectSearch';
import FindValueIcon from 'mdi-material-ui/LayersSearchOutline';
import FindPathIcon from 'mdi-material-ui/MapSearchOutline';
import IndexIcon from 'mdi-material-ui/FormatListBulleted';
import PickIcon from 'mdi-material-ui/PlaylistPlus';
import OmitIcon from 'mdi-material-ui/PlaylistRemove';
import ReduceIcon from 'mdi-material-ui/DebugStepInto';
import SomeIcon from 'mdi-material-ui/BeakerQuestionOutline';
import KeysIcon from 'mdi-material-ui/DotsVertical';
import PathIcon from 'mdi-material-ui/MapMarkerPath';
import CallbackIcon from 'mdi-material-ui/UndoVariant';
import ChangeLogIcon from 'mdi-material-ui/FileCompare';
import MapIcon from 'mdi-material-ui/ArrangeBringToFront';
import MapValuesIcon from 'mdi-material-ui/TransitionMasked';
import MapKeysIcon from 'mdi-material-ui/TransitConnection';
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
          <ListItemText primary="condense" />
        </ListItemLink>
        <ListItemLink href="#condensedeep">
          <ListItemIcon>
            <CondenseAllIcon />
          </ListItemIcon>
          <ListItemText primary="condenseDeep" />
        </ListItemLink>
        <ListItemLink href="#eachdeep-foreachdeep">
          <ListItemIcon>
            <EachDeepIcon />
          </ListItemIcon>
          <ListItemText primary="(for)eachDeep" />
        </ListItemLink>
        <List className={classes.nestedList}>
          <ListItemLink href="#iteratee">
            <ListItemIcon>
              <CallbackIcon />
            </ListItemIcon>
            <ListItemText primary="iteratee" />
          </ListItemLink>
        </List>
        <ListItemLink href="#exists">
          <ListItemIcon>
            <ExistsIcon />
          </ListItemIcon>
          <ListItemText primary="exists" />
        </ListItemLink>
        <ListItemLink href="#filterdeep">
          <ListItemIcon>
            <FilterIcon />
          </ListItemIcon>
          <ListItemText primary="filterDeep" />
        </ListItemLink>
        <ListItemLink href="#finddeep">
          <ListItemIcon>
            <FindIcon />
          </ListItemIcon>
          <ListItemText primary="findDeep" />
        </ListItemLink>
        <ListItemLink href="#findvaluedeep">
          <ListItemIcon>
            <FindValueIcon />
          </ListItemIcon>
          <ListItemText primary="findValueDeep" />
        </ListItemLink>
        <ListItemLink href="#findpathdeep">
          <ListItemIcon>
            <FindPathIcon />
          </ListItemIcon>
          <ListItemText primary="findPathDeep" />
        </ListItemLink>
        <ListItemLink href="#index">
          <ListItemIcon>
            <IndexIcon />
          </ListItemIcon>
          <ListItemText primary="index" />
        </ListItemLink>
        <ListItemLink href="#paths-keysdeep">
          <ListItemIcon>
            <KeysIcon />
          </ListItemIcon>
          <ListItemText primary="paths(keysDeep)" />
        </ListItemLink>
        <ListItemLink href="#pickdeep">
          <ListItemIcon>
            <PickIcon />
          </ListItemIcon>
          <ListItemText primary="pickDeep" />
        </ListItemLink>
        <ListItemLink href="#omitdeep">
          <ListItemIcon>
            <OmitIcon />
          </ListItemIcon>
          <ListItemText primary="omitDeep" />
        </ListItemLink>

        <ListItemLink href="#mapdeep">
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary="mapDeep" />
        </ListItemLink>

        <ListItemLink href="#mapvaluesdeep">
          <ListItemIcon>
            <MapValuesIcon />
          </ListItemIcon>
          <ListItemText primary="mapValuesDeep" />
        </ListItemLink>

        <ListItemLink href="#mapkeysdeep">
          <ListItemIcon>
            <MapKeysIcon />
          </ListItemIcon>
          <ListItemText primary="mapKeysDeep" />
        </ListItemLink>

        <ListItemLink href="#reducedeep">
          <ListItemIcon>
            <ReduceIcon />
          </ListItemIcon>
          <ListItemText primary="reduceDeep" />
        </ListItemLink>
        <ListItemLink href="#somedeep">
          <ListItemIcon>
            <SomeIcon />
          </ListItemIcon>
          <ListItemText primary="someDeep" />
        </ListItemLink>
        <ListItemLink href="#pathtostring">
          <ListItemIcon>
            <PathIcon />
          </ListItemIcon>
          <ListItemText primary="pathToString" />
        </ListItemLink>
      </List>
      {/* <ListItemNextLink href="/lab">
        <ListItemIcon>
          <TestTubeIcon />
        </ListItemIcon>
        <ListItemText primary="Test Lab" />
      </ListItemNextLink> */}
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
const res = withLayout('/', withStyles(styles)(SideContent), withStyles(styles)(Index));
// console.log(res);

export default res;
