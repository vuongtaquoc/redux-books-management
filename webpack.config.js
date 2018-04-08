const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: path.join(__dirname, 'src/index.js')
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'assets'),
        to: path.join(__dirname, 'public')
      }
    ]),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: path.join(__dirname, 'public/index.html'),
      inject: true
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'stage-2']
        }
      }
    }]
  },
  mode: 'development'
}