const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill","./src/index.tsx"],
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@style': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
    extensions: ['.ts', '.tsx', '.js', '.scss', '.css'],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { 
        test: /\.ts$/, 
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options:{
            presets:['@babel/preset-typescript']
          }
        }
      },
      { 
        test: /\.tsx$/, 
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options:{
            presets:['@babel/preset-react','@babel/preset-env']
          }
        }
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 5000,
  },
}