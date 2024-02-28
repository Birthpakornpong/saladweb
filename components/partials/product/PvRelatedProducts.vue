<template>
  <div>
    <h2
      class="headers-text"
      v-if="products"
      style="margin-bottom: 2.4rem; display: flex; justify-content: center;"
    >
      Recommended Products
    </h2>

    <div
      class="row appear-animate hidemobile"
      data-animation-name="fadeInUpShorter"
      data-animation-delay="400"
      v-animate
      v-if="products.length > 0"
      style="display: flex; justify-content: center;"
    >
      <div
        class="col-6 col-md-4 col-xl-4 px-5"
        v-for="(product, index) in products.slice(0, 3)"
        :key="'wel-' + index"
      >
        <pv-product-one :product="product"></pv-product-one>
      </div>
    </div>
    <div
      class="row appear-animate showmobile"
      data-animation-name="fadeInUpShorter"
      data-animation-delay="400"
      v-animate
      v-if="products.length > 0"
      style="display: flex; justify-content: center;"
    >
      <div
        class="col-6 col-md-4 col-xl-4 px-5"
        v-for="(product, index) in products.slice(0, 2)"
        :key="'wel-' + index"
      >
        <pv-product-one :product="product"></pv-product-one>
      </div>
    </div>

    <!-- <pv-carousel
      class="skel-carousel dots-top dots-small"
      :options="baseSlider9"
      v-if="!products"
    >
      <div
        v-for="item in [1, 2, 3, 4, 5]"
        :key="item"
        class="swiper-slide skel-pro"
      ></div>
    </pv-carousel>

    <pv-carousel
      class="products-slider dots-top dots-small"
      :options="baseSlider9"
      v-if="products && products.length > 0"
    >
      <pv-product-one
        :product="item"
        v-for="(item, index) in products.slice(0, 5)"
        :key="'related-product' + index"
        class="swiper-slide"
      ></pv-product-one>
    </pv-carousel>

    <div
      class="info-box with-icon p-0"
      v-if="products && products.length === 0"
      style="margin-bottom: 2.4rem;"
    >
      <p>No products were found matching your selection.</p>
    </div> -->
  </div>
</template>

<script>
import PvProductOne from "~/components/features/product/PvProductOne";
import PvCarousel from "~/components/features/PvCarousel";
import { baseSlider9 } from "~/utils/data/carousel";

export default {
  components: {
    PvProductOne,
    PvCarousel,
  },
  data: function () {
    return {
      baseSlider9: baseSlider9,
    };
  },
  props: {
    products: Array,
  },
};
</script>
<style>
.headers-text {
  text-align: center;
  font-weight: bold;
  font-size: 2.5em;
  color: #ab0011;
  position: relative;
}
.hidemobile {
  display: flex !important;
}

@media only screen and (max-width: 600px) {
  .hidemobile {
    display: none !important;
  }
}

.showmobile {
}

@media only screen and (max-width: 600px) {
  .showmobile {
    display: flex;
  }
}
</style>
