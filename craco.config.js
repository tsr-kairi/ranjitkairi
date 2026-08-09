module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Allow webpack to handle ESM packages like lucide-react
      webpackConfig.module.rules.push({
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      });
      return webpackConfig;
    },
  },
};
