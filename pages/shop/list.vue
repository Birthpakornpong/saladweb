<template>
  <main class="main skeleton-body">
    <!-- <pv-shop-banner></pv-shop-banner>

		<nav
			aria-label="breadcrumb"
			class="breadcrumb-nav"
		>
			<div class="container">
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<nuxt-link to="/">
							Home
						</nuxt-link>
					</li>
					<li class="breadcrumb-item active">Shop</li>
				</ol>
			</div>
		</nav> -->

    <div class="container">
      <div class="row">
        <div class="col-lg-9 main-content">
          <pv-product-list-one
            :category-list="categoryList"
            :items-per-row="1"
          ></pv-product-list-one>
        </div>

        <div class="sidebar-overlay" @click="hideSidebar"></div>
        <aside
          class="sidebar-shop col-lg-3 order-lg-first mobile-sidebar"
          sticky-container
        >
          <div v-sticky="isSticky" sticky-offset="{top: 75}">
            <pv-sidebar-filter-one
              :category-list="categoryList"
              :featured-products="featuredProducts"
              v-if="featuredProducts.length > 0"
            ></pv-sidebar-filter-one>

            <div class="sidebar-content skeleton-body" v-else>
              <aside class="widget"></aside>
              <aside class="widget"></aside>
              <aside class="widget"></aside>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <div class="mb-4"></div>
  </main>
</template>

<script>
import { VueTreeList, Tree } from "vue-tree-list";
import Sticky from "vue-sticky-directive";
import PvSidebarFilterOne from "~/components/partials/shop/sidebar-filter/PvSidebarFilterOne";
import PvProductListOne from "~/components/partials/shop/product-list/PvProductListOne";
import PvShopBanner from "~/components/partials/shop/PvShopBanner";
import Api, { baseUrl, currentDemo } from "~/api";
import { sidebarShop } from "~/sidebarShop.js";
export default {
  components: {
    PvSidebarFilterOne,
    PvProductListOne,
    PvShopBanner,
  },
  directives: {
    Sticky,
  },
  data: function () {
    return {
      categoryList: [],
      featuredProducts: [],
      isSticky: false,
    };
  },
  mounted: function () {
    this.getCategoryLists();
    this.resizeHandler();
    window.addEventListener("resize", this.resizeHandler, {
      passive: true,
    });
  },
  destroyed: function () {
    window.removeEventListener("resize", this.resizeHandler);
  },
  methods: {
    getCategoryLists: function () {
      this.categoryList = sidebarShop.sidebarList;
      this.featuredProducts = sidebarShop.featuredProducts;
    },
    resizeHandler: function () {
      this.isSticky = window.innerWidth > 991 ? true : false;
    },
    hideSidebar: function () {
      document.querySelector("body").classList.remove("sidebar-opened");
    },
  },
};
</script>
