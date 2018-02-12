const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
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
  new HtmlWebpackIncludeAssetsPlugin({
    assets: ['https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/css/emojione.min.css'],
    append: false,
    publicPath: '',
  }),
]

if (production) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      uglifyOptions: {
        ecma: 8,
        output: { ascii_only: true, beautify: false, indent_level: 2 },
      },
    }),
  )
} else {
  entry.push(
    'webpack-hot-middleware/client',
    entry.pop(),
  )

  plugins.push(
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  )
}

module.exports = {
  plugins,
  entry,
  cache: production !== true,
  output: {
    path: path.resolve(__dirname, BUILD_DIR),
    filename: 'app.js',
    publicPath: production ? '' : '/',
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
