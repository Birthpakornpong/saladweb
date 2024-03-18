<template>
  <main class="main">
    <div
      class="container skeleton-body"
      data-animation-name="fadeInUpShorter"
      data-animation-delay="1000"
      v-animate
    >
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
                :product="product"
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
    </div>
    <div
      class="mobilewidth"
      data-animation-name="fadeInUpShorter"
      data-animation-delay="1000"
      v-animate
    >
      <div class="row main-content" v-if="product">
        <div
          class="col-12 d-flex"
          style="justify-content: center;"
          v-if="product.productBannerLink"
        >
          <img
            style="width: 100%;"
            :src="product.productBannerLink"
            alt="body shape"
            class="w-auto bg-transparent"
          />

          <!-- <inner-image-zoom :src="'./review.png'" /> -->
        </div>
      </div>
    </div>
    <div
      class="container skeleton-body"
      data-animation-name="fadeInUpShorter"
      data-animation-delay="400"
      v-animate
    >
      <div ref="videoPlayerstest" style="display: none;"></div>
      <div class="row main-content" v-if="product">
        <div
          class="col-12 d-flex"
          style="justify-content: center;"
          v-if="product.videourl"
        >
          <!-- <video ref="videoPlayer" muted controls autoplay style="width: 100%;">
            <source :src="product.videourl" type="video/mp4" />
          </video> -->

          <video
            v-show="!variable"
            ref="videoPlayers"
            muted
            playsinline
            autoplay
            style="width: 100%;"
          >
            <source :src="product.videourl" type="video/mp4" />
          </video>
          <video
            v-show="variable"
            ref="videoPlayers"
            muted
            controls
            style="width: 100%;"
          >
            <source :src="product.videourl" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
    <div
      data-animation-name="fadeInUpShorter"
      data-animation-delay="400"
      v-animate
    >
      <PvReviewCustom :reviews="reviews"></PvReviewCustom>
    </div>
    <div
      class="container skeleton-body"
      data-animation-name="fadeInUpShorter"
      data-animation-delay="1000"
      v-animate
    >
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
      variable: false,
      reviews: [],
      product: null,
      relatedProducts: [],
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
      nextProductTemp: {
        id: 2,
        name: "Blue Boy Shoes",
        slug: "blue-boy-shoes",
        price: 100,
        sku: "654613612-1-1",
        stock: 50,
        short_description:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        sale_price: 68,
        sale_count: 10,
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
            pivot: { product_id: "326", "product-category_id": "50" },
          },
          {
            name: "Toys",
            slug: "toys-3",
            parent_name: "Babies",
            disabled: true,
            pivot: { product_id: "326", "product-category_id": "52" },
          },
        ],
        product_brands: [],
        product_tags: [],
        large_pictures: [
          {
            width: "800",
            height: "800",
            url: "/uploads/product_10_1_fc0ded50bb.jpg",
            pivot: { related_id: "326", upload_file_id: "1667" },
          },
          {
            width: "800",
            height: "800",
            url: "/uploads/product_10_2_3834176c36.jpg",
            pivot: { related_id: "326", upload_file_id: "1668" },
          },
          {
            width: "800",
            height: "800",
            url: "/uploads/product_10_3_37906c0947.jpg",
            pivot: { related_id: "326", upload_file_id: "1666" },
          },
        ],
        pictures: [
          {
            width: "300",
            height: "340",
            url: "/uploads/product_10_1_300x340_6b596c29b7.jpg",
            pivot: { related_id: "326", upload_file_id: "1671" },
          },
          {
            width: "300",
            height: "340",
            url: "/uploads/product_10_2_300x340_eceac74299.jpg",
            pivot: { related_id: "326", upload_file_id: "1673" },
          },
          {
            width: "300",
            height: "340",
            url: "/uploads/product_10_3_300x340_e4cb46f47e.jpg",
            pivot: { related_id: "326", upload_file_id: "1672" },
          },
        ],
        small_pictures: [
          {
            width: "150",
            height: "150",
            url: "/uploads/product_10_1_150x150_c828abc984.jpg",
            pivot: { related_id: "326", upload_file_id: "1670" },
          },
          {
            width: "150",
            height: "150",
            url: "/uploads/product_10_2_150x150_4b2020e663.jpg",
            pivot: { related_id: "326", upload_file_id: "1669" },
          },
        ],
        variants: [],
      },
      preProductTemp: {
        id: 2,
        name: "Blue Boy Shoes",
        slug: "blue-boy-shoes",
        price: 100,
        sku: "654613612-1-1",
        stock: 50,
        short_description:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        sale_price: 68,
        sale_count: 10,
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
            pivot: { product_id: "326", "product-category_id": "50" },
          },
          {
            name: "Toys",
            slug: "toys-3",
            parent_name: "Babies",
            disabled: true,
            pivot: { product_id: "326", "product-category_id": "52" },
          },
        ],
        product_brands: [],
        product_tags: [],
        large_pictures: [
          {
            width: "800",
            height: "800",
            url: "/uploads/product_10_1_fc0ded50bb.jpg",
            pivot: { related_id: "326", upload_file_id: "1667" },
          },
          {
            width: "800",
            height: "800",
            url: "/uploads/product_10_2_3834176c36.jpg",
            pivot: { related_id: "326", upload_file_id: "1668" },
          },
          {
            width: "800",
            height: "800",
            url: "/uploads/product_10_3_37906c0947.jpg",
            pivot: { related_id: "326", upload_file_id: "1666" },
          },
        ],
        pictures: [
          {
            width: "300",
            height: "340",
            url: "/uploads/product_10_1_300x340_6b596c29b7.jpg",
            pivot: { related_id: "326", upload_file_id: "1671" },
          },
          {
            width: "300",
            height: "340",
            url: "/uploads/product_10_2_300x340_eceac74299.jpg",
            pivot: { related_id: "326", upload_file_id: "1673" },
          },
          {
            width: "300",
            height: "340",
            url: "/uploads/product_10_3_300x340_e4cb46f47e.jpg",
            pivot: { related_id: "326", upload_file_id: "1672" },
          },
        ],
        small_pictures: [
          {
            width: "150",
            height: "150",
            url: "/uploads/product_10_1_150x150_c828abc984.jpg",
            pivot: { related_id: "326", upload_file_id: "1670" },
          },
          {
            width: "150",
            height: "150",
            url: "/uploads/product_10_2_150x150_4b2020e663.jpg",
            pivot: { related_id: "326", upload_file_id: "1669" },
          },
        ],
        variants: [],
      },
      productTemp: {
        productChannelModels: [],
        productVideoLink: "",
        productBannerLink: "",
        instruction: "",
        precautionary: "",
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
          // {
          //   width: "800",
          //   height: "800",
          //   url: "/uploads/product_16_1_27c032e0ec.jpg",
          //   pivot: { related_id: "323", upload_file_id: "1642" },
          // },
          // {
          //   width: "800",
          //   height: "800",
          //   url: "/uploads/product_16_2_7f9575405f.jpg",
          //   pivot: { related_id: "323", upload_file_id: "1644" },
          // },
          // {
          //   width: "800",
          //   height: "800",
          //   url: "/uploads/product_16_3_8050d5961f.jpg",
          //   pivot: { related_id: "323", upload_file_id: "1643" },
          // },
        ],
        pictures: [
          // {
          //   width: "300",
          //   height: "340",
          //   url: "/uploads/product_16_1_300x340_d499c88efd.jpg",
          //   pivot: { related_id: "323", upload_file_id: "1648" },
          // },
          // {
          //   width: "300",
          //   height: "340",
          //   url: "/uploads/product_16_2_300x340_2b2de25664.jpg",
          //   pivot: { related_id: "323", upload_file_id: "1649" },
          // },
          // {
          //   width: "300",
          //   height: "340",
          //   url: "/uploads/product_16_3_300x340_9475179c1e.jpg",
          //   pivot: { related_id: "323", upload_file_id: "1647" },
          // },
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
      relateTemp: {
        id: 326,
        name: "Blue Boy Shoes",
        slug: "blue-boy-shoes",
        price: 100,
        sku: "654613612-1-1",
        stock: 50,
        short_description:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        sale_price: 68,
        sale_count: 10,
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
            pivot: { product_id: "326", "product-category_id": "50" },
          },
          {
            name: "Toys",
            slug: "toys-3",
            parent_name: "Babies",
            disabled: true,
            pivot: { product_id: "326", "product-category_id": "52" },
          },
        ],
        product_brands: [],
        product_tags: [],
        large_pictures: [
          {
            width: "800",
            height: "800",
            url: "/uploads/product_10_1_fc0ded50bb.jpg",
            pivot: { related_id: "326", upload_file_id: "1667" },
          },
          {
            width: "800",
            height: "800",
            url: "/uploads/product_10_2_3834176c36.jpg",
            pivot: { related_id: "326", upload_file_id: "1668" },
          },
          {
            width: "800",
            height: "800",
            url: "/uploads/product_10_3_37906c0947.jpg",
            pivot: { related_id: "326", upload_file_id: "1666" },
          },
        ],
        pictures: [
          {
            width: "300",
            height: "340",
            url: "/uploads/product_10_1_300x340_6b596c29b7.jpg",
            pivot: { related_id: "326", upload_file_id: "1671" },
          },
          {
            width: "300",
            height: "340",
            url: "/uploads/product_10_2_300x340_eceac74299.jpg",
            pivot: { related_id: "326", upload_file_id: "1673" },
          },
          {
            width: "300",
            height: "340",
            url: "/uploads/product_10_3_300x340_e4cb46f47e.jpg",
            pivot: { related_id: "326", upload_file_id: "1672" },
          },
        ],
        small_pictures: [
          {
            width: "150",
            height: "150",
            url: "/uploads/product_10_1_150x150_c828abc984.jpg",
            pivot: { related_id: "326", upload_file_id: "1670" },
          },
          {
            width: "150",
            height: "150",
            url: "/uploads/product_10_2_150x150_4b2020e663.jpg",
            pivot: { related_id: "326", upload_file_id: "1669" },
          },
        ],
        variants: [],
      },
    };
  },
  created: function () {
    this.getProduct();
    this.handlerGet();
    this.handlerGetRecom();
    console.log("data check", mockData);
  },
  mounted() {
    var videos = document.querySelector("video");
    console.log("check", videos);
    // this.timerId = setTimeout( () => {
    // 	if (
    // 		this.$route.path === '/' &&
    // 		getCookie( 'newsletter' ) !== 'false'
    // 	) {
    // 		this.$modal.show(
    // 			() =>
    // 				import( '~/components/features/modal/PvNewsletterModal' ),
    // 			{},
    // 			{ width: '740', height: 'auto', adaptive: true, class: 'newsletter-modal' }
    // 		);
    // 	}
    // }, 10000 );
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.variable = true;
            this.$nextTick(() => {
              // this.$refs.videoPlayerstest.play().catch((e) => {
              //   console.error("Error playing video:", e);
              // // });
              // videos.click();
              this.variable = true;
              this.$forceUpdate();
            });
          } else {
            this.variable = false;
            // this.$refs.videoPlayerstest.pause();
          }
        });
      },
      { threshold: 0.5 }
    ); // threshold คือเปอร์เซ็นต์ขององค์ประกอบที่ต้องปรากฏในหน้าจอ
    if (this.$refs.videoPlayerstest) {
      console.log("pass");
      observer.observe(this.$refs.videoPlayerstest);
    }
  },
  methods: {
    getProduct: function () {
      this.loaded = false;

      // this.product = mockData.product;
      // this.relatedProducts = mockData.relatedProducts;
      this.featuredProducts = mockData.featuredProducts;
      this.bestProducts = mockData.bestSellingProducts;
      this.latestProducts = mockData.latestProducts;
      this.topRatedProducts = mockData.topRatedProducts;
      // this.prevProduct = mockData.prevProduct;
      // this.nextProduct = mockData.nextProduct;
      this.categoryList = sidebarShop.sidebarList;
      this.featuredProducts = sidebarShop.featuredProducts;
      this.loaded = true;
    },
    async handlerGetRecom() {
      var optionAxios = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      let payload = {
        key: "",
        category_id: [],
        product_id: [],
        sort: 0,
        pageNumber: 1,
        pageSize: 8,
      };
      axios
        .post(
          `${baseUrl}/api/Home/get-product-recommended`,
          payload,
          optionAxios
        )
        .then((response) => {
          if (response.status == 200) {
            this.relatedProducts = [];
            response.data.data.forEach((item) => {
              if (item.id !== Number(this.$route.params.slug)) {
                this.relatedProducts.push({
                  ...this.relateTemp,
                  name: item.product_name,
                  imgUrl: item.productProfileLink,
                  slug: item.id,
                });
              }
            });

            console.log("this.relatedProducts", this.relatedProducts);

            // this.totalCount = response.data.length;
          } else {
          }
        })
        .catch((error) => {});
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
            // response.data.homeNextProductId
            this.nextProductTemp.slug = response.data.homeNextProductId;
            this.nextProduct = this.nextProductTemp;
            if (response.data.homePreviousProductId) {
              this.preProductTemp.slug = response.data.homePreviousProductId;
              this.prevProduct = this.preProductTemp;
            }
            this.productTemp.name = response.data.product_name;
            this.productTemp.sku = response.data.product_sku;
            this.productTemp.short_description =
              response.data.product_detail_th;
            this.productTemp.ratings = response.data.product_rating;
            this.productTemp.price = response.data.product_price;
            this.productTemp.quantity = response.data.product_quantity_th;
            this.productTemp.expired = response.data.product_expired_th;
            this.productTemp.category = response.data.product_category;
            this.productTemp.reviews = response.data.productReviewModels.length;
            this.productTemp.instruction =
              response.data.product_storage_instruction_th;
            this.productTemp.precautionary =
              response.data.product_precautionary_th;
            this.productTemp.productBannerLink =
              response.data.productBannerLink;
            this.productTemp.productVideoLink = response.data.productVideoLink;
            this.productTemp.productChannelModels =
              response.data.productChannelModels;
            this.productTemp.videourl = response.data.productVideoLink;

            this.reviews = response.data.productReviewModels;
            response.data.homeProductImageLinks.forEach((item) => {
              this.productTemp.large_pictures.push({
                width: "800",
                height: "800",
                url: item,
                pivot: { related_id: "323", upload_file_id: "1642" },
              });
            });
            response.data.homeProductImageLinks.forEach((item) => {
              this.productTemp.pictures.push({
                width: "300",
                height: "340",
                url: item,
                pivot: { related_id: "323", upload_file_id: "1648" },
              });
            });

            console.log("check pro", this.productTemp);
            this.product = this.productTemp;
          } else {
          }
        })
        .catch((error) => {});
    },
  },
};
</script>
<style>
.mobilewidth {
  padding: 5em;
}
@media only screen and (max-width: 600px) {
  .mobilewidth {
    padding: 1em;
  }
  .main-content {
    padding-top: 0rem;
    padding-bottom: 0rem;
  }
}
</style>
