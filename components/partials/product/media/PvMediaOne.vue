<template>
  <div>
    <div class="product-slider-container">
      <PvCarousel
        ref="mediaRef"
        class="product-single-carousel show-nav-hover"
        :options="baseSlider1"
      >
        <div
          class="swiper-slide"
          v-for="item in product.large_pictures"
          :key="item.name"
        >
          <!-- <img
            class="product-single-image"
            src="~/static/images/imgmock1.png"
            :width="item.width"
            :height="item.height"
            alt="lgPicture"
          /> -->
          <inner-image-zoom :src="item.url" />
        </div>
      </PvCarousel>
    </div>

    <PvCarousel
      class="prod-thumbnail swiper-dots show-nav-hover"
      ref="thumbRef"
      :options="baseSlider2"
    >
      <div
        class="swiper-dot swiper-slide"
        v-for="(item, index) in product.pictures"
        :key="'media-one' + index"
        @click="activeThumbItem(index, $event)"
        :class="{ active: index === 0 }"
      >
        <img
          :src="item.url"
          :width="item.width"
          :height="item.height"
          alt="product-thumbnail"
        />
      </div>
    </PvCarousel>
    <light-box ref="lightBox" :media="lightBoxMedia" :show-light-box="false" />
  </div>
</template>

<script>
import PvCarousel from "~/components/features/PvCarousel";
import LightBox from "vue-image-lightbox";
import { baseUrl } from "~/api";
import { baseSlider1, baseSlider2 } from "~/utils/data/carousel";
import "vue-image-lightbox/dist/vue-image-lightbox.min.css";
import "vue-inner-image-zoom/lib/vue-inner-image-zoom.css";
import InnerImageZoom from "vue-inner-image-zoom";

export default {
  components: {
    PvCarousel,
    LightBox,
    InnerImageZoom,
  },
  props: {
    product: Object,
    isMagnify: {
      type: Boolean,
      default: true,
    },
  },
  data: function () {
    return {
      baseSlider1: baseSlider1,
      baseSlider2: baseSlider2,
      baseUrl: baseUrl,
    };
  },
  computed: {
    lightBoxMedia: function () {
      return this.product.large_pictures.reduce((acc, cur) => {
        return [
          ...acc,
          {
            src: `${baseUrl}${cur.url}`,
            thumb: `${baseUrl}${cur.url}`,
          },
        ];
      }, []);
    },
  },
  mounted: function () {
    if (this.product !== null) {
      this.$nextTick(() => {
        let self = this;
        this.$refs.mediaRef.swiper.on("transitionStart", function () {
          let activeIndex = self.$refs.mediaRef.swiper.activeIndex;
          self.$refs.thumbRef.swiper.slideTo(activeIndex);
          self.$refs.thumbRef.swiper.$el
            .find(".swiper-wrapper")
            .find(".swiper-dot.active")[0]
            .classList.remove("active");
          self.$refs.thumbRef.swiper.$el
            .find(".swiper-wrapper")
            .find(".swiper-dot")
            [activeIndex].classList.add("active");
        });
      });
    }
  },
  methods: {
    activeThumbItem: function (index, e) {
      // remove active class from previous active item
      e.currentTarget.parentNode
        .querySelector(".swiper-dot.active")
        .classList.remove("active");

      // active current selected item
      e.currentTarget.classList.add("active");

      // translate thumb carousel
      this.$refs.mediaRef.swiper.slideTo(index);
    },
    openLightBox: function () {
      this.$refs.lightBox.showImage(this.$refs.mediaRef.swiper.activeIndex);
    },
  },
};
</script>
