var ExtractTextPlugin = require("extract-text-webpack-plugin");
var entry = {};

module.exports = {
  entry: {},
  output: {
    filename: "[name]-[hash].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css?$/,
        use: "style-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.less?$/,
        use: "less-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss?$/,
        use: "style-loader!css-loader!postcss-loader!sass-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugin: [],
};
