<template>
  <main class="main skeleton-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <pv-product-list-one
            :category-list="categoryList"
            :items-per-row="itemCountsPerRow[cols]"
          ></pv-product-list-one>
        </div>
      </div>
    </div>

    <div class="mb-4"></div>
  </main>
</template>

<script>
import { VueTreeList, Tree } from "vue-tree-list";
import Sticky from "vue-sticky-directive";
import PvSidebarFilterOne from "~/components/partials/shop/sidebar-filter/PvSidebarFilterOne";
import PvProductListOne from "~/components/partials/shop/product-list/PvProductListOne";
import PvShopBanner from "~/components/partials/shop/PvShopBanner";
import Api, { baseUrl, currentDemo } from "~/api";

export default {
  components: {
    PvSidebarFilterOne,
    PvProductListOne,
    PvShopBanner,
  },
  directives: {
    Sticky,
  },
  data: function () {
    return {
      categoryList: [],
      featuredProducts: [],
      itemCountsPerRow: {
        "3cols": 3,
        "4cols": 4,
        "5cols": 5,
        "6cols": 6,
        "7cols": 7,
        "8cols": 8,
      },
      cols: "3cols",
      isSticky: false,
    };
  },
  mounted: function () {
    this.cols = this.$route.params.type;
    this.getCategoryLists();
    this.resizeHandler();
    window.addEventListener("resize", this.resizeHandler, {
      passive: true,
    });
  },
  destroyed: function () {
    window.removeEventListener("resize", this.resizeHandler);
  },
  methods: {
    getCategoryLists: function () {
      Api.get(`${baseUrl}/shop/sidebar-list`, {
        params: { demo: currentDemo },
      })
        .then((response) => {
          this.categoryList = response.data.sidebarList;
          this.featuredProducts = response.data.featuredProducts;
        })
        .catch((error) => ({ error: JSON.stringify(error) }));
    },
    resizeHandler: function () {
      this.isSticky = window.innerWidth > 991 ? true : false;
    },
    hideSidebar: function () {
      document.querySelector("body").classList.remove("sidebar-opened");
    },
  },
};
</script>
