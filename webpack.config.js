var webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public/client');
const APP_DIR = path.resolve(__dirname, 'public/dist');

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'index_bundle.js'
  }
};

module.exports = config;