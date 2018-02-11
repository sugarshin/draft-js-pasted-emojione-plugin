const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const pkg = require('./package.json')

const production = process.env.NODE_ENV === 'production'
const BUILD_DIR = 'build'

const htmlWebpackPluginConfig = {
  title: `${pkg.name} | ${pkg.description}`,
  minify: { collapseWhitespace: true },
}

const entry = [
  '@babel/polyfill',
  'webpack-hot-middleware/client',
  './example/index.js',
]

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),
  new CleanWebpackPlugin([BUILD_DIR]),
  new HtmlWebpackPlugin(htmlWebpackPluginConfig),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
]

if (production) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false, screw_ie8: true } })
  )
}

module.exports = {
  plugins,
  entry,
  cache: true,
  output: {
    path: path.resolve(__dirname, BUILD_DIR),
    filename: 'app.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      [pkg.name]: path.resolve(__dirname, 'src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { minimize: true } },
        ],
      },
    ],
  },
}
