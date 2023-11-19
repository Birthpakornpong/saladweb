<template>
	<header class="header">
		<div class="header-middle sticky-header mobile-sticky">
			<div class="container-fluid">
				<div class="header-left d-none d-lg-flex">
					<div class="header-dropdown">
						<a href="javascript:;">USD</a>
						<div class="header-menu">
							<ul>
								<li><a href="javascript:;">EUR</a></li>
								<li><a href="javascript:;">USD</a></li>
							</ul>
						</div>
					</div>

					<div class="header-dropdown">
						<a href="javascript:;"><i class="flag-us flag"></i>ENG</a>
						<div class="header-menu">
							<ul>
								<li><a href="javascript:;"><i class="flag-us flag mr-2"></i>ENG</a>
								</li>
								<li><a href="javascript:;"><i class="flag-fr flag mr-2"></i>FRA</a></li>
							</ul>
						</div>
					</div>
				</div>

				<div class="header-center ml-0 ml-lg-auto">
					<button
						class="mobile-menu-toggler"
						type="button"
						@click="showMobileMenu"
					>
						<i class="fas fa-bars"></i>
					</button>

					<nuxt-link
						to="/"
						class="logo"
					>
						<img
							src="~/static/images/home/logo.png"
							width="113"
							height="48"
							alt="Porto Logo"
						/>
					</nuxt-link>
				</div>

				<div class="header-right">
					<nuxt-link
						to="/pages/login"
						class="header-icon d-lg-block d-none"
					>
						<div class="header-user">
							<i class="icon-user-2"></i>
							<div class="header-userinfo">
								<span class="d-inline-block font2 line-height-1">Hello!</span>
								<h4 class="mb-0">My Account</h4>
							</div>
						</div>
					</nuxt-link>

					<nuxt-link
						to="/pages/wishlist"
						class="header-icon"
						title="wishlist"
					>
						<i class="icon-wishlist-2"></i>
					</nuxt-link>

					<pv-cart-menu></pv-cart-menu>
				</div>
			</div>
		</div>

		<div class="header-bottom sticky-header desktop-sticky">
			<div class="container-fluid">
				<div class="header-left d-flex">
					<nav class="main-nav">
						<ul class="menu">
							<li><a href="javascript:;">Outlet</a></li>
							<li><a href="javascript:;">Buy Porto</a></li>
						</ul>
					</nav>
				</div>

				<div class="header-center w-auto">
					<pv-main-menu></pv-main-menu>
				</div>

				<div class="header-right d-flex pr-0">
					<pv-header-search></pv-header-search>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import PvMainMenu from '~/components/common/partials/PvMainMenu';
import PvCartMenu from '~/components/common/partials/PvCartMenu';
import PvHeaderSearch from '~/components/common/partials/PvHeaderSearch';

document.querySelector( 'body' ).classList.add( 'loaded' );

export default {
	components: {
		PvMainMenu,
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