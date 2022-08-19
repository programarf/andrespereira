const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  entry: {
    main: ["./src/js/index.js", "./src/scss/style.scss"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    assetModuleFilename: "assets/images/[hash][ext][query]",
  },
  //stats: 'detailed',
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css|.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            mimetype: "aplication/font-woff",
            name: "[name].[ext]",
            outputPath: "./fonts/",
            publicPath: "./fonts/",
            esModule: false,
          },
        },
      },
    ],
  },
  externals: {
    $: "$",
    jquery: "jQuery",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CopyPlugin({
      // CONFIGURACIÓN DEL COPY PLUGIN
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets/images"), // CARPETA A MOVER AL DIST
          to: "assets/images", // RUTA FINAL DEL DIST
        },
      ],
    }),
    //new BundleAnalyzerPlugin()
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      proxy: "http://site-andrespereira.lndo.site/", // config local site
    }),
  ],
};
