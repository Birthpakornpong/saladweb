<template>
  <footer class="footer mb-0">
    <div class="container-fluid">
      <div class="row hidemobile">
        <div class="col-12 col-lg-5 col-md-5">
          <a href="javascript:;">
            <img
              class="logo logo-header ml-4 mt-2 mb-2"
              src="~/static/images/home/Logo_Holis_Footer.svg"
              alt="Porto Logo"
            />
          </a>
          <div class="row">
            <div class="custom-color-text col-10 ml-4">
              <div>บริษัท อินวินิค จำกัด</div>
              <div>1 ถนนปูนซีเมนต์ไทย</div>
              <div>แขวงบางซื่อ เขตบางซื่อ กรุงเทพมหานคร 10800</div>
            </div>
          </div>
        </div>

        <div class="col-6 col-lg-2 col-md-2 hidemobile" style="width: auto;">
          <div class="widget">
            <h4 class="widget-title">แผนผังเว็ปไซต์</h4>
            <div class="row link-lg link-parts">
              <div class="col-12 link-part">
                <ul class="links mb-0">
                  <li><nuxt-link to="/">หน้าหลัก</nuxt-link></li>
                  <li><nuxt-link to="/shop">สินค้า</nuxt-link></li>
                  <li>
                    <nuxt-link to="/pages/blog">ข่าวสารและกิจกรรม</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/pages/ourstory/post-format-image-gallery"
                      >ประวัติของเรา</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-6 col-lg-2 col-md-2 hidemobile" style="width: auto;">
          <div class="widget">
            <h4 class="widget-title">ประเภทสินค้า</h4>
            <div class="row">
              <div class="col-sm-6">
                <ul class="links mb-0">
                  <!-- <li><a href="javascript:;">Immunity</a></li>
                  <li><a href="javascript:;">Brain</a></li>
                  <li><a href="javascript:;">Cholesterol</a></li>
                  <li><a href="javascript:;">Digestive System</a></li>
                  <li><a href="javascript:;">Skin Health</a></li>
                  <li><a href="javascript:;">Relaxation</a></li> -->
                  <li v-for="(item, index) in categorys" :key="index">
                    <nuxt-link :to="`/shop?category=${item.size}`">
                      {{ item.name }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-3 col-md-3">
          <div class="widget">
            <h4 class="widget-title">ช่องทางติดต่อ</h4>
            <div class="row">
              <div class="col-sm-6">
                <ul class="links mb-0">
                  <!-- <li>
										<nuxt-link to="/pages/about-us">About Porto</nuxt-link>
									</li> -->
                  <li>
                    <a style="color: white;" href="javascript:;">อีเมล:</a>
                  </li>
                  <li><a href="javascript:;">scgphealthcare@gmail.com</a></li>
                  <li>
                    <a style="color: white;" href="javascript:;">โทรศัพท์:</a>
                  </li>
                  <li><a href="javascript:;">+662 586 555</a></li>
                  <li></li>
                  <br />
                  <li>
                    <a class="pb-1" style="color: white;"
                      >ติดตามเรา:
                      <a
                        href="https://www.facebook.com/HOLISbySCGP"
                        target="_blank"
                        ><i class="icon-facebook pr-1"></i
                      ></a>
                      <a href="https://lin.ee/rhxdzsQ" target="_blank">
                        <i class="bi bi-line pr-1"></i
                      ></a>
                      <a
                        href="https://www.tiktok.com/@holisbyscgp?_t=8lN3Gdlnynn&_r=1"
                        target="_blank"
                      >
                        <i class="bi bi-tiktok"></i>
                      </a>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row showmobile">
        <div class="col-12 col-lg-5 col-md-5">
          <div style="display: flex; justify-content: center;">
            <a href="javascript:;">
              <img
                class="logo logo-header ml-4 mt-2 mb-2"
                src="~/static/images/home/Logo_Holis_Footer.svg"
                alt="Porto Logo"
                style="height: 45px;"
              />
            </a>
          </div>

          <div class="row">
            <div class="custom-color-text col-12">
              <div style="text-align: center;">
                <h4 class="widget-title m-0" style="color: white;">
                  บริษัท อินวินิค จำกัด
                </h4>
              </div>
              <div style="text-align: center;">1 ถนนปูนซีเมนต์ไทย</div>
              <div style="text-align: center;">
                แขวงบางซื่อ เขตบางซื่อ กรุงเทพมหานคร 10800
              </div>
            </div>
          </div>
        </div>

        <div class="col-6 col-lg-2 col-md-2 hidemobile" style="width: auto;">
          <div class="widget">
            <h4 class="widget-title">แผนผังเว็ปไซต์</h4>
            <div class="row link-lg link-parts">
              <div class="col-12 link-part">
                <ul class="links mb-0">
                  <li><nuxt-link to="/">หน้าหลัก</nuxt-link></li>
                  <li><nuxt-link to="/shop">สินค้า</nuxt-link></li>
                  <li>
                    <nuxt-link to="/pages/blog">ข่าวสารและกิจกรรม</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/pages/ourstory/post-format-image-gallery"
                      >ประวัติของเรา</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-6 col-lg-2 col-md-2 hidemobile" style="width: auto;">
          <div class="widget">
            <h4 class="widget-title">ประเภทสินค้า</h4>
            <div class="row">
              <div class="col-sm-6">
                <ul class="links mb-0">
                  <!-- <li><a href="javascript:;">Immunity</a></li>
                  <li><a href="javascript:;">Brain</a></li>
                  <li><a href="javascript:;">Cholesterol</a></li>
                  <li><a href="javascript:;">Digestive System</a></li>
                  <li><a href="javascript:;">Skin Health</a></li>
                  <li><a href="javascript:;">Relaxation</a></li> -->
                  <li v-for="(item, index) in categorys" :key="index">
                    <nuxt-link :to="`/shop?category=${item.size}`">
                      {{ item.name }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-3 col-md-3">
          <div class="widget" style="text-align: center; margin-bottom: 1rem;">
            <h4 class="widget-title" style="margin-top: 1rem;">
              ช่องทางติดต่อ
            </h4>
            <div class="row">
              <div class="col-sm-6">
                <ul class="links mb-0">
                  <!-- <li>
										<nuxt-link to="/pages/about-us">About Porto</nuxt-link>
									</li> -->
                  <li>
                    <a style="color: white;" href="javascript:;">อีเมล: </a
                    ><a href="javascript:;">scgphealthcare@gmail.com</a>
                  </li>

                  <li>
                    <a style="color: white;" href="javascript:;">โทรศัพท์: </a
                    ><a href="javascript:;">+662 586 555</a>
                  </li>

                  <li>
                    <a style="color: white;"
                      >ติดตามเรา:
                      <a
                        href="https://www.facebook.com/HOLISbySCGP"
                        target="_blank"
                        ><i class="icon-facebook pr-1"></i
                      ></a>
                      <a href="https://lin.ee/rhxdzsQ" target="_blank">
                        <i class="bi bi-line pr-1"></i
                      ></a>
                      <a
                        href="https://www.tiktok.com/@holisbyscgp?_t=8lN3Gdlnynn&_r=1"
                        target="_blank"
                      >
                        <i class="bi bi-tiktok"></i>
                      </a>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom-custom pt-3 pb-3">
      <div class="d-flex justify-content-center">
        <div class="footer-left" style="font-size: 0.9em;">
          <span class="footer-copyright"
            >© Copyright 2023 by SCG Packaging Co.Ltd. All Right Reserved.</span
          >
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import axios from "axios";
import Api, { baseUrl } from "~/api";
export default {
  setup() {},
  data() {
    return {
      categorys: [],
    };
  },
  mounted() {
    this.handlerGet();
  },
  methods: {
    async handlerGet() {
      var optionAxios = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      axios
        .get(`${baseUrl}/api/Home/get-category-name`, optionAxios)
        .then((response) => {
          if (response.status == 200) {
            let productsData = response.data;

            this.categorys = [];

            productsData.forEach((item) => {
              this.categorys.push({
                ...item,
                name: item.category_name,

                size: String(item.id),
              });
            });
          } else {
          }
        })
        .catch((error) => {});
    },
  },
};
</script>
<style>
.footer .container-fluid {
  background: linear-gradient(to right, #800000, #942626, #942626, #800000);
  color: #d18e8a;
  border-bottom: 4px solid;
  border-image: linear-gradient(to right, #800000, #ff0000, #ff0000, #800000) 1;
  font-size: 1.5rem;
  padding-top: 5px;
  padding-bottom: 5px;
}

.footer .footer-bottom-custom {
  background: linear-gradient(to right, #640b0d, #8b1317f3, #8b1317, #640b0d);
  color: #d18e8a;
  font-size: 1.5rem;
  border-bottom: 4px solid;
  border-image: linear-gradient(to right, #800000, #ff0000, #ff0000, #800000) 1;
}

.footer .container-fluid .custom-color-text {
  color: white;
}

.footer .container-fluid .logo-header {
  height: 70px;
  max-width: 100%;
}

.widget .widget-title {
  color: white;
  margin-top: 3rem;
}

.hidemobile {
  display: flex;
}

@media only screen and (max-width: 600px) {
  .hidemobile {
    display: none !important;
  }
}

.showmobile {
  display: none;
}

@media only screen and (max-width: 600px) {
  .showmobile {
    display: flex !important;
  }
}
</style>
