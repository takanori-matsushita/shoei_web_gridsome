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
