const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/footer/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './FooterApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
    new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, '../data'), // Source path of the data file
            to: 'data', // Destination path within the build output directory
          },
        ],
      }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
