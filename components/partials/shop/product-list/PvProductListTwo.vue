<template>
  <div>
    <div class="row">
      <template v-if="products && products.length > 0">
        <div
          class="col-6 col-sm-4 col-md-3"
          v-for="(product, index) in products"
          :key="'shop-product' + index"
        >
          <pv-product-one :product="product"></pv-product-one>
        </div>
      </template>

      <template v-if="products && products.length === 0">
        <div class="info-box with-icon p-0 shop-info mb-2">
          <p>No products were found matching your selection.</p>
        </div>
      </template>

      <template v-if="!products">
        <div
          class="col-6 col-sm-4 col-md-3"
          v-for="(item, index) in repeatCount.slice(0, 12)"
          :key="'skel-shop' + index"
        >
          <div class="skel-pro"></div>
        </div>
      </template>
    </div>

    <!-- <nav class="toolbox toolbox-pagination">
      <div class="toolbox-item toolbox-show mb-0">
        <label>Show:</label>

        <div class="select-custom">
          <select
            name="count"
            class="form-control"
            @change="handlerGet"
            v-model="itemsPerPage"
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
          </select>
        </div>
      </div>

      <pv-pagination
        :total-count="totalCount"
        :items-per-page="itemsPerPage"
        v-if="totalCount"
      ></pv-pagination>
    </nav> -->
  </div>
</template>

<script>
import PvProductOne from "~/components/features/product/PvProductOne";
import PvPagination from "~/components/features/PvPagination";
import PvSidebarFilterTwo from "~/components/partials/shop/sidebar-filter/PvSidebarFilterTwo";
import { scrollTopHandler } from "~/utils";
import axios from "axios";
import Api, { baseUrl } from "~/api";
import { recomData } from "~/recomData.js";

export default {
  components: {
    PvProductOne,
    PvPagination,
    PvSidebarFilterTwo,
  },
  data: function () {
    return {
      products: [],
      repeatCount: new Array(100),
      orderBy: "default",
      itemsPerPage: 12,
      totalCount: null,
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
    };
  },
  watch: {
    $route: function () {
      // this.getProducts();
    },
  },
  created: function () {
    // this.getProducts(false);
    this.handlerGet();
  },
  methods: {
    getProducts: function (isScroll = true) {
      this.products = recomData.products;
      this.totalCount = recomData.totalCount;
    },
    colorFilterRoute: function (item) {
      let selectedColors = this.$route.query.color
        ? this.$route.query.color.split(",")
        : [];
      let index = selectedColors.indexOf(item.name);
      if (index > -1) {
        selectedColors.splice(index, 1);
      } else {
        selectedColors.push(item.name);
      }

      return {
        path: this.$route.path,
        query: {
          ...this.$route.query,
          color: selectedColors.toString(),
        },
      };
    },
    sizeFilterRoute: function (item) {
      let selectedSizes = this.$route.query.size
        ? this.$route.query.size.split(",")
        : [];
      let index = selectedSizes.indexOf(item.size);
      if (index > -1) {
        selectedSizes.splice(index, 1);
      } else {
        selectedSizes.push(item.size);
      }

      return {
        path: this.$route.path,
        query: { ...this.$route.query, size: selectedSizes.toString() },
      };
    },
    isActivedColor: function (item) {
      return (
        this.$route.query.color &&
        this.$route.query.color.split(",").includes(item.name)
      );
    },
    isActivedSize: function (item) {
      return (
        this.$route.query.size &&
        this.$route.query.size.split(",").includes(item.size)
      );
    },
    toggleSidebar: function () {
      let body = document.querySelector("body");
      if (body.classList.contains("sidebar-opened")) {
        body.classList.remove("sidebar-opened");
      } else {
        body.classList.add("sidebar-opened");
      }
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
      console.log("this.", this.products);
      let payload = {
        key: "",
        category_id: [],
        product_id: [],
        sort: 0,
        pageNumber: 1,
        pageSize: 8,
      };
      axios
        .post(
          `${baseUrl}/api/Home/get-product-recommended`,
          payload,
          optionAxios
        )
        .then((response) => {
          if (response.status == 200) {
            this.products = [];
            response.data.forEach((item) => {
              this.products.push({
                ...this.tempProduct,
                name: item.product_name,
                imgUrl: item.productProfileLink,
                slug: item.id,
              });
            });

            // this.totalCount = response.data.length;
          } else {
          }
        })
        .catch((error) => {});
    },
  },
};
</script>
