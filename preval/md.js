const remark = require('remark');
const headings = require('remark-autolink-headings');
const highlight = require('remark-highlight.js');
const html = require('remark-html');
// const remark2react = require('remark-react');
// const toc = require('remark-toc');
const slug = require('remark-slug');
const fs = require('fs');

module.exports = function processMd(fn) {
  let htm = fs.readFileSync(
    require.resolve(`${__dirname}/../node_modules/deepdash/${fn}.md`),
    'utf8',
  );
  htm = remark()
    .use(highlight)
    .use(slug)
    // .use(toc, { heading: 'Contents' })
    .use(headings, {
      content: {
        type: 'element',
        tagName: 'i',
        properties: {
          className: ['material-icons'],
        },
        children: [
          {
            type: 'text',
            value: 'link',
          },
        ],
      },
    })
    .use(html)
    // .use(remark2react)
    .processSync(htm).contents;
  return htm;
};
