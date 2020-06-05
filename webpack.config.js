const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    spider: "./src/index.js",
    ["spider-plugin"]: "./src/plugin/index.js",
  },
  context: process.cwd(),
  // mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    filename: "[name].js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    before(router) {
      router.get("/success", function (req, res) {
        res.json({ id: 1 }); //200
      });
      router.post("/error", function (req, res) {
        res.sendStatus(500); //500
      });
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "head",
    }),
  ],
};
