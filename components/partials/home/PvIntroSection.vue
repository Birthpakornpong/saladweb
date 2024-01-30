<template>
  <!-- <pv-carousel
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

  </pv-carousel> -->
  <b-carousel
    id="carousel-1"
    v-model="slide"
    :interval="4000"
    controls
    indicators
    background="#ababab"
    img-width="1024"
    img-height="480"
    style="text-shadow: 1px 1px 2px #333;"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
    class="carouselCustom"
  >
    <!-- Slides with image only -->
    <b-carousel-slide
      v-for="(item, index) in introIMG"
      :key="index"
      :img-src="item.url"
    ></b-carousel-slide>

    <!-- Slides with img slot -->
    <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
    <!-- <b-carousel-slide>
      <template #img>
        <img
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="https://picsum.photos/1024/480/?image=55"
          alt="image slot"
        />
      </template>
    </b-carousel-slide> -->

    <!-- Slide with blank fluid image to maintain slide aspect ratio -->
  </b-carousel>
</template>

<script>
import PvCarousel from "~/components/features/PvCarousel";
import { introSlider } from "~/utils/data/carousel";
import { BCarouselSlide, BCarousel } from "bootstrap-vue";
export default {
  components: {
    PvCarousel,
    BCarouselSlide,
    BCarousel,
  },
  props: {
    introIMG: Array,
  },
  data: function () {
    return {
      introSlider: introSlider,
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>
<style>
.carouselCustom li {
  border-radius: 60% !important;
  background-clip: unset !important;
  /* background: rgb(29, 28, 28) 818 !important; */
  background: rgb(45, 45, 45);
  width: 1.5em;
  /* height: 1em; */
}
</style>
