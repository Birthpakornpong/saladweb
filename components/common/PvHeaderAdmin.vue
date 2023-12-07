<template>
	<header class="header">
		<div class="header-middle sticky-header mobile-sticky">
			<div class="container-fluid">
				<div class="d-flex"></div>
				<div class="d-flex">
					<button
						class="mobile-menu-toggler"
						type="button"
						@click="showMobileMenu"
					>
						<i class="fas fa-bars"></i>
					</button>

					<nuxt-link
						to="/"
						class="logo mt-3"
					>
						<img
							src="~/static/images/home/Logo_Holis.svg"
							alt="Porto Logo"
							style="height: 70px; max-width: none;"
						/>
					</nuxt-link>
				</div>

				<div class="d-flex mr-4">
					<div class="contact-us pr-4 pb-1">Admin</div>
				</div>
			</div>
		</div>

		<div class="header-bottom sticky-header desktop-sticky">
			<div class="container-fluid">
				<div class="header-center d-flex justify-content-center">
					<pv-main-menu-admin></pv-main-menu-admin>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import PvMainMenuAdmin from '~/components/common/partials/PvMainMenuAdmin';
import PvCartMenu from '~/components/common/partials/PvCartMenu';
import PvHeaderSearch from '~/components/common/partials/PvHeaderSearch';

document.querySelector( 'body' ).classList.add( 'loaded' );

export default {
	components: {
		PvMainMenuAdmin,
		PvCartMenu,
		PvHeaderSearch
	},
	methods: {
		openLoginModal: function () {
			this.$modal.show(
				() => import( '~/components/features/modal/PvLoginModal' ),
				{},
				{ width: '525', height: 'auto', adaptive: true }
			);
		},
		showMobileMenu: function () {
			document.querySelector( 'body' ).classList.add( 'mmenu-active' );
		},
		showMobileSearch: function ( e ) {
			let headerSearch = e.currentTarget.closest( '.header-search' );
			headerSearch.classList.add( 'show' );
			headerSearch
				.querySelector( '.header-search-wrapper' )
				.classList.add( 'show' );
		}
	}
};
</script>
<style>
.header .header-middle{
	border-bottom: 0px;
	padding-bottom: 0;
}

.header .header-middle .contact-us{
	font-family: 'porto';
	font-weight: bold;
	margin-left: .5rem;
}

.header .header-middle .custom-header{
	font-weight: bold;
}
</style>