<template>
  <section class="welcome-section bg-cus paddingmo">
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
          class="col-4 col-md-4 col-xl-4 padding-mobile"
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
  font-size: 2.5em;
  color: #ab0011;
  position: relative;
}
@media only screen and (max-width: 600px) {
  .category-section .header-text {
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
    color: #ab0011;
    position: relative;
  }
}
.hidemobile {
  display: flex !important;
}

.paddingmo {
}
@media only screen and (max-width: 600px) {
  .hidemobile {
    display: none !important;
  }
  .paddingmo {
    padding: 1rem 0 0rem !important;
  }
}

.showmobile {
}

@media only screen and (max-width: 600px) {
  .showmobile {
    display: flex;
  }
}
.bg-cus {
  background: linear-gradient(
    -180deg,
    rgba(209, 209, 209, 1),
    rgba(255, 255, 255, 1)
  ) !important;
}
.padding-mobile {
  padding: 0em 4em;
}
@media only screen and (max-width: 600px) {
  .padding-mobile {
    padding: 0em 0.5em;
  }
}
</style>
