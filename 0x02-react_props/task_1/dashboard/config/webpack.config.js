const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  performance: {
    hints: false,
    maxEntrypointSize: 100000,
    maxAssetSize: 100000
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    static: [ "dist" ],
    port: 8564,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
};
