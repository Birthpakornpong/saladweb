<template>
  <header class="header" style="font-family: 'SCG' !important;">
    <div class="header-middle sticky-header mobile-sticky">
      <div class="container-fluid">
        <div class="d-flex" style="width: 20em; justify-content: start;">
          <div class="header-right d-flex pr-0">
            <pv-header-search></pv-header-search>
          </div>
        </div>
        <div class="d-flex" style="justify-content: center; width: 20em;">
          <button
            class="mobile-menu-toggler"
            type="button"
            @click="showMobileMenu"
          >
            <i class="fas fa-bars"></i>
          </button>

          <nuxt-link to="/" class="mt-3">
            <img
              src="~/static/images/home/Logo_Holis.svg"
              alt="Porto Logo"
              style="height: 70px; max-width: none;"
            />
          </nuxt-link>
        </div>

        <div class="d-flex mr-4" style="width: 20em; justify-content: end;">
          <a class="contact-us pr-4 pb-1"
            >Follow us :
            <a href="https://www.facebook.com/HOLISbySCGP" target="_blank"
              ><i class="icon-facebook pr-2"></i
            ></a>
            <a href="https://lin.ee/rhxdzsQ" target="_blank">
              <i class="bi bi-line pr-2"></i
            ></a>
            <a
              href="https://www.tiktok.com/@doozyonlinebyscgp?_t=8g3T6UGiEG9&_r=1"
              target="_blank"
            >
              <i class="bi bi-tiktok"></i>
            </a>
          </a>
          <!-- <div class="header-dropdown custom-header">
            <a href="javascript:;">ไทย</a>
            <div class="header-menu">
              <ul>
                <li>
                  <a href="javascript:;"><i></i>ไทย</a>
                </li>
                <li>
                  <a href="javascript:;"><i></i>English</a>
                </li>
              </ul>
            </div>
          </div> -->

          <!-- <pv-cart-menu></pv-cart-menu> -->
        </div>
      </div>
    </div>

    <div
      class="header-bottom sticky-header desktop-sticky"
      style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);"
    >
      <div class="container-fluid">
        <div class="header-center d-flex justify-content-center">
          <pv-main-menu></pv-main-menu>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import PvMainMenu from "~/components/common/partials/PvMainMenu";
import PvCartMenu from "~/components/common/partials/PvCartMenu";
import PvHeaderSearch from "~/components/common/partials/PvHeaderSearch";

document.querySelector("body").classList.add("loaded");

export default {
  components: {
    PvMainMenu,
    PvCartMenu,
    PvHeaderSearch,
  },
  methods: {
    openLoginModal: function () {
      this.$modal.show(
        () => import("~/components/features/modal/PvLoginModal"),
        {},
        { width: "525", height: "auto", adaptive: true }
      );
    },
    showMobileMenu: function () {
      document.querySelector("body").classList.add("mmenu-active");
    },
    showMobileSearch: function (e) {
      let headerSearch = e.currentTarget.closest(".header-search");
      headerSearch.classList.add("show");
      headerSearch
        .querySelector(".header-search-wrapper")
        .classList.add("show");
    },
  },
};
</script>
<style>
.header .header-middle {
  border-bottom: 0px;
  padding-bottom: 0;
}

.header .header-right .contact-us {
  font-family: "SCG";
  font-weight: 400;
  margin-left: 0.5rem;
}

.header .header-right .custom-header {
  font-weight: bold;
}
</style>
