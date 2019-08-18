const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
  entry: './client/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'client/dist')
  }, 
  mode: 'production',
  plugins: [
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      include: /dir/,
      failOnError: true,
      allowAsyncCycles: false,
      cwd: process.cwd(),
    })
  ]

};
