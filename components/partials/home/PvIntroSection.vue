<template>
  <pv-carousel
    v-if="introIMG.length > 0"
    class="home-slider slide-animate"
    :options="introSlider"
    v-animate
  >
    <div class="swiper-slide" v-for="(item, index) in introIMG" :key="index">
      <div class="home-slide-1 banner" style="margin: 0;">
        <img
          class="slide-bg"
          :src="item.url"
          alt="slider image"
          width="1200"
          style="max-height: 45em;"
        />
      </div>
    </div>

    <!-- <div class="swiper-slide">
      <div class="home-slide-2 banner swiper-slide" style="margin: 0;">
        <img
          class="slide-bg"
          :src="'./images/home/slider/slide-2.png'"
          alt="slider image"
          height="575"
          style="width: 100%;"
        />
      </div>
    </div> -->
  </pv-carousel>
</template>

<script>
import PvCarousel from "~/components/features/PvCarousel";
import { introSlider } from "~/utils/data/carousel";

export default {
  components: {
    PvCarousel,
  },
  props: {
    introIMG: Array,
  },
  data: function () {
    return {
      introSlider: introSlider,
    };
  },
};
</script>
