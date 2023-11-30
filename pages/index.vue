<template>
  <main class="main home-page">
    <section class="intro-section mb-3">
      <pv-intro-section></pv-intro-section>
    </section>

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
    };
  },
  mounted: function () {
    this.products = indexData.products;
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
  destroyed: function () {
    clearTimeout(this.timerId);
  },
};
</script>
