<template>
  <pv-carousel
    class="home-slider slide-animate"
    :options="introSlider"
    v-animate
  >
    <div class="swiper-slide">
      <div class="home-slide-1 banner" style="margin: 0;">
        <img
          class="slide-bg"
          :src="'./images/home/slider/slide-1.png'"
          alt="slider image"
          width="1200"
          height="575"
        />

        <!-- <div class="banner-layer banner-layer-middle banner-layer-left">
          <div class="container-fluid">
            <div
              class="appear-animate"
              data-animation-name="fadeInLeftShorter"
              data-animation-delay="200"
              v-animate
            >
              <h2 class="font-weight-light ls-10 text-primary">
                Discover our Arrivals!
              </h2>
              <nuxt-link to="/shop" class="btn btn-link"
                ><i>View our Dresses</i><i class="icon-right-open-big"></i
              ></nuxt-link>
            </div>
          </div>
        </div> -->
      </div>
    </div>

    <div class="swiper-slide">
      <div class="home-slide-2 banner swiper-slide" style="margin: 0;">
        <img
          class="slide-bg"
          :src="'./images/home/slider/slide-2.png'"
          alt="slider image"
          height="575"
          style="width: 100%;"
        />

        <!-- <div class="banner-layer banner-layer-middle banner-layer-right w-100">
          <div class="container-fluid">
            <div
              class="col-6 offset-6 appear-animate"
              data-animation-name="fadeInRightShorter"
              data-animation-delay="200"
              v-animate
            >
              <h2 class="font-weight-light ls-10 text-primary">
                Trendy Collections!
              </h2>
              <nuxt-link to="/shop" class="btn btn-link"
                ><i>View our Specials</i><i class="icon-right-open-big"></i
              ></nuxt-link>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </pv-carousel>
</template>

<script>
import PvCarousel from "~/components/features/PvCarousel";
import { introSlider } from "~/utils/data/carousel";

export default {
  components: {
    PvCarousel,
  },
  data: function () {
    return {
      introSlider: introSlider,
    };
  },
};
</script>
