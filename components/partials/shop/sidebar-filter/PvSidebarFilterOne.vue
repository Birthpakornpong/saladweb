<template>
  <div
    class="sidebar-wrapper"
    style="
      border: solid 1px rgba(231, 231, 231, 1);
      padding: 2rem;
      padding-top: 0rem;
    "
  >
    <div class="sidebar-content skeleton-body" v-if="categoryList.length === 0">
      <aside class="widget"></aside>
    </div>

    <div class="widget widget-size">
      <h3 class="widget-title">
        <a
          href="javascript:;"
          @click="catOpened = !catOpened"
          :class="{ collapsed: !catOpened }"
          >Categories</a
        >
      </h3>

      <vue-slide-toggle :open="catOpened">
        <div class="widget-body" style="padding-top: 2rem;">
          <ul class="cat-list">
            <li
              v-for="(item, index) in categorys"
              :key="'size-filter' + index"
              :class="{ active: isActivedSize(item) }"
            >
              <nuxt-link :to="sizeFilterRoute(item)">{{ item.name }}</nuxt-link>
            </li>
          </ul>
        </div>
      </vue-slide-toggle>
    </div>

    <div class="widget widget-size">
      <h3 class="widget-title">
        <a
          href="javascript:;"
          @click="sizeOpened = !sizeOpened"
          :class="{ collapsed: !sizeOpened }"
          >Product HOLIS by SCGP</a
        >
      </h3>

      <vue-slide-toggle :open="sizeOpened">
        <div class="widget-body" style="padding-top: 2rem;">
          <ul class="cat-list">
            <li
              v-for="(item, index) in productNames"
              :key="'size-filter' + index"
              :class="{ active: isActivedColor(item) }"
            >
              <nuxt-link :to="colorFilterRoute(item)">{{
                item.nameShow
              }}</nuxt-link>
            </li>
          </ul>
        </div>
      </vue-slide-toggle>
    </div>

    <vue-slide-toggle :open="!isEmptyQuery">
      <div class="widget mb-3 ml-4 border-bottom-0">
        <nuxt-link
          :to="{ path: $router.path }"
          class="btn btn-primary reset-filter-btn router-link-active"
          >Reset All Filters</nuxt-link
        >
      </div>
    </vue-slide-toggle>
  </div>
</template>

<script>
import { VueSlideToggle } from "vue-slide-toggle";
import { VueTreeList, Tree } from "vue-tree-list";
import PvSmallProduct from "~/components/features/product/PvSmallProduct";
import { shopColors, shopSizes } from "~/utils/data/shop";
import axios from "axios";
import Api, { baseUrl } from "~/api";

export default {
  components: {
    VueSlideToggle,
    VueTreeList,
    PvSmallProduct,
  },
  props: {
    categoryList: Array,
    featuredProducts: Array,
  },
  data: function () {
    return {
      catOpened: true,
      priceOpenened: true,
      sizeOpened: true,
      colorOpened: true,
      prices: [0, 1000],
      priceSettings: {
        connect: true,
        step: 50,
        margin: 100,
        range: {
          min: 0,
          max: 1000,
        },
        format: {
          from: Number,
          to: Number,
        },
      },
      shopColors: shopColors,
      shopSizes: shopSizes,
      emptyObject: {},
      isFeatured: true,
      priceReset: true,
      currentCategory: "",
      categorys: [],
      productNames: [],
    };
  },
  watch: {
    $route: function () {
      this.getFlag();

      if (this.$route.query.min_price) {
        this.prices = [
          this.$route.query.min_price,
          this.$route.query.max_price,
        ];
      } else {
        this.prices = [0, 1000];
      }

      this.priceReset = false;

      this.currentCategory = this.$route.query.category;

      this.$nextTick(function () {
        this.priceReset = true;
      });
    },
  },
  created: async function () {
    this.getFlag();
    this.handlerGet();
    this.handlerGetProduct();
    if (this.$route.query.min_price) {
      this.prices = [this.$route.query.min_price, this.$route.query.max_price];
    } else {
      this.prices = [0, 1000];
    }
  },
  computed: {
    categoryTree: function () {
      return new Tree(this.categoryList);
    },
    priceFilterRoute: function () {
      return {
        path: this.$route.path,
        query: {
          ...this.$route.query,
          page: 1,
          max_price: this.prices[1],
          min_price: this.prices[0],
        },
      };
    },
    isEmptyQuery: function () {
      for (let key in this.$route.query) {
        if (key !== "page" && key !== "per_page" && this.$route.query[key]) {
          return false;
        }
      }

      return true;
    },
  },
  methods: {
    colorFilterRoute: function (item) {
      let selectedColors = this.$route.query.product
        ? this.$route.query.product.split(",")
        : [];
      let index = selectedColors.indexOf(item.name);
      if (index > -1) {
        selectedColors.splice(index, 1);
      } else {
        selectedColors.push(item.name);
      }

      return {
        path: this.$route.path,
        query: {
          ...this.$route.query,
          page: 1,
          product: selectedColors.toString(),
        },
      };
    },
    sizeFilterRoute: function (item) {
      let selectedSizes = this.$route.query.category
        ? this.$route.query.category.split(",")
        : [];
      let index = selectedSizes.indexOf(item.size);
      if (index > -1) {
        selectedSizes.splice(index, 1);
      } else {
        selectedSizes.push(item.size);
      }

      return {
        path: this.$route.path,
        query: {
          ...this.$route.query,

          category: selectedSizes.toString(),
          page: 1,
        },
      };
    },
    isActivedColor: function (item) {
      return (
        this.$route.query.product &&
        this.$route.query.product.split(",").includes(item.size)
      );
    },
    isActivedSize: function (item) {
      return (
        this.$route.query.category &&
        this.$route.query.category.split(",").includes(item.size)
      );
    },

    getFlag: function () {
      if (this.$route.path.includes("horizontal-filter-1"))
        this.isFeatured = false;
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
                name: item.category_name,

                size: String(item.id),
              });
            });

            console.log("this.cate", this.shopSizes);
            this.$forceUpdate();
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
                size: String(item.id),
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
