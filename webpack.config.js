const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'client', 'src', 'index.tsx'),
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'client', 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.js', '.jsx', '.json', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  }
}
