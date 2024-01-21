<template>
  <div>
    <h1 class="product-title">{{ product.name }}</h1>

    <pv-product-nav
      v-if="isProductNav"
      :prev-product="prevProduct"
      :next-product="nextProduct"
    ></pv-product-nav>

    <div class="ratings-container">
      <div class="product-ratings">
        <span
          class="ratings"
          :style="'width:' + product.ratings * 20 + '%'"
        ></span>
        <span class="tooltiptext tooltip-top">{{
          product.ratings | priceFormat
        }}</span>
      </div>
      <a href="javascript:;" class="rating-link" v-if="product.reviews > 0"
        >( {{ product.reviews }} Reviews )</a
      >
      <a href="javascript:;" class="rating-link" v-else
        >( There is no review yet. )</a
      >
    </div>

    <hr class="short-divider" />

    <div
      class="price-box"
      v-if="product.price"
      key="singlePrice"
      style="display: flex; justify-content: space-between;"
    >
      <div>
        <template v-if="!product.is_sale">
          <span class="new-price">฿ {{ product.price | priceFormat }}</span>
        </template>

        <template v-else>
          <span class="new-price"
            >฿ {{ product.sale_price | priceFormat }}</span
          >
          <span class="old-price">฿ {{ product.price | priceFormat }}</span>
        </template>
      </div>
      <div style="display: flex; align-items: center;">
        <label class="mr-3">Share:</label>

        <div class="social-icons mr-2" v-if="isShare">
          <a
            href="javascript:;"
            class="social-icon social-facebook icon-facebook"
            title="Facebook"
          ></a>

          <a
            href="javascript:;"
            class="social-icon social-linkedin fab fa-linkedin-in"
            title="Linkedin"
          ></a>
          <a
            href="javascript:;"
            class="social-icon social-gplus fab fa-google-plus-g"
            title="Google +"
          ></a>
          <a
            href="javascript:;"
            class="social-icon social-mail icon-mail-alt"
            title="Mail"
          ></a>
        </div>
      </div>
    </div>

    <div class="price-box" v-else>
      <template v-if="minPrice !== maxPrice">
        <span class="new-price"
          >${{ minPrice | priceFormat }} &ndash; ${{
            maxPrice | priceFormat
          }}</span
        >
      </template>

      <template v-else>
        <span class="new-price">${{ minPrice | priceFormat }}</span>
      </template>
    </div>

    <div class="product-desc" v-if="product.short_description">
      <p>{{ product.short_description }}</p>
    </div>

    <ul class="single-info-list">
      <li v-if="product.quantity" style="font-size: 1.2em">
        ขนาดบรรจุ:
        <strong class="ml-1">{{ product.quantity }}</strong>
      </li>
      <li v-if="product.expired" style="font-size: 1.2em">
        อายุสินค้า:
        <strong class="ml-1">{{ product.expired }}</strong>
      </li>
      <li v-if="product.sku" style="font-size: 1.2em">
        SKU:
        <strong class="ml-1">{{ product.sku }}</strong>
      </li>

      <li v-if="product.category">
        CATEGORY:
        <!-- <strong class="ml-1">
          <nuxt-link
            :to="{ path: '/shop', query: { category: item.slug } }"
            class="product-category"
            v-for="(item, index) in product.product_categories"
            :key="'product-category-' + index"
          >
            {{ item.name }}
            <template v-if="index < product.product_categories.length - 1"
              >,</template
            >
          </nuxt-link>
        </strong> -->
        <strong class="ml-1">{{ product.category }}</strong>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { VueSlideToggle } from "vue-slide-toggle";
import PvProductNav from "~/components/partials/product/PvProductNav";
import PvQuantityInput from "~/components/features/PvQuantityInput";
import { baseUrl } from "~/api";

export default {
  components: {
    VueSlideToggle,
    PvProductNav,
    PvQuantityInput,
  },
  props: {
    product: Object,
    prevProduct: Object,
    nextProduct: Object,
    isProductNav: {
      type: Boolean,
      default: true,
    },
  },
  data: function () {
    return {
      minPrice: 0,
      maxPrice: 0,
      qty: 1,
      currentIndex: 0,
      baseUrl: baseUrl,
      vSizes: [],
      vColors: [],
      curSize: {
        name: null,
        text: null,
        image: null,
      },
      curColor: {
        name: null,
        text: null,
        image: null,
      },
      tIndex: 0,
      isShare: {
        type: Boolean,
        default: true,
      },
    };
  },
  watch: {
    $route: function () {
      this.getFlag();
    },
  },
  computed: {
    ...mapGetters("wishlist", ["wishList"]),
    curIndex: function () {
      if (this.curColor.name !== null && this.vSizes.length === 0) {
        let index = this.product.variants.findIndex(
          (item) => item.colors[0].color_name === this.curColor.name
        );
        this.tIndex = index;
        return index;
      }
      if (this.curSize.name !== null && this.vColors.length === 0) {
        let index = this.product.variants.findIndex(
          (item) => item.size[0].size_name === this.curSize.name
        );
        this.tIndex = index;
        return index;
      }
      if (this.curColor.name !== null && this.curSize.name !== null) {
        let index = this.product.variants.findIndex(
          (item) =>
            item.colors[0].color_name === this.curColor.name &&
            item.size[0].size_name === this.curSize.name
        );
        this.tIndex = index;
        return index;
      } else {
        return this.tIndex;
      }
    },
    isCartActive: function () {
      if (this.product.stock < parseInt(this.qty)) return false;
      if (this.product.variants.length === 0) return true;
      if (this.curSize.name !== null && this.curColor.name !== null)
        return true;
      if (this.curColor.name !== null && this.vSizes.length === 0) return true;
      if (this.curSize.name !== null && this.vColors.length === 0) return true;
      return false;
    },
    isWishlisted: function () {
      if (
        this.wishList.findIndex((item) => item.name === this.product.name) > -1
      )
        return true;
      return false;
    },
    isPriceShow: function () {
      if (this.curSize.name !== null && this.curColor.name !== null)
        return true;
      if (this.curColor.name !== null && this.vSizes.length === 0) return true;
      if (this.curSize.name !== null && this.vColors.length === 0) return true;
      return false;
    },
  },
  created: function () {
    this.getFlag();
  },
  mounted: function () {
    if (this.product.variants && !this.product.price) {
      this.minPrice = this.product.variants[0].price;

      this.product.variants.forEach((item) => {
        let itemPrice = item.sale_price ? item.sale_price : item.price;
        if (this.minPrice > itemPrice) this.minPrice = itemPrice;
        if (this.maxPrice < itemPrice) this.maxPrice = itemPrice;
      });
    }

    if (this.product.variants.length > 0) {
      if (this.product.variants[0].size[0])
        this.product.variants.forEach((item) => {
          if (
            this.vSizes.findIndex(
              (vsize) => vsize.name === item.size[0].size_name
            ) === -1
          )
            this.vSizes.push({
              name: item.size[0].size_name,
              text: item.size[0].size,
              image: item.size[0].size_thumbnail,
            });
        });

      if (this.product.variants[0].colors[0])
        this.product.variants.forEach((item) => {
          if (
            this.vColors.findIndex(
              (vColor) => vColor.name === item.colors[0].color_name
            ) === -1
          )
            this.vColors.push({
              name: item.colors[0].color_name,
              text: item.colors[0].color,
              image: item.colors[0].color_thumbnail,
            });
        });
    }
  },
  methods: {
    ...mapActions("cart", ["addToCart"]),
    ...mapActions("wishlist", ["addToWishlist"]),
    addCart: function () {
      if (this.isCartActive) {
        let saledProduct;
        if (this.product.variants.length > 0) {
          let saledPrice;
          if (this.product.price)
            saledPrice = this.product.sale_price
              ? this.product.sale_price
              : this.product.price;
          else {
            saledPrice = this.product.variants[this.curIndex].sale_price
              ? this.product.variants[this.curIndex].sale_price
              : this.product.variants[this.curIndex].price;
          }

          let saledName;
          if (this.curColor.name && this.curSize.name) {
            saledName =
              this.curColor.name.charAt(0).toUpperCase() +
              this.curColor.name.slice(1) +
              ", " +
              this.curSize.name;
          }
          if (!this.curColor.name) {
            saledName = this.curSize.name;
          }
          if (!this.curSize.name) {
            saledName =
              this.curColor.name.charAt(0).toUpperCase() +
              this.curColor.name.slice(1);
          }

          saledProduct = {
            ...this.product,
            qty: this.qty,
            name: this.product.name + " - " + saledName,
            price: saledPrice,
          };
        } else {
          saledProduct = {
            ...this.product,
            qty: this.qty,
            price: this.product.sale_price
              ? this.product.sale_price
              : this.product.price,
          };
        }

        this.addToCart({ product: saledProduct });
      }
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
    isDisabled: function (color, size) {
      if (!color.name || !size.name) return false;

      if (this.vSizes.length === 0) {
        return (
          this.product.variants.findIndex(
            (item) => item.colors[0].color_name === color.name
          ) === -1
        );
      }

      if (this.vColors.length === 0) {
        return (
          this.product.variants.findIndex(
            (item) => item.size[0].size_name === size.name
          ) === -1
        );
      }

      return (
        this.product.variants.findIndex(
          (item) =>
            item.colors[0].color_name === color.name &&
            item.size[0].size_name === size.name
        ) === -1
      );
    },
    toggleColorItem: function (color) {
      if (!this.isDisabled(color, this.curSize)) {
        if (this.curColor === color) {
          this.curColor = { name: null, text: null, image: null };
        } else {
          this.curColor = color;
        }
      }
    },
    toggleSizeItem: function (size) {
      if (!this.isDisabled(this.curColor, size)) {
        if (this.curSize === size) {
          this.curSize = { name: null, text: null, image: null };
        } else {
          this.curSize = size;
        }
      }
    },
    resetValue() {
      this.curColor = { name: null, text: null, image: null };
      this.curSize = { name: null, text: null, image: null };
    },
    getFlag: function () {
      if (this.$route.path.includes("sticky-info")) this.isShare = false;
    },
    changeQty: function (quantity) {
      this.qty = quantity;
    },
  },
};
</script>
