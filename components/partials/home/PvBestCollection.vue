<template>
	<div
		class="products-container appear-animate"
		data-animation-name="fadeIn"
		data-animation-delay="200"
		v-animate
	>
		<div class="container">
			<div
				class="row"
				v-if="products.length === 0"
			>
				<div
					class="col-6 col-md-4 col-xl-3"
					v-for="index in [1,2,3,4]"
					:key="'best-skel-' + index"
				>
					<div class="product-loading-overlay"></div>
				</div>
			</div>

			<div
				class="row"
				v-if="products.length > 0"
			>
				<div
					class="col-6 col-md-4 col-xl-3"
					v-for="(product,index) in bestProducts.slice(4,8)"
					:key="'best' + index"
				>
					<pv-product-one :product="product"></pv-product-one>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import PvProductOne from '~/components/features/product/PvProductOne';
import { getTopSellingProducts } from '~/utils/service';

export default {
	components: {
		PvProductOne
	},
	props: {
		products: Array
	},
	computed: {
		bestProducts: function () {
			return getTopSellingProducts( this.products );
		}
	}
}
</script>