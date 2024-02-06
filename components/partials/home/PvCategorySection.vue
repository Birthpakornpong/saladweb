<template>
  <section class="welcome-section">
    <div class="container" v-if="products.length > 0">
      <div
        class="category-section mb-4 appear-animate"
        data-animation-name="fadeInUpShorter"
        data-animation-delay="400"
        v-animate
      >
        <div class="header-text">
          <div>BEST SELLERS</div>
        </div>
      </div>

      <div
        class="row appear-animate"
        data-animation-name="fadeInUpShorter"
        data-animation-delay="400"
        v-animate
        v-if="products.length === 0"
      >
        <div
          class="col-6 col-md-4 col-xl-3"
          v-for="index in [1, 2, 3, 4]"
          :key="'wel-skel-' + index"
        >
          <div class="product-loading-overlay"></div>
        </div>
      </div>

      <div
        class="row appear-animate hidemobile"
        data-animation-name="fadeInUpShorter"
        data-animation-delay="400"
        v-animate
        v-if="products.length > 0"
        style="justify-content: center;"
      >
        <div
          class="col-6 col-md-4 col-xl-4"
          style="padding: 0em 3em;"
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
        style="justify-content: center;"
      >
        <div
          class="col-6 col-md-4 col-xl-4"
          style="padding: 0em 4em;"
          v-for="(product, index) in products.slice(0, 2)"
          :key="'wel-' + index"
        >
          <pv-product-one :product="product"></pv-product-one>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PvCarousel from "~/components/features/PvCarousel";
import PvProductOne from "~/components/features/product/PvProductOne";

export default {
  components: {
    PvCarousel,
    PvProductOne,
  },
  props: {
    products: Array,
  },
};
</script>
<style>
.category-section .header-text {
  text-align: center;
  font-weight: bold;
  font-size: x-large;
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
