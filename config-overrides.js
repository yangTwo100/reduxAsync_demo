const path = require('path')

const { injectBabelPlugin } = require('react-app-rewired')

const resolve = (url) => {
  return path.resolve(__dirname, './', url)
}

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
  config.resolve.alias = {
    '@': resolve('src'),
    'page': resolve('src/page')
  }
  return config;
};