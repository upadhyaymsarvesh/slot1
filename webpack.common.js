const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'slot.bundle.js'
  },
  resolve: {
    alias: {
      openfl: path.resolve(__dirname, 'node_modules/openfl/lib/openfl'),
      motion: path.resolve(__dirname, 'node_modules/actuate/lib/motion'),
    },
    extensions: [
      '.ts',
      '.tsx',
      '.js'
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets/images', to: 'assets/images' },
        {from: 'index.html'}
      ],
    }),
  ]
};
