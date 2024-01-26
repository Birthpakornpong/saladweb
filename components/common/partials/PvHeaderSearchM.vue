<template>
  <!-- <div
    class="header-search header-search-popup header-search-category text-right"
    @click.stop="toggleSearchForm($event)"
  >
    <a
      href="javascript:;"
      class="search-toggle"
      role="button"
      @click.stop="toggleSearchForm($event)"
    >
      <i class="icon-magnifier mr-2"></i><span>Search</span>
    </a> -->

  <form
    action="#"
    method="get"
    @submit.prevent="submitSearchForm"
    class="mb-0 mt-1"
  >
    <div style="position: unset;">
      <label for="search_term" class="sr-only">ค้นหา</label>
      <input
        type="text"
        class="form-control mb-0"
        name="search_term"
        id="search_term"
        placeholder="ค้นหา"
        required
        v-model="search_term"
        @input="searchProducts"
        style="width: 20em;"
      />

      <button
        style="border: 1px solid #dfdfdf;"
        class="btn icon-magnifier px-4"
        title="search"
        type="submit"
      ></button>

      <div class="live-search-list">
        <div
          class="search-suggests"
          v-if="suggestions.length > 0"
          style="width: 23em; border-radius: 10px; left: 1em; top: 6em;"
        >
          <nuxt-link
            :to="product.imgUrl ? '/product/default/' + product.slug : '/shop'"
            class="search-suggest"
            data-index="0"
            v-for="product in suggestions"
            :key="product.id"
          >
            <div class="search-media">
              <img
                v-if="product.imgUrl"
                :src="product.imgUrl"
                alt="Product"
                width="40"
                height="40"
                class="product-image"
              />

              <div
                class="search-name"
                v-html="emphasizeMatchWord(product.name)"
              ></div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </form>
  <!-- </div> -->
  <!-- <div>
    <form
      class="search-wrapper mb-0 d-flex"
      action="#"
      @submit.prevent="submitSearchForm"
    >
      <input
        type="text"
        class="form-control mb-0"
        placeholder="Search..."
        required
        v-model="search_term"
      />
      <button
        class="btn icon-search text-black bg-transparent p-0"
        type="submit"
      ></button>
    </form>
  </div> -->
</template>
<script>
import { mapGetters } from "vuex";
import axios from "axios";
import Api, { baseUrl, currentDemo } from "~/api";

export default {
  data: function () {
    return {
      search_term: "",
      suggestions: [],
      timeouts: [],
      baseUrl: baseUrl,
      currentDemo: currentDemo,
      searchCategory: "",
      searchTemp: {
        id: 323,
        name: "Baby Sport Shoes",
        slug: "baby-sport-shoes",
        short_description:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        price: 96,
        sale_price: 68,
        sku: "654613612-1-1-1",
        stock: 50,
        ratings: 0,
        reviews: "0",
        sale_count: 0,
        is_hot: null,
        is_new: null,
        demoes: "demo23",
        is_sale: true,
        until: null,
        is_out_of_stock: null,
        release_date: null,
        developer: null,
        publisher: null,
        game_mode: null,
        rated: null,
        created_by: "1",
        updated_by: "1",
        created_at: "2000-09-29T08:32:18.000000Z",
        updated_at: "2000-10-29T02:49:16.000000Z",
        product_categories: [
          {
            name: "Babies",
            slug: "babies",
            parent_name: null,
            disabled: true,
            pivot: {
              product_id: "323",
              "product-category_id": "50",
            },
          },
        ],
        small_pictures: [
          {
            width: "150",
            height: "150",
            url: "\/uploads\/product_16_1_150x150_847ceac2f2.jpg",
            pivot: {
              related_id: "323",
              upload_file_id: "1646",
            },
          },
          {
            width: "150",
            height: "150",
            url: "\/uploads\/product_16_2_150x150_42c25a276a.jpg",
            pivot: {
              related_id: "323",
              upload_file_id: "1645",
            },
          },
        ],
        variants: [],
      },
    };
  },
  mounted: function () {
    document
      .querySelector("body")
      .addEventListener("click", this.closeSearchForm);
  },
  watch: {
    $route: async function () {
      this.suggestions = [];
      this.search_term = "";
    },
  },
  methods: {
    searchProducts: function () {
      if (this.search_term.length > 2) {
        var search_term = this.search_term;
        this.timeouts.map((timeout) => {
          window.clearTimeout(timeout);
        });
        this.timeouts.push(
          setTimeout(() => {
            // Api.get(`${baseUrl}/search`, {
            //   params: {
            //     search_term: search_term,
            //     demo: this.currentDemo,
            //     category: this.searchCategory,
            //   },
            // })
            //   .then((response) => {})
            //   .catch((error) => {});
            var optionAxios = {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            };

            let payload = {
              key: this.search_term,
              category_id: [],
              product_id: [],
              sort: 0,
              pageNumber: 1,
              pageSize: 10,
            };
            axios
              .post(`${baseUrl}/api/Home/product-list`, payload, optionAxios)
              .then((response) => {
                if (response.status == 200) {
                  let productsData = response.data.data;
                  this.products = [];
                  this.suggestions = [];
                  if (productsData.length > 0) {
                    productsData.forEach((item) => {
                      this.suggestions.push({
                        ...this.searchTemp,
                        name: item.product_name,
                        imgUrl: item.productProfileLink,
                        slug: item.id,
                      });
                    });
                  } else {
                    this.suggestions.push({
                      ...this.searchTemp,
                      name: "ไม่พบสินค้าที่ค้นหา",
                      imgUrl: "",
                      slug: "",
                    });
                  }

                  // this.$forceUpdate();
                } else {
                }
              })
              .catch((error) => {});
          }, 500)
        );
      } else {
        this.timeouts.map((timeout) => {
          window.clearTimeout(timeout);
        });
        this.suggestions = [];
      }
    },
    emphasizeMatchWord: function (name) {
      var regExp = new RegExp(this.search_term, "i");
      return name.replace(regExp, (match) => "<strong>" + match + "</strong>");
    },
    goShopPage: function () {
      this.search_term = "";
      this.suggestions = [];
    },
    searchToggle: function (e) {
      document.querySelector(".header-search").classList.toggle("show");
      e.stopPropagation();
    },
    toggleSearchForm: function (e) {
      e.currentTarget.closest(".header-search").classList.toggle("show");
    },
    showSearchForm: function (e) {
      e.currentTarget.closest(".header-search").classList.add("show");
    },
    closeSearchForm: function (e) {
      document.querySelector(".header .header-search").classList.remove("show");
    },
    submitSearchForm: function (e) {
      //   this.closeSearchForm();
      this.$router.push({
        path: "/shop",
        query: {
          search_term: this.search_term,
          //   category: this.searchCategory,
        },
      });
    },
    handler(e) {
      e.target.parentNode.setAttribute("style", "display: none");
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
        pageNumber: 1,
        pageSize: 10,
      };
      axios
        .post(`${baseUrl}/api/Home/product-list`, payload, optionAxios)
        .then((response) => {
          if (response.status == 200) {
            console.log("check", response);

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
            // this.$forceUpdate();
            this.$nextTick(() => {
              this.totalCount = response.data.totalCount;
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
