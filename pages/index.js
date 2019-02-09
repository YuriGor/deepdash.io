// import '../scss/markdown.scss';
// import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import classNames from 'classnames';
import markdown from '../jss/markdown';
import withLayout from '../lib/withLayout';

const mdMain = preval`
      module.exports = require('../preval/pages');
    `;
// console.log(mdMain);
const styles = (theme) => ({
  ...markdown,
});

class Index extends React.Component {
  static propTypes = {
    md: PropTypes.string,
    classes: PropTypes.object.isRequired,
    drawerOpen: PropTypes.bool,
  };

  static defaultProps = {
    md: mdMain,
    drawerOpen: true,
  };

  constructor(props) {
    super(props);

    const { md } = props;

    this.state = {
      md,
    };
  }

  static async getInitialProps({ req, query }) {
    console.log('getInitialProps', mdMain);
    return { md: mdMain };
  }

  render() {
    const { md } = this.state;
    const { classes, drawerOpen } = this.props;
    const htm = { __html: md };
    // console.log('drawerOpen:', drawerOpen, htm);
    return (
      // {/* <section> */}
      // {/*   <Link href="/about"> */}
      // {/*     <a>Go to About Me (test Now For GitHub deployment)</a> */}
      // {/*   </Link> */}
      // {/* </section> */}
      <section>
        <div
          className={classNames(classes.markdown, {
            [classes.hideContents]: drawerOpen,
          })}
          dangerouslySetInnerHTML={htm}
        />
      </section>
    );
  }
}

// export default withLayout(withStyles(styles)(Index));
export default withLayout(withStyles(styles)(Index));
