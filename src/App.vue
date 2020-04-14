<template>
  <router-view />
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    siteUrl
    siteOgImage
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      link: [
        {
          key: `canonical`,
          rel: `canonical`,
          href: this.$static.metadata.siteUrl
        }
      ],
      meta: [
        { httpEquiv: "X-UA-Compatible", content: "IE=edge" },
        { name: "description", content: this.$static.metadata.siteDescription },
        {
          key: "og:title",
          property: "og:title",
          content: this.$static.metadata.siteName
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$static.metadata.siteDescription
        },
        {
          key: "og:site_name",
          property: "og:site_name",
          content: this.$static.metadata.siteName
        },
        { key: "og:type", property: "og:type", content: "website" },
        {
          key: "og:url",
          property: "og:url",
          content: this.$static.metadata.siteUrl
        },
        {
          key: "og:image",
          property: "og:image",
          content:
            this.$static.metadata.siteUrl + this.$static.metadata.siteOgImage
        },
        { key: "og:locale", property: "og:locale", content: "ja_JP" },
        {
          key: "twitter:card",
          property: "twitter:card",
          content: "summary_large_image"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
//web font import
@import url("https://fonts.googleapis.com/css?family=Noto+Serif+JP:400,700&display=swap&subset=japanese");
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-size: $baseFontSize + px;
}

body {
  font-family: "Noto Sans JP";
}

a {
  text-decoration: none;
  color: $lightBlack;
}

.sp-only {
  display: block;
  @include media(pc) {
    display: none;
  }
}

.fade {
  opacity: 0;
  transition: 1s;
  transform: translateY(50px);
}

.fade.show {
  opacity: 1;
  transform: translateY(0);
}

.position-outside {
  position: absolute;
  left: -9999px;
}
</style>
