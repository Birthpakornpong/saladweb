<template>
  <main class="main home-page" style="font-family: 'SCG' !important;">
    <section
      class="intro-section mb-3"
      data-animation-name="fadeInUpShorter"
      data-animation-delay="400"
      v-animate
    >
      <pv-intro-section :introIMG="introIMG"></pv-intro-section>
    </section>
    <div style="height: 100vh;" v-if="introIMG.length == 0"></div>
    <div
      class="bg-cusve"
      data-animation-name="fadeInUpShorter"
      data-animation-delay="400"
      v-animate
    >
      <div class="header-text mb-3" v-if="video.length > 0">
        <div>{{ video[0].headText }}</div>
      </div>
      <div ref="videoPlayerstest" style="display: none;"></div>

      <div
        v-if="video.length > 0 && positionContent == 'center'"
        data-animation-name="fadeInUpShorter"
        data-animation-delay="1500"
        v-animate
      >
        <div class="row" style="justify-content: center; display: flex;">
          <div
            class="d-flex col-12 col-lg-3 col-md-12 hidemobile"
            style="justify-content: end; display: flex; padding: 1em;"
          >
            <div>
              <img
                :src="video[0].imgLeft"
                style="max-height: 33em; max-width: 100%;"
              />
            </div>
          </div>
          <!-- <div class="col-3" style="justify-content: end; display: flex;"> -->

          <!-- <div>
            <div class="d-flex mr-1" style="justify-content: end;">
              <h3 class="text-headicon mr-3 mt-1">
                วิตามิน A
              </h3>
              <div class="icon-border">
                <div
                  style="
                    background-color: rgba(87, 29, 40, 1);
                    font-size: 1.5em;
                    border-radius: 50%;
                    height: 2em;
                    width: 2em;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    border: 1px dotted white;
                  "
                >
                  A
                </div>
              </div>
            </div>

            <p class="textcus-left">
              เพิ่มเม็ดเลือดขาว
            </p>
            <p class="textcus-left">
              เสริมภูมิต้านทาน
            </p>
            <p class="textcus-left">
              ต่อการติดเชื้อในทางเดินหายใจ
            </p>
          </div> -->
          <!-- </div> -->
          <div
            class="col-11 d-flex col-lg-6 col-md-12 padding-move"
            style="display: flex; justify-content: center; align-items: center;"
          >
            <video
              v-show="variable"
              ref="videoPlayers"
              muted
              controls
              playsinline
              autoplay
              style="max-width: 100%; width: 100%;"
            >
              <source :src="video[0].url" type="video/mp4" />
            </video>
            <video
              v-show="!variable"
              ref="videoPlayers"
              muted
              controls
              style="max-width: 100%; width: 100%;"
            >
              <source :src="video[0].url" type="video/mp4" />
            </video>
          </div>
          <div
            class="d-flex col-6 col-lg-3 col-md-6 showmobile"
            style="justify-content: end;"
          >
            <div>
              <img
                :src="video[0].imgLeft"
                style="max-height: 33em; max-width: 100%;"
              />
            </div>
          </div>
          <div
            class="col-6 d-flex col-lg-3 col-md-6 showmobilele"
            style="display: flex; justify-content: start;"
          >
            <div>
              <img
                :src="video[0].imgRight"
                style="max-height: 33em; max-width: 100%;"
              />
            </div>
          </div>
          <!-- <div class="col-3">
          <img :src="video[0].imgRight" style="height: 33em;" /> -->
          <!-- <div class="d-flex ml-2">
            <div class="icon-border">
              <div
                style="
                  background-color: rgba(87, 29, 40, 1);
                  font-size: 1.5em;
                  border-radius: 50%;
                  height: 2em;
                  width: 2em;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  color: white;
                  border: 1px dotted white;
                "
              >
                A
              </div>
            </div>
            <h3 class="ml-3 text-headicon mt-1">
              วิตามิน A
            </h3>
          </div>

          <p class="textcus-right">
            เพิ่มเม็ดเลือดขาว
          </p>
          <p class="textcus-right">
            เสริมภูมิต้านทาน
          </p>
          <p class="textcus-right">
            ต่อการติดเชื้อในทางเดินหายใจ
          </p>-->
          <!-- </div> -->
        </div>
      </div>
      <!-- && positionContent == 'left' -->
      <div
        v-if="video.length > 0 && positionContent == 'left'"
        data-animation-name="fadeInUpShorter"
        data-animation-delay="1500"
        v-animate
      >
        <div class="row" style="justify-content: center; display: flex;">
          <div
            class="col-8 col-md-6"
            style="justify-content: end; display: flex;"
          >
            <video
              v-show="variable"
              ref="videoPlayers"
              muted
              controls
              playsinline
              autoplay
              style="max-width: 100%; width: 100%;"
            >
              <source :src="video[0].url" type="video/mp4" />
            </video>
            <video
              v-show="!variable"
              ref="videoPlayers"
              muted
              controls
              style="max-width: 100%; width: 100%;"
            >
              <source :src="video[0].url" type="video/mp4" />
            </video>
          </div>
          <div class="col-3 p-0">
            <img
              :src="video[0].imgRight"
              style="max-height: 33em; max-width: 100%;"
            />
          </div>
        </div>
      </div>
      <!-- && positionContent == 'right' -->
      <div
        v-if="video.length > 0 && positionContent == 'right'"
        data-animation-name="fadeInUpShorter"
        data-animation-delay="1500"
        v-animate
      >
        <div class="row" style="justify-content: center; display: flex;">
          <div class="col-3 col-md-3 p-0">
            <img
              :src="video[0].imgLeft"
              style="max-height: 33em; max-width: 100%;"
            />
          </div>
          <div class="col-8 col-md-6">
            <video
              v-show="variable"
              ref="videoPlayers"
              muted
              playsinline
              autoplay
              style="max-width: 100%; width: 100%;"
            >
              <source :src="video[0].url" type="video/mp4" />
            </video>
            <video
              v-show="!variable"
              ref="videoPlayers"
              muted
              controls
              style="max-width: 100%; width: 100%;"
            >
              <source :src="video[0].url" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-cus">
      <div
        data-animation-delay="1000"
        ref="categorySection"
        v-animate:fadeInLeftShorter="isAnimated"
      >
        <pv-category-section :products="products"></pv-category-section>
      </div>
    </div>
    <div style="height: 30vh;" v-if="products == 0"></div>
    <!-- <pv-best-collection :products="products"></pv-best-collection> -->

    <pv-brand-section
      :categorys="categorys"
      data-animation-name="fadeInRightShorter"
      data-animation-delay="1000"
      v-animate
    ></pv-brand-section>

    <!-- <pv-banner-section></pv-banner-section> -->
  </main>
</template>

<script>
import PvIntroSection from "~/components/partials/home/PvIntroSection";
import PvCategorySection from "~/components/partials/home/PvCategorySection";
import PvBannerSection from "~/components/partials/home/PvBannerSection";
import PvBestCollection from "~/components/partials/home/PvBestCollection";
import PvBrandSection from "~/components/partials/home/PvBrandSection";
import { indexData } from "~/indexData.js";

import {
  getProductsByAttri,
  getTopSellingProducts,
  getTopRatedProducts,
} from "~/utils/service";
import { getCookie } from "~/utils";
import axios from "axios";
import Api, { baseUrl } from "~/api";

export default {
  components: {
    PvIntroSection,
    PvCategorySection,
    PvBannerSection,
    PvBestCollection,
    PvBrandSection,
  },
  data: function () {
    return {
      isAnimated: false,
      animationName: "",
      showCate: false,
      variable: false,
      elementVideo: null,
      positionContent: "center",
      products: [],
      productsData: [],
      posts: [],
      featuredProducts: [],
      newProducts: [],
      bestProducts: [],
      topRatedProducts: [],
      timerId: 0,
      categorys: [],
      video: [],
      introIMG: [],
      tempProduct: {
        id: 0,
        name: "Baby Sport Shoes",
        slug: "baby-sport-shoes",
        imgUrl: "",
        price: 96,
        sku: "654613612-1-1-1",
        stock: 50,
        short_description:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        sale_price: 68,
        sale_count: 0,
        ratings: 0,
        reviews: "0",
        is_hot: null,
        is_sale: true,
        is_new: null,
        is_out_of_stock: null,
        release_date: null,
        developer: null,
        publisher: null,
        game_mode: null,
        rated: null,
        until: null,
        product_categories: [
          {
            name: "Babies",
            slug: "babies",
            parent_name: null,
            disabled: true,
            pivot: { product_id: "323", "product-category_id": "50" },
          },
        ],
        large_pictures: [
          {
            width: "800",
            height: "800",
            url: "~/static/images/imgmock1.png",
            pivot: { related_id: "323", upload_file_id: "1642" },
          },
        ],
        small_pictures: [
          {
            width: "150",
            height: "150",
            url: "/uploads/product_16_1_150x150_847ceac2f2.jpg",
            pivot: { related_id: "323", upload_file_id: "1646" },
          },
          {
            width: "150",
            height: "150",
            url: "/uploads/product_16_2_150x150_42c25a276a.jpg",
            pivot: { related_id: "323", upload_file_id: "1645" },
          },
        ],
        variants: [],
      },
    };
  },

  destroyed() {},
  mounted: function () {
    this.handlerGet();
    // this.products = indexData.products;
    this.posts = indexData.posts;
    this.featuredProducts = getProductsByAttri(indexData.products);
    this.newProducts = getProductsByAttri(indexData.products, "is_new");
    this.bestProducts = getTopSellingProducts(indexData.products);
    this.topRatedProducts = getTopRatedProducts(indexData.products);

    var videos = document.querySelector("video");
    console.log("check", videos);
    // this.timerId = setTimeout( () => {
    // 	if (
    // 		this.$route.path === '/' &&
    // 		getCookie( 'newsletter' ) !== 'false'
    // 	) {
    // 		this.$modal.show(
    // 			() =>
    // 				import( '~/components/features/modal/PvNewsletterModal' ),
    // 			{},
    // 			{ width: '740', height: 'auto', adaptive: true, class: 'newsletter-modal' }
    // 		);
    // 	}
    // }, 10000 );
    let observer = new IntersectionObserver(
      (entries, observer) => {
        console.log("pass", this.$refs.videoPlayers);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.variable = true;
            this.$nextTick(() => {
              // this.$refs.videoPlayerstest.play().catch((e) => {
              //   console.error("Error playing video:", e);
              // // });
              // videos.click();
              this.variable = true;
              this.$forceUpdate();
            });
          } else {
            this.variable = false;
            // this.$refs.videoPlayerstest.pause();
          }
        });
      },
      { threshold: 0.5 }
    ); // threshold คือเปอร์เซ็นต์ขององค์ประกอบที่ต้องปรากฏในหน้าจอ

    let observerCate = new IntersectionObserver(
      (entries, observer) => {
        console.log("pass check");
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("entry", entry);
            this.showCate = true;
            this.$nextTick(() => {
              // this.animationName = "fadeInLeftShorter";
              this.showCate = true;

              const animationNames = "fadeInLeftShorter";

              this.$refs.categorySection.classList.add(
                "animated",
                animationNames
              );

              // window.addEventListener("scroll", this.handleScroll());
            });

            // this.animationName = "fadeInLeftShorter";
            this.$forceUpdate();
          } else {
          }
        });
      },
      { threshold: 0.5 }
    ); // threshold คือเปอร์เซ็นต์ขององค์ประกอบที่ต้องปรากฏในหน้าจอ
    const observerCateTwo = new IntersectionObserver(this.handleIntersection, {
      threshold: 0.5, // Adjust threshold as needed
    });
    if (this.$refs.videoPlayerstest) {
      observer.observe(this.$refs.videoPlayerstest);
    }
    if (this.$refs.categorySection) {
      console.log("this.$refs.categorySection", this.$refs.categorySection);
      // observerCate.observe(this.$refs.categorySection);
      observerCateTwo.observe(this.$refs.categorySection);
    }
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const rect = this.$refs.categorySection.getBoundingClientRect();
          const top = rect.top;
          const windowHeight = window.innerHeight;
          console.log("work addrect", rect);
          console.log("window.innerHeight", window.innerHeight);
          if (top < windowHeight) {
            console.log("work add");
            this.isAnimated = true;
            this.products = this.productsData;
            this.$refs.categorySection.classList.add("fadeInLeftShorter");
          }
          // console.log("work add");
          // this.isAnimated = true;
          // entry.target.classList.add("fadeInLeftShorter");
          // this.products = this.productsData;
        }
      });
      this.$forceUpdate();
    },

    async handlerGet() {
      var optionAxios = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      axios
        .get(`${baseUrl}/api/Home/get-home`, optionAxios)
        .then((response) => {
          if (response.status == 200) {
            response.data.productBestSellerList.forEach((item) => {
              this.productsData.push({
                ...this.tempProduct,
                name: item.product_name,
                imgUrl: item.productProfileLink,
                slug: item.id,
              });
            });
            response.data.bannerList.forEach((item) => {
              this.introIMG.push({
                ...item,
                url: item.link_file_upload,
              });
            });
            response.data.productVideoList.forEach((item) => {
              this.video.push({
                ...item,
                url: item.link_file_upload,
                headText: item.media_main_title_eng,
                imgLeft: item.link_image_left_th,
                imgRight: item.link_image_right_th,
              });
            });
            response.data.productCategory.forEach((item) => {
              this.categorys.push({
                id: item.id,
                categoryName: item.category_name,
                categoryLink: item.category_link,
                categoryTH: item.category_name_th,
              });
            });
            // console.log("check", this.products);
          } else {
          }
        })
        .catch((error) => {});
    },
  },
  watch: {},
  destroyed: function () {
    clearTimeout(this.timerId);
  },
};
</script>
<style lang="css" scoped>
.header-text {
  text-align: center;
  font-weight: bold;
  font-size: 2.5em;
  color: #ab0011;
  position: relative;
  font-family: "SCG";
}
.padding-move {
}
@media only screen and (max-width: 600px) {
  .header-text {
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
    color: #ab0011;
    position: relative;
    font-family: "SCG";
  }
  .padding-move {
    padding: 1rem !important;
    padding-top: 0rem !important;
  }
}
.text-headicon {
  color: rgba(172, 43, 43, 1);
  font-weight: 900;
  border-bottom: 1px solid rgba(135, 135, 135, 0.2);
}
.icon-border {
  background-color: rgba(255, 46, 107, 1);
  border-radius: 50%;
  height: 3.2em;
  width: 3.2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.textcus-left {
  font-size: 1.3em;
  justify-content: flex-end;
  display: flex;
  padding-right: 2em;
}
.textcus-right {
  font-size: 1.3em;
  justify-content: flex-start;
  display: flex;
  padding-left: 2em;
}

.hidemobile {
  display: flex;
}

@media only screen and (max-width: 600px) {
  .hidemobile {
    display: none !important;
  }
}

.showmobile {
  display: none !important;
}

.showmobilele {
  padding: 1em;
}

@media only screen and (max-width: 600px) {
  .showmobilele {
    display: flex !important;
    padding: 1em;
  }
}
.showmobile {
  display: none !important;
}

@media only screen and (max-width: 600px) {
  .showmobile {
    display: flex !important;
    padding: 1em;
  }
}
.bg-cusve {
  background: linear-gradient(
    360deg,
    rgba(209, 209, 209, 1),
    rgba(255, 255, 255, 1)
  ) !important;
}
.bg-cus {
  background: linear-gradient(
    -180deg,
    rgba(209, 209, 209, 1),
    rgba(255, 255, 255, 1)
  ) !important;
}
.animated {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.fadeIn {
  opacity: 1;
}

@keyframes fadeInLeftShorter {
  from {
    opacity: 0;
    transform: translate(50px, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInLeftShorter {
  animation-timing-function: ease-out;
  animation-name: fadeInLeftShorter;
}
</style>
