<template>
	<main class="main skeleton-body">
		<pv-shop-banner></pv-shop-banner>

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
		</nav>

		<div class="container">
			<div class="row main-content">
				<div class="col-12">
					<pv-product-list-three :category-list="categoryList"></pv-product-list-three>
				</div>
			</div>
		</div>

		<div class="mb-4"></div>
	</main>
</template>

<script>
import { VueTreeList, Tree } from 'vue-tree-list';
import PvSidebarFilterOne from '~/components/partials/shop/sidebar-filter/PvSidebarFilterOne';
import PvProductListThree from '~/components/partials/shop/product-list/PvProductListThree';
import PvShopBanner from '~/components/partials/shop/PvShopBanner';
import Api, { baseUrl, currentDemo } from '~/api';

export default {
	components: {
		PvSidebarFilterOne,
		PvProductListThree,
		PvShopBanner
	},
	data: function () {
		return {
			categoryList: [],
			featuredProducts: []
		};
	},
	mounted: function () {
		this.getCategoryLists();
	},
	methods: {
		getCategoryLists: function () {
			Api.get( `${ baseUrl }/shop/sidebar-list`, {
				params: { demo: currentDemo }
			} )
				.then( response => {
					this.categoryList = response.data.sidebarList;
				} )
				.catch( error => ( { error: JSON.stringify( error ) } ) );
		}
	}
};
</script>   