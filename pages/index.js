import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import remark from 'remark';
import html from 'remark-html';
import remark2react from 'remark-react';
import toc from 'remark-toc';
import slug from 'remark-slug';
import WithLayout from '../lib/withLayout';

const highlight = require('remark-highlight.js');

const mdMain = preval`
      const fs = require('fs')
      module.exports = fs.readFileSync(require.resolve(__dirname+'/../markdown/main.md'), 'utf8')
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
    return (
      // {/* <section> */}
      // {/*   <Link href="/about"> */}
      // {/*     <a>Go to About Me (test Now For GitHub deployment)</a> */}
      // {/*   </Link> */}
      // {/* </section> */}
      <section>
        <div>
          {
            remark()
              // .use(highlight)
              // .use(html)
              .use(slug)
              .use(toc)
              .use(remark2react)
              .processSync(md).contents
          }
        </div>
      </section>
    );
  }
}

export default WithLayout(Index);
