<template>
  <header class="header" style="font-family: 'SCG' !important;">
    <div class="sticky-header mobile-sticky" style="background: #fff;">
      <div class="container-fluid centermobile row" style="margin: 0;">
        <div class="col-4" style="justify-content: start; display: flex;">
          <button
            class="mobile-menu-toggler"
            type="button"
            @click="showMobileMenu"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="d-flex pr-0 hidemobile">
            <pv-header-search-m></pv-header-search-m>
          </div>
        </div>
        <div class="d-flex col-4" style="justify-content: center; width: 20em;">
          <nuxt-link to="/" class="mt-3">
            <img
              src="~/static/images/home/Logo_Holis.svg"
              alt="Porto Logo"
              style="height: 5em; max-width: none;"
            />
          </nuxt-link>
        </div>

        <div class="col-4 hidemobilelogo" style="justify-content: end;">
          <a class="contact-us pb-1"
            >Follow us :
            <a href="https://www.facebook.com/HOLISbySCGP" target="_blank"
              ><i class="icon-facebook pr-1"></i
            ></a>
            <a href="https://lin.ee/rhxdzsQ" target="_blank">
              <i class="bi bi-line pr-1"></i
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
        <div
          class="col-12 d-flex mb-2 showmobile"
          style="justify-content: center;"
        >
          <!-- <pv-header-search-m></pv-header-search-m> -->
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
import PvHeaderSearchM from "~/components/common/partials/PvHeaderSearchM";
document.querySelector("body").classList.add("loaded");

export default {
  components: {
    PvMainMenu,
    PvCartMenu,
    PvHeaderSearch,
    PvHeaderSearchM,
  },
  data() {
    return {
      search_term: "",
    };
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
    submitSearchForm: function (e) {
      this.$router.push({
        path: "/shop",
        query: {
          search_term: this.search_term,
        },
      });
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

.hidemobilelogo {
  display: flex;
}
@media only screen and (max-width: 600px) {
  .hidemobilelogo {
    font-size: 0.75em;
    display: flex;
    margin-right: 0;
    padding: 0;
  }
}

.hidemobile {
  display: flex;
}

@media only screen and (max-width: 600px) {
  .hidemobile {
    display: none !important;
  }
}

.centermobile {
  justify-content: space-between;
}

@media only screen and (max-width: 600px) {
  .centermobile {
    justify-content: space-between;
  }
}

.showmobile {
  display: none !important;
}

@media only screen and (max-width: 600px) {
  .showmobile {
    display: flex !important;
  }
}
</style>
