const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const copyFile = promisify(fs.copyFile);
// const withMDX = require('@zeit/next-mdx')();

module.exports = withCSS(
  withSass({
    async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
      defaultPathMap['/CHANGELOG.md'] = { page: '/changelog' };
      if (dev) {
        return defaultPathMap;
      }
      // This will copy robots.txt from your project root into the out directory
      await copyFile(join(dir, 'favicon.png'), join(outDir, 'favicon.png'));
      await copyFile(
        join(dir, 'google82bc6ed1675073b2.html'),
        join(outDir, 'google82bc6ed1675073b2.html'),
      );
      return defaultPathMap;
    },
  }),
);
