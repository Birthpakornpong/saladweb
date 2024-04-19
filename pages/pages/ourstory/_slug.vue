<template>
  <main>
    <!-- <img src="~/static/our.png" /> -->
    <!-- <img src="~/static/Our-Story 20240318.png" /> -->
    <img
      src="~/static/ourstory/banner.jpg"
      data-animation-name="fadeInUpShorter"
      data-animation-delay="1500"
      v-animate
    />
    <div>
      <div
        class="row"
        data-animation-name="fadeInUpShorter"
        data-animation-delay="1500"
        v-animate
      >
        <div class="col-12 paddingImg">
          <img src="~/static/ourstory/t1line.png" />
        </div>
      </div>
      <div
        class="row"
        style="justify-content: center;"
        data-animation-name="fadeInUpShorter"
        data-animation-delay="1500"
        v-animate
      >
        <div class="col-8 col-sm-6 paddingImg2 mb-3">
          <img src="~/static/ourstory/td1.png" />
        </div>
        <div class="col-7 col-sm-5 paddingImg3 mb-3">
          <img src="~/static/ourstory/t2.png" />
        </div>
      </div>
    </div>
    <div
      class="row"
      style="justify-content: center;"
      data-animation-name="fadeInUpShorter"
      data-animation-delay="1500"
      v-animate
    >
      <div class="col-10 col-sm-8">
        <img src="~/static/ourstory/t3.png" />
      </div>
      <div class="col-10 col-sm-8">
        <img src="~/static/ourstory/t4.png" />
      </div>
    </div>
    <div
      class="row paddingImg4 mt-4"
      data-animation-name="fadeInUpShorter"
      data-animation-delay="1500"
      v-animate
    >
      <div class="col-12 col-sm-8">
        <img src="~/static/ourstory/t5.png" />
      </div>
      <div class="col-10 col-sm-7 mt-3">
        <img src="~/static/ourstory/t7.png" />
      </div>
      <div class="col-2 showmobile mt-3"></div>
      <div class="col-7 col-sm-5 mt-3">
        <img src="~/static/ourstory/dt7.png" />
      </div>
    </div>

    <div
      data-animation-name="fadeInUpShorter"
      data-animation-delay="1500"
      v-animate
    >
      <div class="d-flex" style="justify-content: center;">
        <img class="heightimg" src="~/static/ourstory/d.png" />
      </div>
      <div class="row" style="justify-content: center;">
        <div class="col-9 col-sm-5">
          <img src="~/static/ourstory/d1text.png" />
        </div>
      </div>
      <div class="row marginmobile">
        <div class="col-10 col-sm-6 padding-holis">
          <img src="~/static/ourstory/t8.png" />
        </div>
      </div>
      <div class="row mt-3 mb-5" style="justify-content: center;">
        <div class="col-12 col-sm-10">
          <img src="~/static/ourstory/product.jpg" />
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
<style scoped>
.paddingImg {
  padding: 6% 9%;
}
.paddingImg2 {
  padding: 0% 0% 0% 6%;
}
.paddingImg3 {
  padding: 0% 2%;
}
.paddingImg4 {
  padding: 4% 7%;
  justify-content: start;
}
.padding-holis {
}
.heightimg {
  height: 400px;
}
.marginmobile {
  justify-content: center;
  margin-top: 10rem !important;
}
.showmobile {
  display: none;
}

@media only screen and (max-width: 600px) {
  .showmobile {
    display: flex !important;
  }
}
@media only screen and (max-width: 600px) {
  .heightimg {
    height: 130px;
    padding: 10px 50px 10px 50px;
    object-fit: cover;
  }
  .marginmobile {
    justify-content: center;
    margin-top: 3rem !important;
  }
  .paddingImg2 {
    padding: 0% 0% 0% 0%;
  }
  .paddingImg4 {
    padding: 4% 7%;
    justify-content: center;
  }
}
</style>
