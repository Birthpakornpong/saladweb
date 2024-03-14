<template>
  <div>
    <div class="sidebar-wrapper">
      <div
        class="sidebar-content skeleton-body"
        v-if="categoryList.length === 0"
      >
        <aside class="widget"></aside>
      </div>

      <div class="widget widget-size margin-mobile" v-if="product.instruction">
        <h3 class="widget-title margin-headtext">
          <a
            href="javascript:;"
            @click="catOpened = !catOpened"
            :class="{ collapsed: !catOpened }"
            style="font-size: 1.6em;"
            >วิธีหรือคำแนะนำในการรับประทาน/เก็บรักษา</a
          >
        </h3>

        <vue-slide-toggle :open="catOpened">
          <div class="widget-body" style="padding-top: 2rem;">
            <!-- <ul class="cat-list">
              <li
                v-for="(item, index) in shopSizes"
                :key="'size-filter' + index"
              >
                {{ item.name }}
              </li>
            </ul> -->
            <div v-html="product.instruction" style="font-size: 1.3em;"></div>
          </div>
        </vue-slide-toggle>
      </div>

      <div
        class="widget widget-size margin-mobile"
        v-if="product.precautionary"
      >
        <h3 class="widget-title margin-headtext">
          <a
            href="javascript:;"
            @click="sizeOpened = !sizeOpened"
            :class="{ collapsed: !sizeOpened }"
            style="font-size: 1.6em;"
            >คำแนะนำและข้อควรระวัง</a
          >
        </h3>

        <vue-slide-toggle :open="sizeOpened">
          <div class="widget-body" style="padding-top: 2rem;">
            <!-- <ul class="cat-list">
              <li
                v-for="(item, index) in shopSizes"
                :key="'size-filter' + index"
              >
                {{ item.name }}
              </li>
            </ul> -->
            <div v-html="product.precautionary" style="font-size: 1.3em;"></div>
          </div>
        </vue-slide-toggle>
      </div>
      <ul
        class="single-info-list margin-mobile"
        v-if="product.productChannelModels.length > 0"
      >
        <li v-if="product.quantity" style="font-size: 1.5em;">
          <div class="d-flex" style="align-items: center; flex-wrap: wrap;">
            <span class="mt-1">สั่งซื้อได้ที่:</span>
            <a
              v-for="(item, index) in product.productChannelModels"
              :key="index"
              :href="item.channel_link"
              target="_blank"
              class="ml-4 mt-1"
            >
              <img style="height: 2em;" :src="item.product_channel_path" />
            </a>
          </div>
        </li>
      </ul>
      <!-- <vue-slide-toggle :open="!isEmptyQuery">
        <div class="widget mb-3 ml-4 border-bottom-0">
          <nuxt-link
            :to="{ path: $router.path }"
            class="btn btn-primary reset-filter-btn router-link-active"
            >Reset All Filters</nuxt-link
          >
        </div>
      </vue-slide-toggle> -->
    </div>
  </div>
</template>

<script>
import { VueSlideToggle } from "vue-slide-toggle";
import { VueTreeList, Tree } from "vue-tree-list";
import PvSmallProduct from "~/components/features/product/PvSmallProduct";
import { shopColors, shopSizes } from "~/utils/data/shop";

export default {
  components: {
    VueSlideToggle,
    VueTreeList,
    PvSmallProduct,
  },
  props: {
    categoryList: Array,
    featuredProducts: Array,
    product: Object,
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
  created: function () {
    this.getFlag();

    if (this.$route.query.min_price) {
      this.prices = [this.$route.query.min_price, this.$route.query.max_price];
    } else {
      this.prices = [0, 1000];
    }
    console.log("check pro", this.product);
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
      let selectedColors = this.$route.query.color
        ? this.$route.query.color.split(",")
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
          color: selectedColors.toString(),
        },
      };
    },
    sizeFilterRoute: function (item) {
      let selectedSizes = this.$route.query.size
        ? this.$route.query.size.split(",")
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
          size: selectedSizes.toString(),
          page: 1,
        },
      };
    },
    isActivedColor: function (item) {
      return (
        this.$route.query.color &&
        this.$route.query.color.split(",").includes(item.name)
      );
    },
    isActivedSize: function (item) {
      return (
        this.$route.query.size &&
        this.$route.query.size.split(",").includes(item.size)
      );
    },
    getFlag: function () {
      if (this.$route.path.includes("horizontal-filter-1"))
        this.isFeatured = false;
    },
  },
};
</script>
<style scoped>
.margin-mobile {
}
.margin-headtext {
}
@media only screen and (max-width: 600px) {
  .margin-mobile {
    margin-bottom: 1.5rem !important;
    margin-top: 0rem;
  }
  .margin-headtext {
    margin-top: 0rem !important;
  }
}
</style>
