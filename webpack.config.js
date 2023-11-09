const webpack = require('webpack')
const path = require('path')
settings = require('./settings')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  entry: !isProduction
    ? [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        settings.themeLocation + 'ts/scripts.ts',
      ]
    : [settings.themeLocation + 'ts/scripts.ts'],
  mode: process.env.NODE_ENV || 'development',
  devtool: 'eval',
  module: {
    rules: [
      {
        test: [/\.ts?$/, /\.tsx?$/],
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            experimentalWatchApi: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin(),
  ],

  cache: true,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
