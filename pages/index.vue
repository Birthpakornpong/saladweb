<template>
	<main class="main home-page">
		<section class="intro-section mb-3">
			<pv-intro-section></pv-intro-section>
		</section>

		<pv-category-section :products="products"></pv-category-section>

		<pv-banner-section></pv-banner-section>

		<pv-best-collection :products="products"></pv-best-collection>

		<pv-brand-section></pv-brand-section>
	</main>
</template>

<script>
import PvIntroSection from '~/components/partials/home/PvIntroSection';
import PvCategorySection from '~/components/partials/home/PvCategorySection';
import PvBannerSection from '~/components/partials/home/PvBannerSection';
import PvBestCollection from '~/components/partials/home/PvBestCollection';
import PvBrandSection from '~/components/partials/home/PvBrandSection';

import {
	getProductsByAttri,
	getTopSellingProducts,
	getTopRatedProducts
} from '~/utils/service';
import { getCookie } from '~/utils';
import Api, { baseUrl } from '~/api';

export default {
	components: {
		PvIntroSection,
		PvCategorySection,
		PvBannerSection,
		PvBestCollection,
		PvBrandSection
	},
	data: function () {
		return {
			products: [],
			posts: [],
			featuredProducts: [],
			newProducts: [],
			bestProducts: [],
			topRatedProducts: [],
			timerId: 0
		};
	},
	mounted: function () {
		Api.get( `${ baseUrl }/demo23` )
			.then( response => {
				this.products = response.data.products;
				this.posts = response.data.posts;
				this.featuredProducts = getProductsByAttri(
					response.data.products
				);
				this.newProducts = getProductsByAttri(
					response.data.products,
					'is_new'
				);
				this.bestProducts = getTopSellingProducts(
					response.data.products
				);
				this.topRatedProducts = getTopRatedProducts(
					response.data.products
				);
			} )
			.catch( error => ( { error: JSON.stringify( error ) } ) );

		this.timerId = setTimeout( () => {
			if (
				this.$route.path === '/' &&
				getCookie( 'newsletter' ) !== 'false'
			) {
				this.$modal.show(
					() =>
						import( '~/components/features/modal/PvNewsletterModal' ),
					{},
					{ width: '740', height: 'auto', adaptive: true, class: 'newsletter-modal' }
				);
			}
		}, 10000 );
	},
	destroyed: function () {
		clearTimeout( this.timerId );
	}
};
</script>