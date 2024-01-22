<template>
  <article class="post">
    <figure
      class="post-media"
      :class="post.type === 'video' ? 'post-video' : ''"
    >
      <a
        :href="`https://www.scgpackaging.com/${post.urlRewrite}`"
        target="_blank"
        v-if="post.type === 'image'"
      >
        <img
          :src="post.thumbnailLink"
          alt="blog"
          :width="post.small_picture[0].width"
          style="height: 15em;"
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
      </a>

      <template v-else-if="post.type === 'video'">
        <a
          :href="`https://www.scgpackaging.com/${post.urlRewrite}`"
          target="_blank"
        >
          <img
            src="~/static/images/blog/blogmock.png"
            alt="blog"
            :width="post.picture[0].width"
            :height="post.picture[0].height"
          />
        </a>
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

      <div class="post-date">
        <span class="day">{{ date.getDate() + 1 }}</span>
        <span class="month">{{
          new Intl.DateTimeFormat("en-US", { month: "short" }).format(date)
        }}</span>
      </div>
    </figure>

    <div class="post-body">
      <h2 class="post-title">
        <a
          :href="`https://www.scgpackaging.com/${post.urlRewrite}`"
          target="_blank"
          >{{ post.title }}</a
        >
      </h2>

      <div class="post-content" v-if="isContent">
        <p>{{ post.content }}</p>
      </div>
      <!-- 
      <nuxt-link :to="'/pages/single/' + post.slug" class="post-comment"
        >{{ post.comments }} Comments</nuxt-link
      > -->
    </div>
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
