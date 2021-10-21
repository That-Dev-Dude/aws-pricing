const path = require('path')
const serverlessWebpack = require('serverless-webpack')
const { IgnorePlugin } = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const config = {
  stats: 'minimal',
  context: path.resolve(process.cwd()),
  entry: serverlessWebpack.lib.entries,
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'lambdas/'),
      '@generated': path.resolve(process.cwd(), 'generated'),
    },
    extensions: ['.js', '.json', '.ts'],
  },
  target: 'node',
  plugins: [
    new IgnorePlugin({ contextRegExp: /^winston$/ }),
    new IgnorePlugin({ resourceRegExp: /^pg-native$/ }),
    new IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /date-fns$/,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.sql/,
        type: 'asset/source',
      },
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
}

if (process.env.ANALYZE) {
  config.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    })
  )
}

module.exports = config
