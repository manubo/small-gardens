const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProductionBuild = false;

module.exports = {
  context: __dirname + "/app",
  entry: "./index.js",
  output: {
    path: __dirname + "/public/",
    publicPath: '/public/',
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [path.resolve(__dirname, 'app/styles')],
              },
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: './app/styles/resources.scss',
              },
            },
          ],
        }),
      },

      {
        test: /fonts\/.*\.(ttf|eot|woff|woff2|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            query: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },

      {
        test: /images\/.*\.(png|jpg|jpeg|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            query: {
              context: path.resolve('./app/assets'),
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'Small Gardens',
      template: path.resolve(__dirname, 'app/assets/index.html.ejs'),
      filename: 'index.html',
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isProductionBuild
          ? JSON.stringify('production')
          : JSON.stringify('development'),
      },
    }),
  ],

  resolve: {
    modules: [
      path.resolve(__dirname, 'web'),
      'node_modules',
    ],
    extensions: ['.js'],
  },

  devServer: {
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html',
    },
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },

  devtool: 'eval-source-map',
};
