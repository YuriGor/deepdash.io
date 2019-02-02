import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import remark from 'remark';
import remark2react from 'remark-react';
import Header from '../components/header';
import SearchAppBar from '../components/searchAppBar';

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
    // const { bookSlug, chapterSlug } = query;

    // const headers = {};
    // if (req && req.headers && req.headers.cookie) {
    //   headers.cookie = req.headers.cookie;
    // }
    // if (req) {
    //   const { getTestMd } = require('../lib/api/static');
    //   const md = await getTestMd();
    //   console.log('getInitialProps', md);
    // }
    // const book = await getChapterDetail({ bookSlug, chapterSlug }, { headers });
    return { md: mdMain };
  }

  render() {
    const { md } = this.state;
    return (
      <main>
        <Header />
        <SearchAppBar />
        <section>
          <Link href="/about">
            <a>Go to About Me (test Now For GitHub deployment)</a>
          </Link>
        </section>
        <section>
          <div>
            {
              remark()
                .use(remark2react)
                .processSync(md).contents
            }
          </div>
        </section>
      </main>
    );
  }
}

export default Index;
