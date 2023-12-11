<template>
  <article class="post single">
    <div class="header-textblack">
      <div>จุดเริ่มต้น... HOLIS by SCGP</div>
    </div>
    <figure
      class="post-media"
      :class="post.type === 'video' ? 'post-video' : ''"
    >
      <nuxt-link
        :to="`/pages/single/${post.slug}`"
        v-if="post.type === 'image'"
      >
        <img
          src="~/static/images/blog/blogmock.png"
          alt="blog"
          :width="post.small_picture[0].width"
          :height="post.small_picture[0].height"
          v-if="post.small_picture.length > 0"
        />
        <template v-else>
          <img
            src="~/static/images/blog/blogmock.png"
            alt="blog"
            :width="post.picture[0].width"
            :height="post.picture[0].height"
          />
        </template>
      </nuxt-link>

      <template v-else-if="post.type === 'video'">
        <img
          src="~/static/images/blog/blogmock.png"
          alt="blog"
          :width="post.picture[0].width"
          :height="post.picture[0].height"
        />
        <a
          href="https://www.youtube.com/watch?v=vBPgmASQ1A0"
          @click.prevent="openVideoModal"
          class="btn-video btn-iframe"
        >
          <i class="far fa-play-circle"></i>
        </a>
      </template>

      <template v-else>
        <pv-carousel
          class
          :options="baseSlider1"
          v-if="post.small_picture.length > 0"
        >
          <img
            v-for="(img, index) in post.small_picture"
            src="~/static/images/blog/blogmock.png"
            :key="'post-gallery' + index"
            :width="post.small_picture[0].width"
            :height="post.small_picture[0].height"
            class="swiper-slide"
            alt="post-gallery-image"
          />
        </pv-carousel>
        <template v-else>
          <pv-carousel class :options="baseSlider1">
            <img
              v-for="(img, index) in post.picture"
              src="~/static/images/blog/blogmock.png"
              :key="'post-gallery' + index"
              :width="post.picture[0].width"
              :height="post.picture[0].height"
              class="swiper-slide"
              alt="post-gallery-image"
            />
          </pv-carousel>
        </template>
      </template>
    </figure>
  </article>
</template>
<script>
import { baseUrl } from "~/api";
import { baseSlider1 } from "~/utils/data/carousel";
import PvCarousel from "~/components/features/PvCarousel";

export default {
  components: {
    PvCarousel,
  },
  props: {
    post: Object,
    isContent: {
      type: Boolean,
      default: true,
    },
    isAuthor: {
      type: Boolean,
      default: true,
    },
    isMeta: {
      type: Boolean,
      default: true,
    },
  },
  data: function () {
    return {
      baseUrl: baseUrl,
      baseSlider1: baseSlider1,
    };
  },
  computed: {
    date: function () {
      return new Date(this.post.date);
    },
  },
  methods: {
    openVideoModal: function () {
      this.$modal.show(
        () => import("~/components/features/modal/PvVideoModal"),
        {},
        {
          width: "880",
          height: "495",
          adaptive: true,
          class: "video-modal-container",
        }
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.header-textblack {
  text-align: center;
  font-weight: bold;
  font-size: x-large;
  color: black;
  position: relative;
  margin-bottom: 2rem;
}
</style>
