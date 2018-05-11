/* eslint-env node */
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  const entry = (isProduction ? {
    main: ["./src/Main.bs.js"],
  } : {
    main: [
      "react-hot-loader/patch",
      'webpack-dev-server/client?http://localhost:8081',
      'webpack/hot/only-dev-server',
      "./src/Main.bs.js"
    ]
  });

  const plugins = (isProduction ? [] : [
    new webpack.HotModuleReplacementPlugin(),
    new WriteFilePlugin(),
    new CopyWebpackPlugin([ {from: path.join(__dirname, "src/assets/**/*"), to: "assets"} ], {})
  ]);

  return {
    entry,
    devtool: 'eval-source-map',
    output: {
      path: path.join(__dirname, "dist"),
      filename: '[name].js',
    },
    devServer: {
      hot: true,
      port: 8081,
      contentBase: './',
      publicPath: '/dist/',
      watchOptions: {
        ignored: [
            /node_modules/,
        ]
      }
    },
    plugins,
    module: {
      rules: [{
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader", // compiles Sass to CSS
          options: {
            includePaths: [
              path.join(__dirname, 'node_modules')
            ]
          }
        }]
      }, {
        test: /\.css$/,
        exclude: [/node_modules/],
        loaders: ["style-loader", "css-loader"]
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: [/node_modules/],
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "application/font-woff"
        }
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: [/node_modules/],
        loader: "file-loader"
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader"
      }
             ]
    }
  };
}
