const path = require('path');

const rootDir = path.resolve(__dirname, '..', '..');

const Paths = {
  rootDir,
  outDir: path.resolve(rootDir, 'build'),
  srcDir: path.resolve(rootDir, 'src'),
};

module.exports = Paths;
