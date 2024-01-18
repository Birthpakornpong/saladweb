<template>
  <section class="welcome-section">
    <div class="container">
      <div class="category-section mb-4">
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
        class="row appear-animate"
        data-animation-name="fadeInUpShorter"
        data-animation-delay="400"
        v-animate
        v-if="products.length > 0"
        style="display: flex; justify-content: center;"
      >
        <div
          class="col-6 col-md-4 col-xl-3"
          v-for="(product, index) in products.slice(0, 3)"
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
</style>
