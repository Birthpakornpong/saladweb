<template>
  <main>
    <div class="container">
      <div class="row main-content" v-if="reviews.length > 0">
        <div class="category-section mb-4 col-12">
          <div class="header-text" style="color: black;">
            <div>Review</div>
          </div>
        </div>
        <div
          class="col-6"
          style="display: flex; justify-content: center;"
          v-for="(item, index) in reviews"
          :key="index"
        >
          <img
            style="width: 100%; height: 30em;"
            :src="item.product_review_link"
            alt="body shape"
            class="w-auto bg-transparent"
          />

          <!-- <inner-image-zoom :src="'./review.png'" /> -->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Api, { baseUrl, currentDemo } from "~/api";
import "vue-inner-image-zoom/lib/vue-inner-image-zoom.css";
import InnerImageZoom from "vue-inner-image-zoom";

export default {
  components: { InnerImageZoom },
  props: {
    reviews: Array,
  },
  data: function () {
    return {
      baseUrl: baseUrl,
      post: null,
      relatedPosts: null,
      recentPosts: null,
      blogCategory: [],
      blogCategoryList: null,
      isSidebar: false,
      loaded: false,
    };
  },
  created: function () {},
  mounted: function () {
    this.resizeHandler();
    window.addEventListener("resize", this.resizeHandler, {
      passive: true,
    });
  },
  destroyed: function () {
    window.removeEventListener("resize", this.resizeHandler);
  },
  methods: {
    toggleSidebar: function () {
      let body = document.querySelector("body");
      if (body.classList.contains("sidebar-opened")) {
        body.classList.remove("sidebar-opened");
      } else {
        body.classList.add("sidebar-opened");
      }
    },
    resizeHandler: function () {
      this.isSidebar = window.innerWidth > 991 ? false : true;
    },
  },
};
</script>
