const path                  = require('path');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const CopyPlugin            = require('copy-webpack-plugin');
const TerserPlugin          = require('terser-webpack-plugin');
const CssMinimizerPlugin    = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';

  return {
    entry: './src/index.js',
    output: {
      path:      path.resolve(__dirname, 'dist'),
      filename:  'js/[name].[contenthash].js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test:    /\.js$/,
          exclude: /node_modules/,
          use:     'babel-loader'
        },
        {
          test: /\.(css|scss)$/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: { api: 'modern' }
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css'
      }),
      // Copy the full love page directly into output
      new CopyPlugin({
        patterns: [
          { from: 'public', to: '.' }
        ]
      })
    ],
    optimization: {
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
      splitChunks: { chunks: 'all' }
    },
    devServer: {
      static: './dist',
      port:   3000,
      hot:    true
    }
  };
};
