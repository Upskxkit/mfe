modules.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        excludes: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/presets.env"],
          },
        },
      },
    ],
  },
};
