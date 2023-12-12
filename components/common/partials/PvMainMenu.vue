<template>
  <nav class="main-nav d-none d-lg-flex flex-wrap">
    <ul class="menu main-menu menu-arrow">
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>

      <li>
        <nuxt-link
          to="/shop"
          class="sub-menu-link menu-with-ul"
          :class="{ active: $route.path.indexOf('/shop') > -1 }"
          >Products</nuxt-link
        >

        <div class="megamenu megamenu-fixed-width megamenu-3cols">
          <div class="row">
            <div class="col-lg-4">
              <a href="javascript:;" class="nolink">Shop</a>

              <ul class="submenu">
                <li v-for="item in mainMenu.shop.variation1" :key="item.id">
                  <nuxt-link :to="item.url">
                    {{ item.title }}
                    <span class="tip tip-hot" v-if="item.hot">Hot</span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>

      <li>
        <nuxt-link
          to="/pages/blog"
          class="menu-with-ul"
          :class="{ active: $route.path.indexOf('/pages/blog') > -1 }"
          >News & Activities</nuxt-link
        >
      </li>

      <li>
        <nuxt-link
          to="/pages/ourstory/post-format-image-gallery"
          class="menu-with-ul"
          :class="{ active: $route.path.indexOf('/pages/ourstory') > -1 }"
          >Our Story</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>
<script>
import { mainMenu } from "~/utils/data/menu";

export default {
  data: function () {
    return {
      mainMenu,
    };
  },
  computed: {
    isPageItemActived: function () {
      let exItems = ["blog", "about-us", "contact-us"];

      if (
        this.$route.path.includes("/pages") &&
        exItems.findIndex((item) => this.$route.path.includes(item)) === -1
      ) {
        return true;
      }

      return false;
    },
    isHome: function () {
      if (this.$route.path === "/") return true;
      return false;
    },
  },
};
</script>
