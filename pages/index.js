import '../scss/markdown.scss';
import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import WithLayout from '../lib/withLayout';

const mdMain = preval`
      const remark = require('remark');
      const highlight = require('remark-highlight.js');
      const html = require('remark-html');
      const remark2react = require('remark-react');
      const toc = require('remark-toc');
      const slug = require('remark-slug');
      const fs = require('fs');
      var htm = fs.readFileSync(require.resolve(__dirname+'/../markdown/main.md'), 'utf8');
      htm = remark()
      .use(highlight)
      .use(html)
      .use(slug)
      .use(toc)
      // .use(remark2react)
      .processSync(htm).contents;
      module.exports = htm;
    `;
// console.log(mdMain);
class Index extends React.Component {
  static propTypes = {
    md: PropTypes.string,
  };

  static defaultProps = {
    md: 'Hello\n======\nworld',
  };

  constructor(props) {
    super(props);

    const { md } = props;

    this.state = {
      md,
    };
  }

  static async getInitialProps({ req, query }) {
    return { md: mdMain };
  }

  render() {
    const { md } = this.state;
    const { classes } = this.props;
    const htm = { __html: md };
    // console.log('html:', htm);
    return (
      // {/* <section> */}
      // {/*   <Link href="/about"> */}
      // {/*     <a>Go to About Me (test Now For GitHub deployment)</a> */}
      // {/*   </Link> */}
      // {/* </section> */}
      <section>
        <div className="markdown" dangerouslySetInnerHTML={htm} />
      </section>
    );
  }
}

export default WithLayout(Index);
