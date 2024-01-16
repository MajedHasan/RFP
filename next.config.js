/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ["swiperjs.com"],
  },
  generateBuildId: async () => {
    // You can generate a unique BUILD_ID here, for example:
    return "my-build-id";
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next",
          name: "static/media/[name].[hash].[ext]",
        },
      },
    });

    return config;
  },
};
