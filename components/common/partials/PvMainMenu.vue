<template>
  <nav class="main-nav d-none d-lg-flex flex-wrap">
    <ul class="menu main-menu menu-arrow">
      <li>
        <nuxt-link to="/" style="font-size: 1.3em !important;">Home</nuxt-link>
      </li>

      <li>
        <nuxt-link
          to="/shop"
          class="sub-menu-link menu-with-ul"
          :class="{ active: $route.path.indexOf('/shop') > -1 }"
          style="font-size: 1.3em !important;"
          >Products</nuxt-link
        >

        <div class="megamenu megamenu-fixed-width megamenu-3cols">
          <div class="row">
            <div class="col-lg-6">
              <nuxt-link to="/shop" style="font-size: 1.3em !important;"
                >All Product</nuxt-link
              >

              <ul class="submenu">
                <li v-for="item in productNames" :key="item.id">
                  <nuxt-link
                    :to="item.url"
                    style="font-size: 1.1em !important; padding-left: 1em;"
                  >
                    {{ item.title }}
                    <!-- <span class="tip tip-hot" v-if="item.hot">Hot</span> -->
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="col-lg-6">
              <nuxt-link to="/shop" style="font-size: 1.3em !important;"
                >Product Catagory</nuxt-link
              >

              <ul class="submenu">
                <li v-for="item in categorys" :key="item.id">
                  <nuxt-link
                    :to="item.url"
                    style="font-size: 1.1em !important; padding-left: 1em;"
                  >
                    {{ item.title }}
                    <!-- <span class="tip tip-hot" v-if="item.hot">Hot</span> -->
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>

      <!-- <li>
        <nuxt-link
          to="/shop"
          class="menu-with-ul"
          :class="{ active: $route.path.indexOf('/shop') > -1 }"
          >Shop</nuxt-link
        >
      </li> -->

      <li>
        <nuxt-link
          to="/pages/blog"
          class="menu-with-ul"
          :class="{ active: $route.path.indexOf('/pages/blog') > -1 }"
          style="font-size: 1.3em !important;"
          >News & Activities</nuxt-link
        >
      </li>

      <li>
        <nuxt-link
          to="/pages/ourstory/post-format-image-gallery"
          class="menu-with-ul"
          :class="{ active: $route.path.indexOf('/pages/ourstory') > -1 }"
          style="font-size: 1.3em !important;"
          >Our Story</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>
<script>
import { mainMenu } from "~/utils/data/menu";
import axios from "axios";
import Api, { baseUrl } from "~/api";

export default {
  data: function () {
    return {
      mainMenu,
      categorys: [],
      productNames: [],
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
  mounted() {
    this.handlerGet();
    this.handlerGetProduct();
  },
  methods: {
    async handlerGet() {
      var optionAxios = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      axios
        .get(`${baseUrl}/api/Home/get-category-name`, optionAxios)
        .then((response) => {
          if (response.status == 200) {
            let productsData = response.data;

            this.categorys = [];

            productsData.forEach((item) => {
              this.categorys.push({
                ...item,
                title: item.category_name,
                id: String(item.id),
                size: String(item.id),
                url: `/shop?category=${item.id}`,
              });
            });
          } else {
          }
        })
        .catch((error) => {});
    },
    async handlerGetProduct() {
      var optionAxios = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      axios
        .get(`${baseUrl}/api/Home/get-product-name`, optionAxios)
        .then((response) => {
          if (response.status == 200) {
            let productsData = response.data;

            this.productNames = [];

            productsData.forEach((item) => {
              this.productNames.push({
                ...item,
                name: String(item.id),
                nameShow: item.product_name,
                title: item.product_name,
                size: String(item.id),
                id: String(item.id),
                url: `/product/default/${item.id}`,
              });
            });

            console.log("checprod", this.productNames);

            this.$forceUpdate();
          } else {
          }
        })
        .catch((error) => {});
    },
  },
};
</script>
