<template>
  <main class="main home-page">
    <section class="intro-section mb-3">
      <pv-intro-section :introIMG="introIMG"></pv-intro-section>
    </section>

    <div
      style="display: flex; justify-content: center;"
      v-if="video.length > 0"
    >
      <video ref="videoPlayer" muted controls>
        <source :src="video[0].url" type="video/mp4" />
      </video>
    </div>

    <pv-category-section :products="products"></pv-category-section>

    <!-- <pv-best-collection :products="products"></pv-best-collection> -->

    <pv-brand-section></pv-brand-section>

    <!-- <pv-banner-section></pv-banner-section> -->
  </main>
</template>

<script>
import PvIntroSection from "~/components/partials/home/PvIntroSection";
import PvCategorySection from "~/components/partials/home/PvCategorySection";
import PvBannerSection from "~/components/partials/home/PvBannerSection";
import PvBestCollection from "~/components/partials/home/PvBestCollection";
import PvBrandSection from "~/components/partials/home/PvBrandSection";
import { indexData } from "~/indexData.js";

import {
  getProductsByAttri,
  getTopSellingProducts,
  getTopRatedProducts,
} from "~/utils/service";
import { getCookie } from "~/utils";
import axios from "axios";
import Api, { baseUrl } from "~/api";

export default {
  components: {
    PvIntroSection,
    PvCategorySection,
    PvBannerSection,
    PvBestCollection,
    PvBrandSection,
  },
  data: function () {
    return {
      products: [],
      posts: [],
      featuredProducts: [],
      newProducts: [],
      bestProducts: [],
      topRatedProducts: [],
      timerId: 0,
      video: [],
      introIMG: [],
      tempProduct: {
        id: 0,
        name: "Baby Sport Shoes",
        slug: "baby-sport-shoes",
        imgUrl: "",
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
        large_pictures: [
          {
            width: "800",
            height: "800",
            url: "~/static/images/imgmock1.png",
            pivot: { related_id: "323", upload_file_id: "1642" },
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
    this.handlerGet();
    // this.products = indexData.products;
    this.posts = indexData.posts;
    this.featuredProducts = getProductsByAttri(indexData.products);
    this.newProducts = getProductsByAttri(indexData.products, "is_new");
    this.bestProducts = getTopSellingProducts(indexData.products);
    this.topRatedProducts = getTopRatedProducts(indexData.products);

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
        .get(`${baseUrl}/api/Home/get-home`, optionAxios)
        .then((response) => {
          if (response.status == 200) {
            response.data.productBestSellerList.forEach((item) => {
              this.products.push({
                ...this.tempProduct,
                name: item.product_name,
                imgUrl: item.productProfileLink,
                slug: item.id,
              });
            });
            response.data.bannerList.forEach((item) => {
              this.introIMG.push({
                ...item,
                url: item.link_file_upload,
              });
            });
            response.data.productVideoList.forEach((item) => {
              this.video.push({
                ...item,
                url: item.link_file_upload,
              });
            });
            // console.log("check", this.products);
          } else {
          }
        })
        .catch((error) => {});
    },
  },
  watch: {},
  destroyed: function () {
    clearTimeout(this.timerId);
  },
};
</script>
