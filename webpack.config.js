const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
/**
 *
 * @type {{entry: string, output: {filename: string, path: (Promise.<*>|*|{}|{mainFields})}}}
 */
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}