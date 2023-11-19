<template>
	<div class="brands-section">
		<div class="container">
			<pv-carousel
				class="brands-slider images-center appear-animate"
				data-animation-name="fadeIn"
				data-animation-delay="400"
				:options="brandSlider"
				v-animate
			>
				<div class="swiper-slide">
					<img
						src="~/static/images/home/brands/brand1.png"
						width="200"
						height="50"
						alt="brand"
					>
				</div>

				<div class="swiper-slide">
					<img
						src="~/static/images/home/brands/brand2.png"
						width="200"
						height="50"
						alt="brand"
					>
				</div>

				<div class="swiper-slide">
					<img
						src="~/static/images/home/brands/brand3.png"
						width="200"
						height="50"
						alt="brand"
					>
				</div>

				<div class="swiper-slide">
					<img
						src="~/static/images/home/brands/brand4.png"
						width="200"
						height="50"
						alt="brand"
					>
				</div>

				<div class="swiper-slide">
					<img
						src="~/static/images/home/brands/brand5.png"
						width="200"
						height="50"
						alt="brand"
					>
				</div>
			</pv-carousel>
		</div>
	</div>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import { brandSlider } from '~/utils/data/carousel';

export default {
	components: {
		PvCarousel
	},
	data: function () {
		return {
			brandSlider: brandSlider
		}
	}
}
</script>