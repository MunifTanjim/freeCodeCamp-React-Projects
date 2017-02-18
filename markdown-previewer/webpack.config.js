const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  }
})

const htmlWebpack = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src', 'static', 'index.html'),
})

const extractSCSS = new ExtractTextPlugin({
    filename: '[name].css',
    disable: process.env.NODE_ENV === 'development'
})

module.exports = {
  entry: {
    main: path.join(__dirname, 'src', 'index.jsx')
  },
  output: {
    path: path.resolve(__dirname, '../build/markdown-previewer'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'src/static'),
        loader: 'babel-loader'
      }, {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/static/stylesheets'),
        loader:  extractSCSS.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      }, {
        test: /\.png$/,
        include: path.resolve(__dirname, 'src/static/images'),
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '*', '.js', '.jsx', '.scss' ]
  },
  plugins: [
    definePlugin,
    htmlWebpack,
    extractSCSS
  ]
}
