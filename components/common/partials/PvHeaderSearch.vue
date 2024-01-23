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

  <form action="#" method="get" @submit.prevent="submitSearchForm" class="mb-0">
    <div class="header-search-wrapper" style="position: unset;">
      <label for="search_term" class="sr-only">Search</label>
      <input
        type="text"
        class="form-control"
        name="search_term"
        id="search_term"
        placeholder="I'm searching for..."
        required
        v-model="search_term"
        @input="searchProducts"
        style="width: 20em;"
      />
      <!-- <div class="select-custom" @click.stop="showSearchForm($event)">
        <select
          id="cat"
          name="searchCategory"
          v-model="searchCategory"
          @change="searchProducts"
        >
          <option value>All Categories</option>
          <option value="fashion">Fashion</option>
          <option value="women">- Women</option>
          <option value="men">- Men</option>
          <option value="jewellery">- Jewellery</option>
          <option value="kids">- Kids Fashion</option>
          <option value="electronics">Electronics</option>
          <option value="smart-tvs">- Smart TVs</option>
          <option value="cameras">- Cameras</option>
          <option value="games">- Games</option>
          <option value="home-garden">Home &amp; Garden</option>
          <option value="motors">Motors</option>
          <option value="cars-and-trucks">- Cars and Trucks</option>
          <option value="motorcycles-powersports">
            - Motorcycles &amp; Powersports
          </option>
          <option value="accessories">
            - Parts &amp; Accessories
          </option>
          <option value="boats">- Boats</option>
          <option value="supplies">
            - Auto Tools &amp; Supplies
          </option>
        </select>
      </div> -->
      <button
        class="btn icon-magnifier"
        title="search"
        style="height: 2.7em;"
        type="submit"
      ></button>

      <div class="live-search-list">
        <div
          class="search-suggests"
          v-if="suggestions.length > 0"
          style="width: 23em; border-radius: 10px; left: 1em; top: 6em;"
        >
          <nuxt-link
            :to="'/product/default/' + product.slug"
            class="search-suggest"
            data-index="0"
            v-for="product in suggestions"
            :key="product.id"
          >
            <div class="search-media">
              <img
                :src="`${baseUrl}${product.small_pictures[0].url}`"
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

            <div class="search-price">
              <div
                class="product-price mb-0"
                v-if="product.minPrice == product.maxPrice"
              >
                ${{ product.minPrice | priceFormat }}
              </div>

              <template v-else>
                <div
                  class="product-price mb-0"
                  v-if="product.variants.length == 0"
                >
                  <span class="new-price"
                    >${{ product.minPrice | priceFormat }}</span
                  >
                  <span class="old-price"
                    >${{ product.maxPrice | priceFormat }}</span
                  >
                </div>
                <div class="product-price mb-0" v-else>
                  ${{ product.minPrice | priceFormat }} - ${{
                    product.maxPrice | priceFormat
                  }}
                </div>
              </template>
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
            this.suggestions = [
              {
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
              {
                id: 324,
                name: "Baby Summer Underclothes",
                slug: "baby-summer-underclothes",
                short_description:
                  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
                price: 299,
                sale_price: 259,
                sku: "654111995-1-2",
                stock: 50,
                ratings: 0,
                reviews: "0",
                sale_count: 0,
                is_hot: true,
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
                created_at: "2000-10-02T15:53:45.000000Z",
                updated_at: "2000-10-29T13:27:06.000000Z",
                product_categories: [
                  {
                    name: "Boys",
                    slug: "boys-2",
                    parent_name: null,
                    disabled: true,
                    pivot: {
                      product_id: "324",
                      "product-category_id": "53",
                    },
                  },
                  {
                    name: "Dresses",
                    slug: "dresses",
                    parent_name: "Boys",
                    disabled: true,
                    pivot: {
                      product_id: "324",
                      "product-category_id": "54",
                    },
                  },
                ],
                small_pictures: [
                  {
                    width: "150",
                    height: "150",
                    url: "\/uploads\/shop23_product_4_1_150x150_608ba7046e.jpg",
                    pivot: {
                      related_id: "324",
                      upload_file_id: "1654",
                    },
                  },
                  {
                    width: "150",
                    height: "150",
                    url: "\/uploads\/shop23_product_4_2_150x150_7619a3dbdb.jpg",
                    pivot: {
                      related_id: "324",
                      upload_file_id: "1653",
                    },
                  },
                ],
                variants: [],
              },
              {
                id: 325,
                name: "Blue Baby Winter Shoes",
                slug: "blue-baby-winter-shoes",
                short_description:
                  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
                price: 199,
                sale_price: 129,
                sku: null,
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
                created_at: "2000-10-04T09:55:51.000000Z",
                updated_at: "2000-10-30T04:01:12.000000Z",
                product_categories: [
                  {
                    name: "Gifts",
                    slug: "gifts",
                    parent_name: null,
                    disabled: true,
                    pivot: {
                      product_id: "325",
                      "product-category_id": "48",
                    },
                  },
                ],
                small_pictures: [
                  {
                    width: "150",
                    height: "150",
                    url: "\/uploads\/product_11_1_150x150_b2e2487d6e.jpg",
                    pivot: {
                      related_id: "325",
                      upload_file_id: "1662",
                    },
                  },
                  {
                    width: "150",
                    height: "150",
                    url: "\/uploads\/product_11_2_150x150_419cb90caa.jpg",
                    pivot: {
                      related_id: "325",
                      upload_file_id: "1661",
                    },
                  },
                ],
                variants: [],
              },
              {
                id: 330,
                name: "Pink Baby Caps",
                slug: "pink-baby-caps",
                short_description:
                  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
                price: 199,
                sale_price: 129,
                sku: null,
                stock: 50,
                ratings: 0,
                reviews: "0",
                sale_count: 0,
                is_hot: null,
                is_new: true,
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
                created_at: "2000-12-16T13:06:16.000000Z",
                updated_at: "2001-01-15T09:44:05.000000Z",
                product_categories: [
                  {
                    name: "Gifts",
                    slug: "gifts",
                    parent_name: null,
                    disabled: true,
                    pivot: {
                      product_id: "330",
                      "product-category_id": "48",
                    },
                  },
                ],
                small_pictures: [
                  {
                    width: "150",
                    height: "150",
                    url: "\/uploads\/shop23_product_8_1_150x150_2406984688.jpg",
                    pivot: {
                      related_id: "330",
                      upload_file_id: "1694",
                    },
                  },
                  {
                    width: "150",
                    height: "150",
                    url: "\/uploads\/shop23_product_8_2_150x150_0191c3e228.jpg",
                    pivot: {
                      related_id: "330",
                      upload_file_id: "1693",
                    },
                  },
                ],
                variants: [],
              },
              {
                id: 331,
                name: "Pink Baby Spring Shoes",
                slug: "pink-baby-spring-shoes",
                short_description:
                  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
                price: 299,
                sale_price: null,
                sku: "654111995-1-1-2",
                stock: 50,
                ratings: 0,
                reviews: "0",
                sale_count: 0,
                is_hot: true,
                is_new: null,
                demoes: "demo23",
                is_sale: null,
                until: null,
                is_out_of_stock: null,
                release_date: null,
                developer: null,
                publisher: null,
                game_mode: null,
                rated: null,
                created_by: "1",
                updated_by: "1",
                created_at: "2000-12-18T05:03:41.000000Z",
                updated_at: "2000-12-18T05:05:13.000000Z",
                product_categories: [
                  {
                    name: "Boys",
                    slug: "boys-2",
                    parent_name: null,
                    disabled: true,
                    pivot: {
                      product_id: "331",
                      "product-category_id": "53",
                    },
                  },
                  {
                    name: "Trousers",
                    slug: "trousers-4",
                    parent_name: "Babies",
                    disabled: true,
                    pivot: {
                      product_id: "331",
                      "product-category_id": "51",
                    },
                  },
                ],
                small_pictures: [
                  {
                    width: "150",
                    height: "150",
                    url: "\/uploads\/product_12_1_150x150_5e61865938.jpg",
                    pivot: {
                      related_id: "331",
                      upload_file_id: "1702",
                    },
                  },
                  {
                    width: "150",
                    height: "150",
                    url: "\/uploads\/product_12_2_150x150_ad021b72b0.jpg",
                    pivot: {
                      related_id: "331",
                      upload_file_id: "1701",
                    },
                  },
                ],
                variants: [],
              },
              {
                id: 335,
                name: "Rag baby doll",
                slug: "rag-baby-doll",
                short_description:
                  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
                price: 55,
                sale_price: null,
                sku: "15615132",
                stock: 50,
                ratings: 4,
                reviews: "1",
                sale_count: 30,
                is_hot: null,
                is_new: null,
                demoes: "demo23",
                is_sale: null,
                until: null,
                is_out_of_stock: null,
                release_date: null,
                developer: null,
                publisher: null,
                game_mode: null,
                rated: null,
                created_by: "1",
                updated_by: "1",
                created_at: "2000-12-27T01:53:19.000000Z",
                updated_at: "2001-01-15T14:31:22.000000Z",
                product_categories: [
                  {
                    name: "Girls",
                    slug: "girls-2",
                    parent_name: null,
                    disabled: true,
                    pivot: {
                      product_id: "335",
                      "product-category_id": "81",
                    },
                  },
                  {
                    name: "Boys",
                    slug: "boys-2",
                    parent_name: null,
                    disabled: true,
                    pivot: {
                      product_id: "335",
                      "product-category_id": "53",
                    },
                  },
                ],
                small_pictures: [
                  {
                    width: "150",
                    height: "150",
                    url: "\/uploads\/shop23_product_7_1_150x150_d2eced0208.jpg",
                    pivot: {
                      related_id: "335",
                      upload_file_id: "1734",
                    },
                  },
                  {
                    width: "150",
                    height: "150",
                    url: "\/uploads\/shop23_product_7_2_150x150_edafa15854.jpg",
                    pivot: {
                      related_id: "335",
                      upload_file_id: "1733",
                    },
                  },
                ],
                variants: [],
              },
              {
                id: 336,
                name: "Red baby shoes",
                slug: "red-baby-shoes",
                short_description:
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                price: null,
                sale_price: null,
                sku: "PT0003",
                stock: 50,
                ratings: 0,
                reviews: "0",
                sale_count: 0,
                is_hot: null,
                is_new: true,
                demoes: "demo23",
                is_sale: null,
                until: null,
                is_out_of_stock: null,
                release_date: null,
                developer: null,
                publisher: null,
                game_mode: null,
                rated: null,
                created_by: "1",
                updated_by: "1",
                created_at: "2000-12-28T21:25:20.000000Z",
                updated_at: "2004-12-22T09:44:10.000000Z",
                product_categories: [
                  {
                    name: "Gifts",
                    slug: "gifts",
                    parent_name: null,
                    disabled: true,
                    pivot: {
                      product_id: "336",
                      "product-category_id": "48",
                    },
                  },
                ],
                small_pictures: [
                  {
                    width: "150",
                    height: "150",
                    url: "\/uploads\/product_9_1_150x150_1a7836dce5.jpg",
                    pivot: {
                      related_id: "336",
                      upload_file_id: "1745",
                    },
                  },
                  {
                    width: "150",
                    height: "150",
                    url: "\/uploads\/product_9_2_150x150_7036d98627.jpg",
                    pivot: {
                      related_id: "336",
                      upload_file_id: "1744",
                    },
                  },
                ],
                variants: [
                  {
                    id: 648,
                    price: 101,
                    sale_price: null,
                    pivot: {
                      product_id: "336",
                      component_id: "648",
                    },
                    size: [
                      {
                        id: 640,
                        size_name: "Extra Large",
                        size: "XL",
                        pivot: {
                          components_variants_variant_id: "648",
                          component_id: "640",
                        },
                        size_thumbnail: [],
                      },
                    ],
                    colors: [
                      {
                        id: 643,
                        color_name: "black",
                        color: "#000000",
                        pivot: {
                          components_variants_variant_id: "648",
                          component_id: "643",
                        },
                        color_thumbnail: [],
                      },
                    ],
                  },
                  {
                    id: 650,
                    price: 108,
                    sale_price: null,
                    pivot: {
                      product_id: "336",
                      component_id: "650",
                    },
                    size: [
                      {
                        id: 639,
                        size_name: "Medium",
                        size: "M",
                        pivot: {
                          components_variants_variant_id: "650",
                          component_id: "639",
                        },
                        size_thumbnail: [],
                      },
                    ],
                    colors: [
                      {
                        id: 645,
                        color_name: "black",
                        color: "#000000",
                        pivot: {
                          components_variants_variant_id: "650",
                          component_id: "645",
                        },
                        color_thumbnail: [],
                      },
                    ],
                  },
                  {
                    id: 649,
                    price: 111,
                    sale_price: null,
                    pivot: {
                      product_id: "336",
                      component_id: "649",
                    },
                    size: [
                      {
                        id: 641,
                        size_name: "Small",
                        size: "S",
                        pivot: {
                          components_variants_variant_id: "649",
                          component_id: "641",
                        },
                        size_thumbnail: [],
                      },
                    ],
                    colors: [
                      {
                        id: 644,
                        color_name: "red",
                        color: "#ab6e6e",
                        pivot: {
                          components_variants_variant_id: "649",
                          component_id: "644",
                        },
                        color_thumbnail: [],
                      },
                    ],
                  },
                ],
              },
            ];
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
  },
};
</script>
