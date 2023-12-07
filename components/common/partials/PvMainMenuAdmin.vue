<template>
  <nav class="main-nav d-none d-lg-flex flex-wrap">
    <ul class="menu main-menu menu-arrow">
      <li>
        <nuxt-link to="/admin/product-admin">สินค้าของเรา</nuxt-link>
      </li>

	  <li>
        <nuxt-link to="/admin/banner-admin">จัดการแบนเนอร์</nuxt-link>
      </li>

	  <li>
        <nuxt-link to="/">จัดการวิดีโอ</nuxt-link>
      </li>

      <li>
        <nuxt-link
          to="/admin/news-admin"
          class="sub-menu-link menu-with-ul"
          :class="{ active: $route.path.indexOf('/shop') > -1 }"
          >จัดการข่าวสาร</nuxt-link
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
          to="/admin/review-admin"
          class="sub-menu-link menu-with-ul"
          :class="{ active: $route.path.indexOf('/pages/blog') > -1 }"
          >จัดการรีวิวสินค้า</nuxt-link
        >
      </li>

      <li>
        <nuxt-link
        to="/admin/user-admin"
          class="sub-menu-link menu-with-ul"
          :class="{ active: $route.path.indexOf('/pages/blog') > -1 }"
          >จัดการผู้ใช้งาน</nuxt-link
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
