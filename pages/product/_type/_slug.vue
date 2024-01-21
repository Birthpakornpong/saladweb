<template>
  <main class="main">
    <div class="container skeleton-body">
      <div class="product-single-container product-single-default">
        <div class="row" v-if="product">
          <div class="col-lg-5 col-md-6 product-single-gallery">
            <pv-media-one :product="product"></pv-media-one>
          </div>

          <div class="col-lg-7 col-md-6 product-single-details">
            <pv-detail-one
              :product="product"
              :prev-product="prevProduct"
              :next-product="nextProduct"
            ></pv-detail-one>
            <div class="category-custom">
              <pv-desc-custom
                :category-list="categoryList"
                :featured-products="featuredProducts"
                v-if="featuredProducts.length > 0"
              ></pv-desc-custom>
            </div>
          </div>
        </div>
      </div>

      <div class="skel-group" v-if="!product">
        <div class="summary-before col-lg-5 col-md-6"></div>
        <div class="summary entry-summary col-lg-7 col-md-6"></div>
        <div class="tab-content col-lg-12"></div>
      </div>
      <div class="row main-content">
        <div class="col-12">
          <img
            style="width: 100%;"
            :src="'./detailproduct.jpg'"
            alt="body shape"
            class="w-auto bg-transparent"
          />

          <!-- <inner-image-zoom :src="'./review.png'" /> -->
        </div>
      </div>
      <div>
        <PvReviewCustom></PvReviewCustom>
      </div>

      <pv-related-products
        :products="relatedProducts"
        class="pb-3"
      ></pv-related-products>
    </div>
  </main>
</template>

<script>
import PvMediaOne from "~/components/partials/product/media/PvMediaOne";
import PvDetailOne from "~/components/partials/product/detail/PvDetailOne";
import PvDescOne from "~/components/partials/product/description/PvDescOne";
import PvRelatedProducts from "~/components/partials/product/PvRelatedProducts";
import PvSmallCollection from "~/components/partials/product/PvSmallCollection";
import PvReviewCustom from "~/components/common/partials/PvReviewCustom";
import PvBrandSection from "~/components/partials/home/PvBrandSection";

import { mockData } from "~/data";
import PvDescCustom from "~/components/partials/product/description/PvDescCustom";
import { sidebarShop } from "~/sidebarShop.js";
import axios from "axios";
import Api, { baseUrl } from "~/api";

export default {
  components: {
    PvMediaOne,
    PvDetailOne,
    PvDescOne,
    PvRelatedProducts,
    PvSmallCollection,
    PvBrandSection,
    PvDescCustom,
    PvReviewCustom,
  },
  data: function () {
    return {
      product: null,
      relatedProducts: null,
      featuredProducts: null,
      bestProducts: null,
      latestProducts: null,
      topRatedProducts: null,
      nextProduct: null,
      prevProduct: null,
      loaded: false,
      productCategory: [],
      categoryList: [],
      featuredProducts: [],

      productTemp: {
        category: "",
        quantity: "",
        expired: "",
        id: 323,
        name: "Holis by SCGP อิม-มู แคป ชนิดซอฟต์เจล 10 เม็ด",
        slug: "baby-sport-shoes",
        price: 96,
        sku: "654613612-1-1-1",
        stock: 50,
        short_description:
          "[Free Gift] Holis Hol Im-mu Cap 10 Capsules ผลิตภัณฑ์เสริมอาหาร จากโฮลิส ที่มี 3 สารสกัดธรรมชาติอย่าง Astaxanthin, Beta Glucan และ Cordycepin ช่วยเสริมสร้างภูมิคุ้มกันและปรับสมดุลร่างกายแบบองค์รวม ",
        sale_price: 70,
        sale_count: 0,
        ratings: 0,
        reviews: "0",
        is_hot: null,
        is_sale: false,
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
        pictures: [
          {
            width: "300",
            height: "340",
            url: "/uploads/product_16_1_300x340_d499c88efd.jpg",
            pivot: { related_id: "323", upload_file_id: "1648" },
          },
          {
            width: "300",
            height: "340",
            url: "/uploads/product_16_2_300x340_2b2de25664.jpg",
            pivot: { related_id: "323", upload_file_id: "1649" },
          },
          {
            width: "300",
            height: "340",
            url: "/uploads/product_16_3_300x340_9475179c1e.jpg",
            pivot: { related_id: "323", upload_file_id: "1647" },
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
  created: function () {
    this.getProduct();
    this.handlerGet();
    console.log("data check", mockData);
  },
  methods: {
    getProduct: function () {
      this.loaded = false;

      // this.product = mockData.product;
      this.relatedProducts = mockData.relatedProducts;
      this.featuredProducts = mockData.featuredProducts;
      this.bestProducts = mockData.bestSellingProducts;
      this.latestProducts = mockData.latestProducts;
      this.topRatedProducts = mockData.topRatedProducts;
      this.prevProduct = mockData.prevProduct;
      this.nextProduct = mockData.nextProduct;
      this.categoryList = sidebarShop.sidebarList;
      this.featuredProducts = sidebarShop.featuredProducts;
      this.loaded = true;
    },
    async handlerGet() {
      var optionAxios = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      axios
        .get(
          `${baseUrl}/api/Home/product-get-by-id?productId=${this.$route.params.slug}`,
          optionAxios
        )
        .then((response) => {
          if (response.status == 200) {
            console.log("check", response);
            this.productTemp.name = response.data.product_name;
            this.productTemp.sku = response.data.product_sku;
            this.productTemp.short_description =
              response.data.product_description;
            this.productTemp.ratings = response.data.product_rating;
            this.productTemp.price = response.data.product_price;
            this.productTemp.quantity = response.data.product_quantity_th;
            this.productTemp.expired = response.data.product_expired_th;
            this.productTemp.category = response.data.product_category;

            this.product = this.productTemp;
          } else {
          }
        })
        .catch((error) => {});
    },
  },
};
</script>
