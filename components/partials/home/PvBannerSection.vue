<template>
	<div class="cats-banner-section mb-3">
		<div class="row m-0 no-gutters">
			<div class="col-lg-3">
				<div class="cat-banner d-flex flex-column align-items-center justify-content-center h-100">
					<h4 class="font4 line-height-1 ls-0 text-primary mb-0">Best Collections</h4>
					<p class="font2 line-height-1 mb-0">Selected Products From Famous Brands</p>
				</div>
			</div>
			<div class="col-lg-9">
				<pv-carousel
					class="categories-slider"
					:options="bannerSlider"
				>
					<div
						class="product-category swiper-slide mb-0"
						style="background-color: #d8dfe1;"
					>
						<nuxt-link :to="{path: '/shop', query: {category: 'boys'}}">
							<figure>
								<img
									v-lazy="'./images/home/products/cats/cat-1.jpg'"
									alt="cat banner"
									width="500"
									height="400"
								>
							</figure>

							<div class="category-content">
								<h3>Boys</h3>
							</div>
						</nuxt-link>
					</div>
					<div
						class="product-category swiper-slide mb-0"
						style="background-color: #ebeae9;"
					>
						<nuxt-link :to="{path: '/shop', query: {category: 'babies'}}">
							<figure>
								<img
									v-lazy="'./images/home/products/cats/cat-2.jpg'"
									alt="cat banner"
									width="500"
									height="400"
								>
							</figure>

							<div class="category-content">
								<h3>Babies</h3>
							</div>
						</nuxt-link>
					</div>
					<div
						class="product-category swiper-slide mb-0"
						style="background-color: #ead7d5;"
					>
						<nuxt-link :to="{path: '/shop', query: {category: 'girls'}}">
							<figure>
								<img
									v-lazy="'./images/home/products/cats/cat-3.jpg'"
									alt="cat banner"
									width="500"
									height="400"
								>
							</figure>

							<div class="category-content">
								<h3>Girls</h3>
							</div>
						</nuxt-link>
					</div>
				</pv-carousel>
			</div>
		</div>
	</div>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import { bannerSlider } from '~/utils/data/carousel';

export default {
	components: {
		PvCarousel
	},
	data: function () {
		return {
			bannerSlider: bannerSlider
		}
	}
}
</script>