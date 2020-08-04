const path = require("path");

module.exports = {
  stories: ["../components/**/*.stories.tsx"],
  addons: [
    "@storybook/preset-typescript",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-viewport/register",
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            plugins: [
              require("postcss-preset-env"),
              require("tailwindcss")("./tailwind.config.js"),
            ],
          },
        },
      ],

      include: path.resolve(__dirname, "../"),
    });

    return config;
  },
};
