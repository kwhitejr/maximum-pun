var webpack = require('webpack');
var path = require('path');

var STYLES_DIR = path.resolve(__dirname, 'src/static/styles');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test : /\.css$/,
      include: STYLES_DIR,
      loader: 'style-loader!css-loader'
    }, {
      test : /\.scss$/,
      include: STYLES_DIR,
      loaders: ["style", "css", "sass"]
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(), // removes all the duplicated files
    // new webpack.optimize.OccurenceOrderPlugin(), // helps in reducing the file size of the resulting bundle
    // new webpack.optimize.UglifyJsPlugin({ // minifies and obfuscates the resulting bundle using UglifyJs
    //   compress: { warnings: false },
    //   mangle: true,
    //   sourcemap: false,
    //   beautify: false,
    //   dead_code: true
    // })
  ]
};