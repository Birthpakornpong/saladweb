<template>
  <div>
    <div class="single-product-custom-block">
      <div class="porto-block">
        <h5 class="porto-heading d-inline-block">Free Shipping</h5>

        <h5 class="porto-heading d-inline-block">100% Money Back Guarantee</h5>

        <h5 class="porto-heading d-inline-block">Online Support 24/7</h5>
        <p></p>
      </div>
    </div>

    <div class="product-single-details">
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

      <div class="price-box" v-if="product.price" key="singlePrice">
        <template v-if="!product.is_sale">
          <span class="new-price">${{ product.price | priceFormat }}</span>
        </template>

        <template v-else>
          <span class="new-price">${{ product.sale_price | priceFormat }}</span>
          <span class="old-price">${{ product.price | priceFormat }}</span>
        </template>
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
        <!-- <li v-if="product.sku">
					SKU:
					<strong>{{ product.sku }}</strong>
				</li> -->

        <li>
          CATEGORY:
          <strong>
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
          </strong>
        </li>

        <li v-if="product.product_tags.length > 0">
          TAGS:
          <strong>
            <nuxt-link
              :to="{ path: '/shop', query: { tag: item.slug } }"
              class="product-category"
              v-for="(item, index) in product.product_tags"
              :key="'product-category-' + index"
            >
              {{ item.name }}
              <template v-if="index < product.product_tags.length - 1"
                >,</template
              >
            </nuxt-link>
          </strong>
        </li>
      </ul>

      <div class="product-filters-container" v-if="product.variants.length > 0">
        <div class="product-single-filter" v-if="vColors.length > 0">
          <label>Color:</label>

          <ul class="config-size-list config-color-list config-filter-list">
            <li
              v-for="(item, index) in vColors"
              :key="'variant-color-' + index"
              @click="toggleColorItem(item)"
              :class="{
                disabled: isDisabled(item, curSize),
                active: curColor === item,
              }"
            >
              <a
                href="javascript:;"
                class="filter-thumb p-0"
                :class="{ disabled: isDisabled(item, curSize) }"
                v-if="item.image[0]"
                key="thumbForm"
              >
                <img
                  :src="`${baseUrl}${item.image[0].url}`"
                  :width="item.image[0].width"
                  :height="item.image[0].height"
                  alt="color thumb"
                />
              </a>
              <a
                href="javascript:;"
                class="filter-color border-0"
                :style="{ backgroundColor: item.text }"
                :class="{ disabled: isDisabled(item, curSize) }"
                v-else
                key="colorForm"
              ></a>
            </li>
          </ul>
        </div>

        <div class="product-single-filter" v-if="vSizes.length > 0">
          <label>Size:</label>

          <ul class="config-size-list">
            <li
              v-for="(item, index) in vSizes"
              :key="'variant-size-' + index"
              @click="toggleSizeItem(item)"
              :class="{
                disabled: isDisabled(curColor, item),
                active: curSize === item,
              }"
            >
              <a
                href="javascript:;"
                class="filter-thumb p-0"
                :class="{ disabled: isDisabled(item, curSize) }"
                v-if="item.image[0]"
                key="thumbSizeForm"
              >
                <img
                  :src="`${baseUrl}${item.image[0].url}`"
                  :width="item.image[0].width"
                  :height="item.image[0].height"
                  alt="size thumb"
                />
              </a>
              <a
                href="javascript:;"
                class="d-flex align-items-center justify-content-center"
                :class="{ disabled: isDisabled(curColor, item) }"
                v-else
              >
                <template v-if="item.text">{{ item.text }}</template>
                <img
                  v-else
                  :src="`${baseUrl}${item.thumbnail[0]}`"
                  alt="thumb-image"
                />
              </a>
            </li>
          </ul>
        </div>

        <div class="product-single-filter">
          <vue-slide-toggle
            :open="curColor.name !== null || curSize.name !== null"
          >
            <label></label>
            <a
              class="font1 text-uppercase clear-btn"
              href="javascript:;"
              @click="resetValue"
              >Clear</a
            >
          </vue-slide-toggle>
        </div>
      </div>

      <div class="product-action">
        <vue-slide-toggle
          :open="isPriceShow"
          v-if="product.variants.length > 0"
        >
          <div
            class="price-box product-filtered-price"
            v-if="minPrice === maxPrice || product.price"
            key="samePrice"
          >
            <span class="product-stock">{{ product.stock }} in stock</span>
          </div>

          <div class="price-box product-filtered-price" v-else>
            <template v-if="product.variants[curIndex].sale_price">
              <del class="old-price">
                <span
                  >${{
                    product.variants[curIndex].sale_price | priceFormat
                  }}</span
                >
              </del>
              <span class="product-price"
                >${{ product.variants[curIndex].price | priceFormat }}</span
              >
            </template>

            <template v-else>
              <span class="product-price"
                >${{ product.variants[curIndex].price | priceFormat }}</span
              >
            </template>
          </div>
        </vue-slide-toggle>

        <div class="product-single-qty">
          <pv-quantity-input
            :product="product"
            :qty="1"
            @changeCurrentQty="changeQty"
          >
          </pv-quantity-input>
        </div>

        <a
          href="javascript:;"
          class="btn btn-dark add-cart mr-2"
          title="Add to Cart"
          @click="addCart"
          :class="{ disabled: !isCartActive }"
          >Add to Cart</a
        >

        <nuxt-link to="/pages/cart" class="btn btn-gray view-cart d-none"
          >View cart</nuxt-link
        >
      </div>

      <hr class="divider mb-0 mt-0" />

      <div class="product-single-share custom-product-single-share">
        <label class="sr-only">Share:</label>

        <div class="social-icons mt-0">
          <a
            href="javascript:;"
            class="social-icon social-facebook icon-facebook"
            title="Facebook"
          ></a>
          <a
            href="javascript:;"
            class="social-icon social-twitter icon-twitter"
            title="Twitter"
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

      <nuxt-link
        to="/pages/wishlist"
        class="btn-icon-wish add-wishlist added-wishlist"
        title="Go to Wishlist"
        v-if="isWishlisted"
      >
        <i class="icon-wishlist-2"></i>
        <span>Browse Wishlist</span>
      </nuxt-link>

      <a
        href="javascript:;"
        class="btn-icon-wish add-wishlist"
        title="Add to Wishlist"
        @click="addWishlist($event)"
        v-if="!isWishlisted"
      >
        <i class="icon-wishlist-2"></i>
        <span>Add to Wishlist</span>
      </a>
    </div>

    <pv-desc-one :product="product" v-if="product"></pv-desc-one>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { VueSlideToggle } from "vue-slide-toggle";
import { baseUrl } from "~/api";
import PvQuantityInput from "~/components/features/PvQuantityInput";
import PvProductNav from "~/components/partials/product/PvProductNav";
import PvDescOne from "~/components/partials/product/description/PvDescOne";

export default {
  components: {
    VueSlideToggle,
    PvDescOne,
    PvProductNav,
    PvQuantityInput,
  },
  props: {
    product: Object,
    prevProduct: Object,
    nextProduct: Object,
    isProductNav: {
      type: Boolean,
      default: false,
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
    };
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
          saledProduct = {
            ...this.product,
            qty: this.qty,
            name:
              this.product.name +
              " - " +
              this.curColor.name.charAt(0).toUpperCase() +
              this.curColor.name.slice(1) +
              ", " +
              this.curSize.name,
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
    changeQty(quantity) {
      this.qty = quantity;
    },
  },
};
</script>
