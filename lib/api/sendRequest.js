// import 'isomorphic-fetch';
// import NProgress from 'nprogress'; // added
// import _ from 'lodash'; // added
//
// const port = process.env.PORT || 8000;
// const ROOT_URL = `http://localhost:${port}`;
//
// export default async function sendRequest(path, opts = {}) {
//   // sort of static variable
//   if (!sendRequest.pending) {
//     sendRequest.pending = {};
//   }
//   sendRequest.pending[path] = true; // mark yet another request is started
//   if (typeof document !== 'undefined') NProgress.start(); // make sure nprogress started
//   const headers = Object.assign({}, opts.headers || {}, {
//     'Content-type': 'application/json; charset=UTF-8',
//   });
//
//   const response = await fetch(
//     `${ROOT_URL}${path}`,
//     Object.assign({ method: 'POST', credentials: 'include' }, opts, { headers }),
//   );
//   // console.log(await response.text());
//   const data = await response.json();
//   delete sendRequest.pending[path]; // remove request from the pending list
//   if (typeof document !== 'undefined' && _.isEmpty(sendRequest.pending)) NProgress.done(); // if there are no other pending requests - stop nprogress
//   if (data.error) {
//     throw new Error(data.error);
//   }
//
//   return data;
// }
