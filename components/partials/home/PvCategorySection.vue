<template>
  <section class="welcome-section">
    <div class="container">
      <!-- <h2
				class="section-title text-center text-uppercase appear-animate"
				data-animation-name="fadeInUpShorter"
				data-animation-delay="200"
				v-animate
			>Welcome to little Porto&rsquo;s
				world</h2>
			<p
				class="section-description text-center mb-3 appear-animate"
				data-animation-name="fadeInUpShorter"
				data-animation-delay="400"
				v-animate
			>Enjoy the exceptional quality in all our products
			</p>

			<div class="row mb-2">
				<div class="col-sm-8 col-lg-6">
					<div
						class="banner banner1 mb-2 appear-animate"
						data-animation-name="fadeIn"
						data-animation-delay="200"
						style="background-color: #d8d8d8;"
						v-animate
					>
						<figure>
							<img
								v-lazy="'./images/home/banners/banner-1.jpg'"
								alt="banner"
								width="580"
								height="374"
							>
						</figure>

						<div class="banner-layer d-flex flex-column align-items-end justify-content-center">
							<div class="text-justify">
								<h3 class="font4 font-weight-bold ls-n-25 text-uppercase mb-0">Discounts</h3>
								<h4 class="ls-n-25 text-uppercase">Up to 70%</h4>
								<nuxt-link
									:to="{path: '/shop', query: {category: 'deals'}}"
									class="btn btn-link"
								><i>View our Deals</i><i class="icon-right-open-big"></i></nuxt-link>
							</div>
						</div>
					</div>
				</div>
				<div class="col-sm-4 col-lg-3">
					<div
						class="banner banner2 mb-2 appear-animate"
						data-animation-name="fadeIn"
						data-animation-delay="200"
						style="background-color: #f0f5f8;"
						v-animate
					>
						<figure>
							<img
								v-lazy="'./images/home/banners/banner-2.jpg'"
								alt="banner"
								width="280"
								height="374"
							>
						</figure>

						<div class="banner-layer d-flex flex-column align-items-center justify-content-end">
							<h2 class="ls-n-25 text-uppercase">Summer classics</h2>
							<nuxt-link
								:to="{path: '/shop', query: {category: 'summer-classics'}}"
								class="btn btn-link"
							><i>View our Classics</i><i class="icon-right-open-big"></i></nuxt-link>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-lg-3">
					<div
						class="banner banner3 mb-2 appear-animate"
						data-animation-name="fadeIn"
						data-animation-delay="200"
						style="background-color: #ededed;"
						v-animate
					>
						<figure>
							<img
								v-lazy="'./images/home/banners/banner-3.jpg'"
								alt="banner"
								width="280"
								height="374"
							>
						</figure>

						<div class="banner-layer d-flex flex-column align-items-center justify-content-between">
							<h2 class="font-weight-bold ls-n-25 text-center text-uppercase">Mother &amp;
								Daughter</h2>
							<nuxt-link
								:to="{path: '/shop', query: {category: 'mother-and-daughter'}}"
								class="btn btn-link"
							><i>View our Outfits</i><i class="icon-right-open-big"></i></nuxt-link>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-lg-3">
					<div
						class="banner banner4 mb-2 appear-animate"
						data-animation-name="fadeIn"
						data-animation-delay="200"
						style="background-color: #f5f6f8;"
						v-animate
					>
						<figure>
							<img
								v-lazy="'./images/home/banners/banner-4.jpg'"
								alt="banner"
								width="280"
								height="374"
							>
						</figure>

						<div class="banner-layer d-flex flex-column align-items-center">
							<h2 class="ls-n-25 text-uppercase">Babies Outfits</h2>
							<nuxt-link
								:to="{path: '/shop', query: {category: 'babies-outfits'}}"
								class="btn btn-link"
							><i>View our Outfits</i><i class="icon-right-open-big"></i></nuxt-link>
						</div>
					</div>
				</div>
				<div class="col-sm-4 col-lg-3">
					<div
						class="banner banner5 mb-2 appear-animate"
						data-animation-name="fadeIn"
						data-animation-delay="200"
						style="background-color: #f5ecef;"
						v-animate
					>
						<figure>
							<img
								v-lazy="'./images/home/banners/banner-5.jpg'"
								alt="banner"
								width="280"
								height="374"
							>
						</figure>

						<div class="banner-layer d-flex flex-column align-items-center justify-content-between">
							<h2 class="ls-n-25 text-uppercase">Babies dresses</h2>
							<nuxt-link
								:to="{path: '/shop', query: {category: 'babies-dresses'}}"
								class="btn btn-link"
							><i>View our Dresses</i><i class="icon-right-open-big"></i></nuxt-link>
						</div>
					</div>
				</div>
				<div class="col-sm-8 col-lg-6">
					<div
						class="banner banner6 mb-2 appear-animate"
						data-animation-name="fadeIn"
						data-animation-delay="200"
						style="background-color: #e2e2e2;"
						v-animate
					>
						<figure>
							<img
								v-lazy="'./images/home/banners/banner-6.jpg'"
								alt="banner"
								width="580"
								height="374"
							>
						</figure>

						<div class="banner-layer d-flex flex-column align-items-center justify-content-between">
							<h2 class="ls-n-25 text-uppercase">Shoes for Babies</h2>
							<nuxt-link
								:to="{path: '/shop', query: {category: 'shoes-for-babies'}}"
								class="btn btn-link"
							><i>View our Deals</i><i class="icon-right-open-big"></i></nuxt-link>
						</div>
					</div>
				</div>
			</div>

			<div
				class="info-boxes-container appear-animate"
				data-animation-name="fadeInUpShorter"
				data-animation-delay="200"
				v-animate
			>
				<div class="row m-0">
					<div class="info-box info-box-icon-left col-md-4">
						<i class="icon-shipping"></i>

						<div class="info-box-content">
							<h4 class="ls-n-25">FREE SHIPPING &amp; RETURN</h4>
							<p class="font2 font-weight-light">Free shipping on all orders over $99.</p>
						</div>
					</div>
					<div class="info-box info-box-icon-left col-md-4">
						<i class="icon-money"></i>

						<div class="info-box-content">
							<h4 class="ls-n-25">MONEY BACK GUARANTEE</h4>
							<p class="font2 font-weight-light">100% money back guarantee</p>
						</div>
					</div>
					<div class="info-box info-box-icon-left col-md-4">
						<i class="icon-support"></i>

						<div class="info-box-content">
							<h4 class="ls-n-25">ONLINE SUPPORT 24/7</h4>
							<p class="font2 font-weight-light">Lorem ipsum dolor sit amet.</p>
						</div>
					</div>
				</div>
			</div> -->

      <div class="category-section mb-4">
        <div class="header-text">
          <div>BEST SELLERS</div>
        </div>
      </div>

      <div
        class="row appear-animate"
        data-animation-name="fadeInUpShorter"
        data-animation-delay="400"
        v-animate
        v-if="products.length === 0"
      >
        <div
          class="col-6 col-md-4 col-xl-3"
          v-for="index in [1, 2, 3, 4]"
          :key="'wel-skel-' + index"
        >
          <div class="product-loading-overlay"></div>
        </div>
      </div>

      <div
        class="row appear-animate"
        data-animation-name="fadeInUpShorter"
        data-animation-delay="400"
        v-animate
        v-if="products.length > 0"
      >
        <div
          class="col-6 col-md-4 col-xl-3"
          v-for="(product, index) in products.slice(0, 4)"
          :key="'wel-' + index"
        >
          <pv-product-one :product="product"></pv-product-one>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PvCarousel from "~/components/features/PvCarousel";
import PvProductOne from "~/components/features/product/PvProductOne";

export default {
  components: {
    PvCarousel,
    PvProductOne,
  },
  props: {
    products: Array,
  },
};
</script>
<style>
.category-section .header-text {
  text-align: center;
  font-weight: bold;
  font-size: x-large;
  color: #ab0011;
  position: relative;
}
</style>
