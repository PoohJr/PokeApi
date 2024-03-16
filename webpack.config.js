const path = require('path');

module.exports = {
  entry: './src/pages',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src'),
  },
};
