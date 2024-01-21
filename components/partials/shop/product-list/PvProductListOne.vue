<template>
  <div>
    <nav
      class="toolbox sticky-header mobile-sticky"
      data-start-top="750"
      data-offset-top="56"
      v-if="!products || (products && products.length > 0)"
      v-sticky
    >
      <div class="toolbox-left">
        <a
          href="javascript:;"
          class="sidebar-toggle"
          @click="showSidebarFilter"
        >
          <svg
            data-name="Layer 3"
            id="Layer_3"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="15" x2="26" y1="9" y2="9" class="cls-1" />
            <line x1="6" x2="9" y1="9" y2="9" class="cls-1" />
            <line x1="23" x2="26" y1="16" y2="16" class="cls-1" />
            <line x1="6" x2="17" y1="16" y2="16" class="cls-1" />
            <line x1="17" x2="26" y1="23" y2="23" class="cls-1" />
            <line x1="6" x2="11" y1="23" y2="23" class="cls-1" />
            <path
              d="M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z"
              class="cls-2"
            />
            <path
              d="M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z"
              class="cls-2"
            />
            <path d="M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z" class="cls-3" />
            <path
              d="M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z"
              class="cls-2"
            />
          </svg>
          <span>Filter</span>
        </a>

        <div class="toolbox-item toolbox-sort" v-if="!isOffCanvas">
          <label>Sort By:</label>

          <div class="select-custom">
            <select
              name="orderby"
              class="form-control"
              v-model="orderBy"
              @change="handlerGet"
            >
              <!-- <option value="default" selected="default"
                >Default sorting</option
              > -->
              <option value="0">ASC</option>
              <option value="1">DESC</option>
            </select>
          </div>
        </div>
      </div>

      <div class="toolbox-right">
        <div class="toolbox-item toolbox-sort" v-if="isOffCanvas">
          <label>Sort By:</label>

          <div class="select-custom">
            <select
              name="orderby"
              class="form-control"
              v-model="orderBy"
              @change="handlerGet"
            >
              <option value="0">ASC</option>
              <option value="1">DESC</option>
            </select>
          </div>
        </div>

        <div class="toolbox-item toolbox-show" v-if="totalCount > 0">
          <label>Show:</label>

          <div class="select-custom">
            <select
              name="count"
              class="form-control"
              @change="changePerPage"
              v-model="itemsPerPage"
            >
              <option :value="8">8</option>
              <option :value="12">12</option>
              <option :value="24">24</option>
              <option :value="36">36</option>
            </select>
          </div>
        </div>

        <div class="toolbox-item layout-modes">
          <nuxt-link
            :to="{ path: '/shop', query: $route.query }"
            class="layout-btn btn-grid"
            :class="{ active: type !== 'list' }"
            title="Grid"
          >
            <i class="icon-mode-grid"></i>
          </nuxt-link>
          <nuxt-link
            :to="{ path: '/shop/list', query: $route.query }"
            class="layout-btn btn-list"
            :class="{ active: type === 'list' }"
            title="List"
          >
            <i class="icon-mode-list"></i>
          </nuxt-link>
        </div>
      </div>
    </nav>

    <div class="row" :class="{ 'row-sm sm-padding': itemsPerRow > 6 }">
      <template v-if="products && products.length > 0">
        <div
          :class="gridCols[itemsPerRow]"
          v-for="(product, index) in products.slice(0, itemsPerPage)"
          :key="'shop-product' + index"
        >
          <template v-if="type !== 'list'">
            <pv-product-one
              :product="product"
              :is-actions="false"
              v-if="itemsPerRow > 6"
              key="gridType"
            ></pv-product-one>

            <pv-product-one
              :product="product"
              key="gridType"
              v-else
            ></pv-product-one>
          </template>

          <pv-product-two :product="product" v-else></pv-product-two>
        </div>
      </template>

      <template v-if="products && products.length === 0">
        <div class="info-box with-icon p-0 shop-info">
          <p>No products were found matching your selection.</p>
        </div>
      </template>

      <template v-if="!products">
        <div
          :class="gridCols[itemsPerRow]"
          v-for="(item, index) in repeatCount.slice(0, itemsPerPage)"
          :key="'skel-shop' + index"
        >
          <div
            class="skel-pro mb-2"
            v-if="type !== 'list'"
            key="normalSkel"
          ></div>
          <div class="skel-pro skel-pro-list mb-2" v-else></div>
        </div>
      </template>
    </div>

    <nav
      class="toolbox toolbox-pagination"
      v-if="products && products.length > 0"
    >
      <div class="toolbox-item toolbox-show mb-0">
        <label>Show:</label>

        <div class="select-custom">
          <select
            name="count"
            class="form-control"
            @change="changePerPage"
            v-model="itemsPerPage"
          >
            <option :value="8">8</option>
            <option :value="12">12</option>
            <option :value="24">24</option>
            <option :value="36">36</option>
          </select>
        </div>
      </div>

      <pv-pagination
        :total-count="totalCount"
        :items-per-page="itemsPerPage"
        v-if="totalCount"
      ></pv-pagination>
    </nav>

    <div
      class="sidebar-toggle custom-sidebar-toggle"
      @click="showSidebarFilter"
      v-if="products && products.length === 0"
    >
      <i class="fas fa-sliders-h"></i>
    </div>
  </div>
</template>

<script>
import PvProductOne from "~/components/features/product/PvProductOne";
import PvProductTwo from "~/components/features/product/PvProductTwo";
import PvPagination from "~/components/features/PvPagination";
import { scrollTopHandler } from "~/utils";
import axios from "axios";
import Api, { baseUrl } from "~/api";
import { shopData } from "~/shopData.js";

export default {
  components: {
    PvProductOne,
    PvProductTwo,
    PvPagination,
  },
  props: {
    itemsPerRow: {
      type: Number,
      default: 3,
    },
  },
  data: function () {
    return {
      products: [],
      repeatCount: new Array(100),
      orderBy: 0,
      itemsPerPage: 8,
      totalCount: 0,
      tempProduct: {
        id: 323,
        name: "Holis by SCGP อิม-มู แคป ชนิดซอฟต์เจล 10 เม็ด",
        slug: "baby-sport-shoes",
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
        product_brands: [],
        product_tags: [],
        large_pictures: [
          {
            width: "800",
            height: "800",
            url: "/uploads/product_16_1_27c032e0ec.jpg",
            pivot: { related_id: "323", upload_file_id: "1642" },
          },
          {
            width: "800",
            height: "800",
            url: "/uploads/product_16_2_7f9575405f.jpg",
            pivot: { related_id: "323", upload_file_id: "1644" },
          },
          {
            width: "800",
            height: "800",
            url: "/uploads/product_16_3_8050d5961f.jpg",
            pivot: { related_id: "323", upload_file_id: "1643" },
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
      type: {
        type: String,
        default: "grid",
      },
      isOffCanvas: {
        type: Boolean,
        default: false,
      },
      gridCols: {
        1: "col-12",
        3: "col-6 col-sm-4",
        4: "col-6 col-sm-4 col-md-3",
        5: "col-6 col-sm-4 col-md-3 col-xl-5col",
        6: "col-6 col-sm-4 col-md-3 col-xl-2",
        7: "col-6 col-sm-4 col-md-3 col-xl-7col",
        8: "col-6 col-sm-4 col-md-3 col-xl-8col",
      },
    };
  },
  watch: {
    $route: async function () {
      await this.handlerGet();
      this.itemsPerPage = this.$route.query["per_page"]
        ? parseInt(this.$route.query["per_page"])
        : 8;
      // this.getProducts();

      this.isOffCanvas = this.$route.path.includes("off-canvas") ? true : false;
      this.type = this.$route.path.includes("list") ? "list" : "grid";
    },
  },
  created: function () {
    this.itemsPerPage = this.$route.query["per_page"]
      ? parseInt(this.$route.query["per_page"])
      : 8;

    this.handlerGet();
    // this.getProducts(false);
    this.isOffCanvas = this.$route.path.includes("off-canvas") ? true : false;
    this.type = this.$route.path.includes("list") ? "list" : "grid";
  },
  methods: {
    getProducts: function (isScrll = true) {
      // this.products = null;
      // this.products = shopData.products;
      // this.totalCount = shopData.totalCount;
    },
    showSidebarFilter: function () {
      document.querySelector("body").classList.add("sidebar-opened");
    },
    changePerPage: function () {
      this.$router.push({
        ...this.$route,
        query: { ...this.$route.query, per_page: this.itemsPerPage, page: 1 },
      });
    },
    async handlerGet() {
      var optionAxios = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      let category =
        this.$router.currentRoute.query.category?.length > 0
          ? this.$router.currentRoute.query.category?.split(",")
          : [];
      let product =
        this.$router.currentRoute.query.product?.length > 0
          ? this.$router.currentRoute.query.product?.split(",")
          : [];
      console.log("rou", this.orderBy);
      let payload = {
        key: "",
        category_id: category || [],
        product_id: product || [],
        sort: this.orderBy,
        pageNumber: this.$router.currentRoute.query.page || 1,
        pageSize: this.itemsPerPage,
      };
      axios
        .post(`${baseUrl}/api/Home/product-list`, payload, optionAxios)
        .then((response) => {
          if (response.status == 200) {
            console.log("check", response);
            this.totalCount = response.data.totalCount;
            this.$forceUpdate();
            let productsData = response.data.data;
            this.products = [];
            productsData.forEach((item) => {
              this.products.push({
                ...this.tempProduct,
                name: item.product_name,
                imgUrl: item.productProfileLink,
                slug: item.id,
              });
            });

            console.log("this.products", this.totalCount);
          } else {
          }
        })
        .catch((error) => {});
    },
  },
};
</script>
