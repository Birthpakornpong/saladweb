<template>
  <main class="main">
    <div class="container main-content">
      <div class="row">
        <div class="col-12">
          <div class="blog-section row">
            <template v-if="!loaded">
              <div
                class="col-md-6 col-lg-4 skeleton-body"
                v-for="(i, index) in [1, 2, 3, 4, 5, 6]"
                :key="'skel' + index"
              >
                <div class="post"></div>
              </div>
            </template>

            <template v-else>
              <p class="blogs-info" v-if="posts.length === 0">
                No posts were found matching your selection.
              </p>

              <div
                v-for="(post, index) in posts"
                :key="index"
                class="col-md-6 col-lg-4"
              >
                <pv-post-one :post="post"></pv-post-one>
              </div>

              <nav
                class="toolbox toolbox-pagination w-100 mb-2"
                v-if="totalCount > 0"
              >
                <div class="toolbox-item toolbox-show mb-0">
                  <label>Show:</label>

                  <div class="select-custom">
                    <select
                      name="count"
                      class="form-control"
                      @change="handlerGet"
                      v-model="itemsPerPage"
                    >
                      <option :value="6">6</option>
                      <option :value="9">9</option>
                      <option :value="12">12</option>
                    </select>
                  </div>
                </div>

                <pv-pagination
                  :total-count="totalCount"
                  :items-per-page="itemsPerPage"
                  v-if="totalCount"
                ></pv-pagination>
              </nav>
            </template>
          </div>
        </div>

        <!-- <div
          class="custom-sidebar-toggle"
          @click="toggleSidebar"
          v-if="isSidebar"
        >
          <i class="fas fa-sliders-h"></i>
        </div>
        <div class="sidebar-overlay" @click="toggleSidebar"></div>

        <pv-blog-sidebar
          :blog-category-list="blogCategoryList"
          :recent-posts="recentPosts"
          :loaded="loaded"
        ></pv-blog-sidebar> -->
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import Api, { baseUrl } from "~/api";
import PvBlogSidebar from "~/components/partials/page/PvBlogSidebar";
import PvPostOne from "~/components/features/post/PvPostOne";
import PvPagination from "~/components/features/PvPagination";
import { scrollTopHandler } from "~/utils";
import { dataBlog } from "~/blogData.js";
export default {
  components: {
    PvBlogSidebar,
    PvPostOne,
    PvPagination,
  },
  watch: {
    $route: function () {
      this.getBlog();
      this.handlerGet();
    },
  },
  data: function () {
    return {
      posts: [],
      recentPosts: null,
      blogCategoryList: null,
      totalCount: 0,
      page: 1,
      itemsPerPage: 6,
      isSidebar: false,
      loaded: false,
      postTemp: {
        id: 1,
        author: "John Doe",
        comments: "0",
        content:
          "SCGP ผสานความร่วมมือมหาวิทยาลัยศรีนครินทรวิโรฒ วิจัยโพรไบโอติก 3 สายพันธุ์พิเศษที่มีคุณสมบัติโดดเด่น",
        date: "2021-04-07",
        slug: "post-format-image-type",
        title:
          "SCGP ผสานความร่วมมือมหาวิทยาลัยศรีนครินทรวิโรฒ วิจัยโพรไบโอติก 3 สายพันธุ์พิเศษที่มีคุณสมบัติโดดเด่น",
        type: "image",
        blog_categories: [
          {
            Name: "News",
            slug: "news",
            pivot: { blog_id: "1", "blog-category_id": "1" },
          },
          {
            Name: "Model",
            slug: "model",
            pivot: { blog_id: "1", "blog-category_id": "2" },
          },
        ],
        video: null,
        picture: [
          {
            width: "1280",
            height: "500",
            url: "/uploads/post_1_29b9758e1b.jpg",
            pivot: { related_id: "1", upload_file_id: "40" },
          },
        ],
        small_picture: [
          {
            width: "450",
            height: "230",
            url: "/uploads/post_1_450x230_e8ab17ad7f.jpg",
            pivot: { related_id: "1", upload_file_id: "41" },
          },
        ],
      },
    };
  },
  created: function () {
    this.getBlog(false);
    this.handlerGet();
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
    getBlog: function (isScroll = true) {
      this.loaded = false;

      // this.posts = dataBlog.posts;
      this.recentPosts = dataBlog.recentPosts;
      this.blogCategoryList = dataBlog.blogCategoryList;
      // this.totalCount = dataBlog.totalCount;

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
    async handlerGet() {
      var optionAxios = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      let payload = {
        key: "",
        category_id: [],
        product_id: [],
        sort: 0,
        pageNumber: this.$route.query.page ? this.$route.query.page : 1,
        pageSize: this.itemsPerPage,
        lang: "th",
      };
      axios
        .post(`${baseUrl}/api/Home/get-news-all`, payload, optionAxios)
        .then((response) => {
          if (response.status == 200) {
            this.posts = [];
            this.totalCount = response.data.totalCount;
            // console.log("check", this.products);
            response.data.data.forEach((item) => {
              this.posts.push({
                ...this.postTemp,
                id: item.mainId,
                content: item.attachmentAlt,
                date: item.contentDatetimeFull,
                title: item.attachmentTitle,
                thumbnailLink: item.thumbnailLink,
              });
            });
          } else {
          }
        })
        .catch((error) => {});
    },
  },
};
</script>
