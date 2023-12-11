<template>
  <main>
    <div class="container">
      <div class="row main-content">
        <div class="col-12">
          <template v-if="!loaded">
            <div class="skeleton-body">
              <div class="post"></div>
              <div class="reply"></div>
            </div>
          </template>

          <template v-else>
            <pv-our-story :post="post" :ad-class="'zoom-effect'"></pv-our-story>

            <hr class="mt-2 mb-1" />
          </template>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Api, { baseUrl, currentDemo } from "~/api";
import PvBlogSidebar from "~/components/partials/page/PvBlogSidebar";
import PvPostTwo from "~/components/features/post/PvPostTwo";
import PvOurStory from "~/components/features/post/PvOurStory";
import PvRelatedPosts from "~/components/partials/page/PvRelatedPosts";
import { blogDesData } from "~/blogDesData.js";

export default {
  components: {
    PvBlogSidebar,
    PvPostTwo,
    PvRelatedPosts,
    PvOurStory,
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
  created: function () {
    this.getBlog();
  },
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
    getBlog: function () {
      this.loaded = false;

      this.post = blogDesData.post;
      this.recentPosts = blogDesData.recentPosts;
      this.blogCategoryList = blogDesData.blogCategoryList;
      this.relatedPosts = blogDesData.relatedPosts;

      this.post.blog_categories.map((item) => {
        this.blogCategory.push(item);
      });

      this.loaded = true;
    },
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
