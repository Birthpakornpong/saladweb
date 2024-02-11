<template>
  <div class="product-default inner-quickview inner-icon">
    <figure>
      <nuxt-link :to="`/product/default/${product.slug}`">
        <img
          v-if="product.imgUrl"
          alt="large-picture"
          width="800"
          :src="product.imgUrl"
        />
        <img
          v-else
          alt="large-picture"
          width="800"
          src="~/static/images/HOLIS17715_0.jpg"
        />
      </nuxt-link>
    </figure>

    <div class="product-details">
      <div class="category-wrap">
        <!-- <div class="category-list" v-if="type === 1">
          <span
            v-for="(cat, index) in product.product_categories"
            :key="`product-category-${index}`"
          >
            <nuxt-link :to="{ path: '/shop', query: { category: cat.slug } }">{{
              cat.name
            }}</nuxt-link>
            <template v-if="index < product.product_categories.length - 1"
              >,</template
            >
          </span>
        </div>

        <nuxt-link
          to="/pages/wishlist"
          class="btn-icon-wish added-wishlist"
          title="Go to Wishlist"
          v-if="isWishlisted"
        >
          <i class="icon-heart"></i>
        </nuxt-link>

        <a
          href="javascript:;"
          class="btn-icon-wish"
          title="Add to Wishlist"
          @click="addWishlist($event)"
          v-if="!isWishlisted"
        >
          <i class="icon-heart"></i>
        </a> -->
      </div>

      <div
        class="title-wrap"
        style="
          display: flex;
          justify-content: center;
          font-size: 1.4em;
          color: black;
        "
      >
        <nuxt-link :to="'/product/default/' + product.slug">{{
          product.name
        }}</nuxt-link>
      </div>

      <!-- <div class="ratings-container" v-if="type === 1">
        <div class="product-ratings">
          <span
            class="ratings"
            :style="{ width: product.ratings * 20 + '%' }"
          ></span>
          <span class="tooltiptext tooltip-top">{{
            product.ratings | priceFormat
          }}</span>
        </div>
      </div> -->
      <div
        class="title-wrap"
        v-if="product.price"
        key="singlePriceTwo"
        style="
          display: flex;
          justify-content: center;
          font-size: 1.3em;
          color: rgba(128, 128, 128, 1);
        "
      >
        <template>
          <span class="product-price">{{ product.short_description }}</span>
        </template>
      </div>

      <div
        class="price-box title-wrap mt-1"
        v-if="product.price"
        key="singlePrice"
        style="display: flex; justify-content: center; font-size: 1.4em;"
      >
        <template>
          <span class="product-price">฿{{ product.price | priceFormat }}</span>
        </template>
      </div>

      <!-- <div class="price-box" v-else>
        <template v-if="minPrice !== maxPrice">
          <span class="product-price"
            >${{ minPrice | priceFormat }} &ndash; ${{
              maxPrice | priceFormat
            }}</span
          >
        </template>

        <template v-else>
          <span class="product-price">${{ minPrice | priceFormat }}</span>
        </template>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { baseUrl } from "~/api";

export default {
  props: {
    product: Object,
    adClass: String,
    isActions: {
      type: Boolean,
      default: true,
    },
    type: {
      type: Number,
      default: 1,
    },
  },
  data: function () {
    return {
      baseUrl: baseUrl,
      minPrice: 0,
      maxPrice: 0,
      discount: 0,
      defalutImg: "~/static/images/HOLIS17715_0.jpg",
    };
  },
  computed: {
    ...mapGetters("wishlist", ["wishList"]),
    isWishlisted: function () {
      if (
        this.wishList.findIndex((item) => item.name === this.product.name) > -1
      )
        return true;
      return false;
    },
  },
  mounted: function () {
    if (this.product.is_sale && this.product.price) {
      this.discount =
        ((this.product.price - this.product.sale_price) / this.product.price) *
        100;
      this.discount = parseInt(this.discount);
    }

    if (!this.product.price) {
      this.minPrice = this.product.variants[0].price;
      this.product.variants.forEach((item) => {
        let itemPrice = item.is_sale ? item.sale_price : item.price;
        if (this.minPrice > itemPrice) this.minPrice = itemPrice;
        if (this.maxPrice < itemPrice) this.maxPrice = itemPrice;
      });
    }
  },
  methods: {
    ...mapActions("wishlist", ["addToWishlist"]),
    ...mapActions("cart", ["addToCart"]),
    openQuickview: function () {
      this.$modal.show(
        () => import("~/components/features/product/PvQuickview"),
        { slug: this.product.slug },
        {
          width: "931",
          height: "auto",
          adaptive: true,
          class: "quickview-modal",
        }
      );
    },
    addWishlist: function (e) {
      e.currentTarget.classList.add("load-more-overlay", "loading");

      setTimeout(() => {
        this.addToWishlist({ product: this.product });
        document.querySelector(".wishlist-popup").classList.add("active");

        setTimeout(() => {
          document.querySelector(".wishlist-popup").classList.remove("active");
        }, 1000);
      }, 1000);
    },
    addCart: function () {
      if (this.product.stock > 0) {
        let saledProduct = { ...this.product };
        if (this.product.is_sale) {
          saledProduct.price = this.product.sale_price;
        }

        this.addToCart({ product: saledProduct });
      }
    },
  },
};
</script>
