const withSass = require('@zeit/next-sass');
const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const copyFile = promisify(fs.copyFile);

module.exports = withSass({
  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    if (dev) {
      return defaultPathMap;
    }
    // This will copy robots.txt from your project root into the out directory
    await copyFile(join(dir, 'favicon.png'), join(outDir, 'favicon.png'));
    return defaultPathMap;
  },
});
