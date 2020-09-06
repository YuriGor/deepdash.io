const _ = require('deepdash')(require('lodash'));
const remark = require('remark');
const headings = require('remark-autolink-headings');
const highlight = require('remark-highlight.js');
const html = require('remark-html');
const remark2react = require('remark-react');
const toc = require('remark-toc');
const slug = require('remark-slug');
const fs = require('fs');
const parse5 = require('parse5');

let htm = fs.readFileSync(require.resolve(`${__dirname}/../markdown/index.md`), 'utf8');
htm = remark()
  // .use(highlight)
  .use(slug)
  .use(toc, { heading: 'Contents' })
  // .use(headings, {
  //   content: {
  //     type: 'element',
  //     tagName: 'i',
  //     properties: {
  //       className: ['material-icons'],
  //     },
  //     children: [
  //       {
  //         type: 'text',
  //         value: 'link',
  //       },
  //     ],
  //   },
  // })
  // .use(html)
  // .use(remark2react)
  .processSync(htm);
// .parse(htm);

// htm = _.filterDeep(
//   htm,
//   (value, key) => (value && value.id === 'user-content-contents' ? true : undefined),
//   {
//     leavesOnly: false,
//   },
// );
// console.log(htm.props.children[0].props.children[0].props);

// console.log(htm);

// const contentsIndex =
//   parseInt(
//     _.findKey(
//       htm.children,
//       (v) =>
//         v.type === 'heading' &&
//         _.find(v.children, (sv) => sv.type === 'text' && sv.value === 'Contents'),
//     ),
//   ) + 1;
// console.log(contentsIndex);
// const contents = _.omitDeep(htm.children[contentsIndex].children, [
//   'spread',
//   'checked',
//   'position',
// ]);
// console.log(contents[0].children[0]);
// // const dom = parse5.parseFragment(htm.contents);
// // let contents = null;
// // _.eachDeep(dom, (value, key, path, depth, parent, parentKey, parentPath, parents) => {
// //   if (contents || key === 'parentNode') return false;
// //   // if (value.attrs) console.log(key, value.attrs);
// //   if (value && _.find(value.attrs, (v, k) => v.name === 'id' && v.value === 'contents')) {
// //     contents = _.find(parent, (v, k) => k > key && v.tagName === 'ul');
// //     return false;
// //   }
// // });
// //
// // contents = _(contents)
// //   .filterDeep(
// //     (v, k, path, depth, parent, parentKey) =>
// //       _.indexOf(['tagName', 'name', 'value'], k) !== -1 && v !== '\n',
// //     {
// //       checkCircular: true,
// //       keepCircular: false,
// //     },
// //   )
// //   .omitDeep('parentNode')
// //   .value();
// // let links = [];
// // let parents = [links];
// // _.eachDeep(contents.childNodes,(value,key)=>{
// //   if(value.tagName==='a'){
// //
// //   }
// // });
// // console.log(_.indexate(contents));
// // console.log(contents);
