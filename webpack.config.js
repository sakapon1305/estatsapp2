// webpack.config.js

const path = require("path");

module.exports = {
  // 他の設定...
  resolve: {
    fallback: {
      http: require.resolve("stream-http"),
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      zlib: require.resolve("browserify-zlib"),
      querystring: require.resolve("querystring-es3"),
      url: require.resolve("url"),
    },
  },
};
