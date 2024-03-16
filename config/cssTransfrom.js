const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['transform-css-import-to-string'],
});
