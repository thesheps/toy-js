var path = require("path");

module.exports = {
  entry: "./src/index",
  output: {
    library: "toyjs",
    path: path.resolve(__dirname, "dist"),
    filename: "toy.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  }
};
