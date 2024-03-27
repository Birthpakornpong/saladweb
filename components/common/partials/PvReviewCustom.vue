<template>
  <main>
    <div
      style="display: flex; justify-content: center;"
      class="mb-2 mobil-margincate"
    >
      <div
        class="row main-content"
        v-if="reviews.length > 0"
        style="
          display: flex;
          justify-content: center;
          width: 100%;
          padding: 10px;
        "
      >
        <div class="category-section mb-2 col-12 mobil-margincate">
          <div class="header-text mobileText" style="">
            <div
              style="
                border-bottom: 1px solid rgba(207, 207, 207, 1);
                padding-bottom: 0.5em;
              "
            >
              Review
            </div>
          </div>
        </div>

        <div class="col-10 col-md-5 bgimgband">
          <div class="row">
            <div class="col-5 paddingmreview">
              <img
                style="width: 100%;"
                :src="reviews[0].product_review_link"
                alt="body shape"
                class="w-auto bg-transparent imgresize"
              />
            </div>
            <div class="col-7" style="padding: 3em; padding-top: 2em;">
              <p class="fontsizefull">
                {{ reviews[0].fullname_th }}
              </p>
              <div
                class="fontsizede"
                v-html="reviews[0].review_detail_th"
              ></div>
            </div>
          </div>

          <!-- <inner-image-zoom :src="'./review.png'" /> -->
        </div>
        <div
          class="col-10 col-md-5 bgimgband2"
          style="margin-left: 3em;"
          v-if="reviews.length > 1"
        >
          <div class="row">
            <div class="col-5 paddingmreview">
              <img
                style="width: 100%;"
                :src="reviews[1].product_review_link"
                alt="body shape"
                class="w-auto bg-transparent imgresize"
              />
            </div>
            <div class="col-7" style="padding: 3em; padding-top: 2em;">
              <p class="fontsizefull">
                {{ reviews[1].fullname_th }}
              </p>
              <div
                class="fontsizede"
                v-html="reviews[1].review_detail_th"
              ></div>
            </div>
          </div>

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
<style scoped>
.bgimgband {
  background-image: url("static/card1.png");
  padding-bottom: 5em;
  padding-top: 7em;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.bgimgband2 {
  background-image: url("static/card2.png");
  padding-bottom: 5em;
  padding-top: 7em;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.paddingmreview {
  padding-left: 3em;
  padding-bottom: 2em;
}
.mobileText {
  color: black;
  text-align: start;
  padding-left: 4em;
  padding-right: 4em;
}
.mobil-margincate {
}
.fontsizefull {
  font-size: 1.5em;
  font-weight: 900;
}
.fontsizede {
  font-size: 1.3em;
}
.imgresize {
}
@media only screen and (max-width: 600px) {
  .paddingmreview {
    padding-left: 1em;
    padding-bottom: 1em;
    display: flex;
    align-items: center;
  }
  .imgresize {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  .bgimgband {
    background-image: url("static/card1.png");
    padding-bottom: 2em;
    padding-top: 3em;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .bgimgband2 {
    background-image: url("static/card2.png");
    padding-bottom: 2em;
    padding-top: 3em;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-left: 0em !important;
  }
  .mobileText {
    padding: 0.5em !important;
  }
  .mobil-margincate {
    margin-bottom: 0rem !important;
    margin-top: 0rem;
  }
  .fontsizefull {
    font-size: 1.1em;
    font-weight: 900;
  }
  .fontsizede {
    font-size: 1em;
  }
}
</style>
