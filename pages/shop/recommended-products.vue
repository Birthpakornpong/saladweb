<template>
  <main class="main skeleton-body">
    <!-- <pv-shop-banner></pv-shop-banner> -->

    <div class="container">
      <!-- <nav aria-label="breadcrumb" class="breadcrumb-nav border-bottom-0">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <nuxt-link to="/">
              Home
            </nuxt-link>
          </li>
          <li class="breadcrumb-item active">Shop</li>
        </ol>
      </nav> -->
      <div class="category-section mb-4 mt-3">
        <div class="header-textblack">
          <div>RECOMMENDED PRODUCTS</div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <pv-product-list-two></pv-product-list-two>
        </div>
      </div>
    </div>

    <div>
      <PvReviewCustom :reviews="reviews.slice(0, 2)"></PvReviewCustom>
    </div>
  </main>
</template>

<script>
import { VueTreeList, Tree } from "vue-tree-list";
import PvSidebarFilterOne from "~/components/partials/shop/sidebar-filter/PvSidebarFilterOne";
import PvProductListTwo from "~/components/partials/shop/product-list/PvProductListTwo";
import PvShopBanner from "~/components/partials/shop/PvShopBanner";
import axios from "axios";
import Api, { baseUrl } from "~/api";
import { recomData } from "~/recomData.js";
import PvReviewCustom from "~/components/common/partials/PvReviewCustom";

export default {
  components: {
    PvSidebarFilterOne,
    PvProductListTwo,
    PvShopBanner,
    PvReviewCustom,
  },
  data: function () {
    return {
      reviews: [],
      categoryList: [],
      featuredProducts: [],
      tempProduct: {
        id: 323,
        name: "Holis by SCGP อิม-มู แคป ชนิดซอฟต์เจล 10 เม็ด",
        slug: "baby-sport-shoes",
        price: 96,
        sku: "654613612-1-1-1",
        stock: 50,
        short_description:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        sale_price: 68,
        sale_count: 0,
        ratings: 0,
        reviews: "0",
        is_hot: null,
        is_sale: true,
        is_new: null,
        is_out_of_stock: null,
        release_date: null,
        developer: null,
        publisher: null,
        game_mode: null,
        rated: null,
        until: null,
        product_categories: [
          {
            name: "Babies",
            slug: "babies",
            parent_name: null,
            disabled: true,
            pivot: { product_id: "323", "product-category_id": "50" },
          },
        ],
        product_brands: [],
        product_tags: [],
        large_pictures: [
          {
            width: "800",
            height: "800",
            url: "/uploads/product_16_1_27c032e0ec.jpg",
            pivot: { related_id: "323", upload_file_id: "1642" },
          },
          {
            width: "800",
            height: "800",
            url: "/uploads/product_16_2_7f9575405f.jpg",
            pivot: { related_id: "323", upload_file_id: "1644" },
          },
          {
            width: "800",
            height: "800",
            url: "/uploads/product_16_3_8050d5961f.jpg",
            pivot: { related_id: "323", upload_file_id: "1643" },
          },
        ],
        small_pictures: [
          {
            width: "150",
            height: "150",
            url: "/uploads/product_16_1_150x150_847ceac2f2.jpg",
            pivot: { related_id: "323", upload_file_id: "1646" },
          },
          {
            width: "150",
            height: "150",
            url: "/uploads/product_16_2_150x150_42c25a276a.jpg",
            pivot: { related_id: "323", upload_file_id: "1645" },
          },
        ],
        variants: [],
      },
    };
  },
  mounted: function () {
    this.getCategoryLists();
    this.handlerGet();
  },
  methods: {
    getCategoryLists: function () {
      this.categoryList = recomData.sidebarList;
      this.featuredProducts = recomData.featuredProducts;
    },
    async handlerGet() {
      var optionAxios = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      axios
        .post(`${baseUrl}/api/Home/get-review`, optionAxios)
        .then((response) => {
          if (response.status == 200) {
            this.reviews = response.data;
          } else {
          }
        })
        .catch((error) => {});
    },
  },
};
</script>
<style>
.header-textblack {
  text-align: center;
  font-weight: bold;
  font-size: 3em;
  color: black;
  position: relative;
}
</style>
