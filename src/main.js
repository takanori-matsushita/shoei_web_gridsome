// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import utility from "~/assets/js/utility.js";
import VueScrollTo from "vue-scrollto";

export default function(Vue, { router, head, isClient }) {
  head.htmlAttrs = { lang: "ja" };
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.mixin(utility);
  Vue.use(VueScrollTo, {
    duration: "1000",
    easing: "ease-in-out"
  });
}
