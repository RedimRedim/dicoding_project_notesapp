const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "./scripts/main.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js", //create bundle with hash
    clean: true, //only keep one file in dist js
  },
  devtool: "source-map",
  devServer: {
    static: { directory: path.resolve(__dirname, "dist") },
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/template.html",
      filename: "index.html",
    }),
  ],
};
