const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: {
    index:'./src/component/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'web_demo',
      template: 'src/static/index.html',
      publicPath: 'http://localhost:8080/',
      cache: false,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          "css-loader",
        ],
      },
    ]
  },
  target:'web'
};

module.exports = (env, argv) => {
  if (argv.mode == 'development') {
    config.devtool = 'inline-source-map',
    config.devServer = {
      static:'./dist'
    }
    console.log({env})
  } else if (argv.mode == 'production') {
    config.devtool = 'source-map'
    console.log({env})
  } else {

  }
  return config;
}