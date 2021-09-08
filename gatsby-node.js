exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.glb$/,
          exclude: /node_modules/,
          use: {
            loader: 'url-loader',
          },
        },
        {
          test: /\.(glsl|vs|fs|vert|frag)$/,
          exclude: /node_modules/,
          use: {
            loader: 'raw-loader',
          },
        },
      ],
    },
  });
};
