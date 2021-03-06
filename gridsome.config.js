// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "./src/assets/sass/_reset.scss"),
        path.resolve(__dirname, "./src/assets/sass/_variables.scss"),
        path.resolve(__dirname, "./src/assets/sass/_function.scss"),
        path.resolve(__dirname, "./src/assets/sass/_mixin-extend.scss")
      ]
    });
}

module.exports = {
  siteName: "SHOEI RECRUITMENT（株式会社 昭栄美術 採用サイト）",
  titleTemplate: `%s | SHOEI RECRUITMENT（株式会社 昭栄美術 採用サイト）`,
  siteDescription:
    "株式会社 昭栄美術の採用リクルートサイトです。お仕事紹介、働いているメンバー（営業職、クリエイティブ、制作）をご紹介。挑戦するあなたを、たくさんのエントリーをお待ちしております。",
  siteUrl: process.env.SITE_URL,
  metadata: {
    siteOgImage: "sns.png"
  },
  plugins: [],
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  }
};
