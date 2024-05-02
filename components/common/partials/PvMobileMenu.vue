<template>
  <div>
    <div class="mobile-menu-overlay" @click="hideMobileMenu"></div>

    <div class="mobile-menu-container">
      <div class="mobile-menu-wrapper">
        <span class="mobile-menu-close" @click="hideMobileMenu">
          <i class="fa fa-times"></i>
        </span>

        <nav class="mobile-nav">
          <form
            class="search-wrapper mb-2"
            action="#"
            @submit.prevent="submitSearchForm"
          >
            <input
              type="text"
              class="form-control mb-0"
              placeholder="ค้นหา..."
              required
              v-model="search_term"
              style="color: white; font-size: 1.4em;"
            />
            <button
              class="btn icon-search text-white bg-transparent p-0"
              type="submit"
            ></button>
          </form>

          <ul class="mobile-menu">
            <li>
              <nuxt-link to="/">หน้าหลัก</nuxt-link>
            </li>

            <li :class="{ open: catOpened }">
              <nuxt-link to="/shop" class="sub-menu-link menu-with-ul">
                สินค้า
                <span
                  class="mmenu-btn"
                  @click.prevent="catOpened = !catOpened"
                ></span>
              </nuxt-link>

              <vue-slide-toggle :open="catOpened">
                <ul :class="{ open: var1Opened }">
                  <li :class="{ open: var1Opened }">
                    <nuxt-link to="" class="sub-menu-link menu-with-ul">
                      รายการสินค้า
                      <span
                        class="mmenu-btn"
                        @click="var1Opened = !var1Opened"
                      ></span>
                    </nuxt-link>

                    <vue-slide-toggle tag="ul" :open="var1Opened">
                      <li>
                        <nuxt-link :to="'/shop-by-category'">ทั้งหมด</nuxt-link>
                      </li>
                      <li
                        v-for="(item, index) in productNames"
                        :key="'shop1' + index"
                      >
                        <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
                      </li>
                    </vue-slide-toggle>
                  </li>
                </ul>

                <ul :class="{ open: var2Opened }">
                  <li :class="{ open: var2Opened }">
                    <nuxt-link to="" class="sub-menu-link menu-with-ul">
                      ประเภทสินค้า

                      <span
                        class="mmenu-btn"
                        @click="var2Opened = !var2Opened"
                      ></span>
                    </nuxt-link>

                    <vue-slide-toggle tag="ul" :open="var2Opened">
                      <li>
                        <nuxt-link :to="'/shop-by-category'">ทั้งหมด</nuxt-link>
                      </li>
                      <li
                        v-for="(item, index) in categorys"
                        :key="'shop2' + index"
                      >
                        <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
                      </li>
                    </vue-slide-toggle>
                  </li>
                </ul>
              </vue-slide-toggle>
            </li>

            <!-- <li :class="{ open: prodOpened }">
              <nuxt-link to="/shop" class="sub-menu-link menu-with-ul">
                Products
                <span
                  class="mmenu-btn"
                  @click.prevent="prodOpened = !prodOpened"
                ></span>
              </nuxt-link>

              <vue-slide-toggle :open="prodOpened">
                <ul :class="{ open: prod1Opened }">
                  <li
                    class="sub-menu-link menu-with-ul"
                    :class="{ open: prod1Opened }"
                  >
                    <nuxt-link to="/shop">
                      Product Pages
                    </nuxt-link>
                   
                  </li>
                </ul>

                <ul :class="{ open: prod2Opened }">
                  <li
                    class="sub-menu-link menu-with-ul"
                    :class="{ open: prod2Opened }"
                  >
                    <nuxt-link to="/shop/recommended-products">
                      Product Recommened
                    </nuxt-link>
                  </li>
                </ul>
              </vue-slide-toggle>
            </li> -->
            <!-- <li>
              <nuxt-link to="/shop">Shop</nuxt-link>
            </li> -->
            <li>
              <nuxt-link to="/pages/blog">ข่าวสารและกิจกรรม</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/pages/ourstory/post-format-image-gallery"
                >ประวัติของเรา</nuxt-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { VueSlideToggle } from "vue-slide-toggle";
import { mainMenu } from "~/utils/data/menu";
import axios from "axios";
import Api, { baseUrl } from "~/api";

export default {
  components: {
    VueSlideToggle,
  },
  data: function () {
    return {
      mainMenu: mainMenu,
      catOpened: false,
      var1Opened: false,
      var2Opened: false,
      prodOpened: false,
      prod1Opened: false,
      prod2Opened: false,
      pageOpened: false,
      search_term: "",
      categorys: [],
      productNames: [],
    };
  },
  mounted() {
    this.handlerGet();
    this.handlerGetProduct();
  },
  methods: {
    hideMobileMenu: function () {
      document.querySelector("body").classList.remove("mmenu-active");
    },
    submitSearchForm: function (e) {
      this.$router.push({
        path: "/shop",
        query: {
          search_term: this.search_term,
        },
      });
    },
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
                title: item.category_name_th,
                id: String(item.id),
                size: String(item.id),
                url: `/shop?category=${item.id}&categoryName=${item.category_name_th}`,
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
