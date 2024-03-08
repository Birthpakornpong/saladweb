<template>
  <div class="row bgimgband">
    <div class="col-12">
      <div class="category-section" v-if="categorys.length > 0">
        <div class="header-text">
          <div>SHOP BY CATEGORY</div>
        </div>
        <div class="grid-container" v-if="categorys.length > 0">
          <!-- <nuxt-link
            :to="{ path: '/shop', query: { category: categorys[0].id } }"
            target="_blank"
          >
            <div
              class="grid-items"
              @mouseover="show = true"
              @mouseleave="show = false"
            >
              <transition name="slide-down">
                <div
                  v-if="show"
                  style="
                    width: 100%;
                    height: 11em;
                    border-bottom-right-radius: 30px;
                    border-bottom-left-radius: 30px;
                    color: black;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                  class="bg-custom slide-down"
                >
                  {{ categorys[0].categoryTH }}
                </div>
              </transition>
              <div>
                <img
                  :src="categorys[0].categoryLink"
                  style="height: 4em; margin-bottom: 1em;"
                />
                {{ categorys[0].categoryName }}
              </div>
            </div>
          </nuxt-link> -->

          <!-- <nuxt-link
            :to="{ path: '/shop', query: { category: categorys[0].id } }"
            target="_blank"
          >
            <div
              class="grid-items"
              @mouseover="show = true"
              @mouseleave="show = false"
            >
              <Transition name="slide-fade">
                <div
                  v-if="show"
                  style="
                    width: 100%;
                    height: 11em;

                    border-bottom-right-radius: 30px;
                    border-bottom-left-radius: 30px;
                    color: black;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                  class="bg-custom"
                >
                  {{ categorys[0].categoryTH }}
                </div>
              </Transition>
              <div>
                <img
                  :src="categorys[0].categoryLink"
                  style="height: 4em; margin-bottom: 1em;"
                />
                {{ categorys[0].categoryName }}
              </div>
            </div>
          </nuxt-link> -->

          <nuxt-link
            :to="{ path: `/shop?category=${categorys[0].id}` }"
            target="_new"
          >
            <div
              class="grid-items"
              style="position: relative;"
              @mouseover="show = true"
              @mouseleave="show = false"
            >
              <Transition name="slide-fade">
                <div
                  v-if="show"
                  style="
                    width: 100%;
                    height: 6em;
                    border-bottom-right-radius: 30px;
                    border-bottom-left-radius: 30px;
                    color: rgba(119, 119, 119, 1) !important;
                    font-size: 1em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    top: 0px;
                  "
                  class="bgimgcardband"
                >
                  {{ categorys[0].categoryTH }}
                </div>
              </Transition>
              <div v-if="show" style="position: absolute; top: 5em;">
                <img
                  :src="categorys[0].categoryLink"
                  style="height: 5em; margin-bottom: 1em;"
                />
                {{ categorys[0].categoryName }}
              </div>
              <div v-else>
                <img
                  :src="categorys[0].categoryLink"
                  style="height: 5em; margin-bottom: 1em;"
                />
                {{ categorys[0].categoryName }}
              </div>
            </div>
          </nuxt-link>
          <nuxt-link
            :to="{ path: `/shop?category=${categorys[1].id}` }"
            target="_new"
          >
            <div
              class="grid-items"
              style="position: relative;"
              @mouseover="show1 = true"
              @mouseleave="show1 = false"
            >
              <Transition name="slide-fade">
                <!-- <p v-if="show">hello</p> -->
                <div
                  v-if="show1"
                  style="
                    width: 100%;
                    height: 6em;
                    border-bottom-right-radius: 30px;
                    border-bottom-left-radius: 30px;
                    color: rgba(119, 119, 119, 1) !important;
                    font-size: 1em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    top: 0px;
                  "
                  class="bgimgcardband"
                >
                  {{ categorys[1].categoryTH }}
                </div>
              </Transition>
              <div v-if="show1" style="position: absolute; top: 5em;">
                <img
                  :src="categorys[1].categoryLink"
                  style="height: 5em; margin-bottom: 1em;"
                />
                {{ categorys[1].categoryName }}
              </div>
              <div v-else>
                <img
                  :src="categorys[1].categoryLink"
                  style="height: 5em; margin-bottom: 1em;"
                />
                {{ categorys[1].categoryName }}
              </div>
            </div>
          </nuxt-link>

          <nuxt-link
            :to="{ path: `/shop?category=${categorys[2].id}` }"
            target="_new"
          >
            <div
              class="grid-items"
              style="position: relative;"
              @mouseover="show2 = true"
              @mouseleave="show2 = false"
            >
              <Transition name="slide-fade">
                <!-- <p v-if="show">hello</p> -->
                <div
                  v-if="show2"
                  style="
                    width: 100%;
                    height: 6em;
                    border-bottom-right-radius: 30px;
                    border-bottom-left-radius: 30px;
                    color: rgba(119, 119, 119, 1) !important;
                    font-size: 1em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    top: 0px;
                  "
                  class="bgimgcardband"
                >
                  {{ categorys[2].categoryTH }}
                </div>
              </Transition>

              <img
                v-if="show2"
                style="
                  position: absolute;
                  top: 5em;
                  height: 5em;
                  margin-bottom: 1em;
                "
                :src="categorys[2].categoryLink"
              />
              <span v-if="show2">{{ categorys[2].categoryName }}</span>

              <img
              v-else
                :src="categorys[2].categoryLink"
                style="height: 5em; margin-bottom: 1em;"
              />
              <div  v-if="show2"  style="height: 5em; margin-bottom: 1em;"></div>
              {{ categorys[2].categoryName }}
            </div>
          </nuxt-link>

          <nuxt-link
            :to="{ path: `/shop?category=${categorys[3].id}` }"
            target="_new"
          >
            <div
              class="grid-items"
              style="position: relative;"
              @mouseover="show3 = true"
              @mouseleave="show3 = false"
            >
              <Transition name="slide-fade">
                <!-- <p v-if="show">hello</p> -->
                <div
                  v-if="show3"
                  style="
                    width: 100%;
                    height: 6em;
                    border-bottom-right-radius: 30px;
                    border-bottom-left-radius: 30px;
                    color: rgba(119, 119, 119, 1) !important;
                    font-size: 1em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    top: 0px;
                  "
                  class="bgimgcardband"
                >
                  {{ categorys[3].categoryTH }}
                </div>
              </Transition>

              <img
                v-if="show3"
                style="
                  position: absolute;
                  top: 5em;
                  height: 5em;
                  margin-bottom: 1em;
                "
                :src="categorys[3].categoryLink"
              />
              <span v-if="show3">{{ categorys[3].categoryName }}</span>

              <img
              v-else
                :src="categorys[3].categoryLink"
                style="height: 5em; margin-bottom: 1em;"
              />
              <div  v-if="show3"  style="height: 5em; margin-bottom: 1em;"></div>
              {{ categorys[3].categoryName }}
            </div>
          </nuxt-link>

          <nuxt-link
            :to="{ path: `/shop?category=${categorys[4].id}` }"
            target="_new"
          >
            <div
              class="grid-items"
              style="position: relative;"
              @mouseover="show4 = true"
              @mouseleave="show4 = false"
            >
              <Transition name="slide-fade">
                <!-- <p v-if="show">hello</p> -->
                <div
                  v-if="show4"
                  style="
                    width: 100%;
                    height: 6em;
                    border-bottom-right-radius: 30px;
                    border-bottom-left-radius: 30px;
                    color: rgba(119, 119, 119, 1) !important;
                    font-size: 1em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    top: 0px;
                  "
                  class="bgimgcardband"
                >
                  {{ categorys[4].categoryTH }}
                </div>
              </Transition>

              <img
                v-if="show4"
                style="
                  position: absolute;
                  top: 5em;
                  height: 5em;
                  margin-bottom: 1em;
                "
                :src="categorys[4].categoryLink"
              />
              <span v-if="show4">{{ categorys[4].categoryName }}</span>

              <img
              v-else
                :src="categorys[4].categoryLink"
                style="height: 5em; margin-bottom: 1em;"
              />
              <div  v-if="show4"  style="height: 5em; margin-bottom: 1em;"></div>
              {{ categorys[4].categoryName }}
            </div>
          </nuxt-link>

          <nuxt-link
            :to="{ path: `/shop?category=${categorys[5].id}` }"
            target="_new"
          >
            <div
              class="grid-items"
              style="position: relative;"
              @mouseover="show5 = true"
              @mouseleave="show5 = false"
            >
              <Transition name="slide-fade">
                <!-- <p v-if="show">hello</p> -->
                <div
                  v-if="show5"
                  style="
                    width: 100%;
                    height: 6em;
                    border-bottom-right-radius: 30px;
                    border-bottom-left-radius: 30px;
                    color: rgba(119, 119, 119, 1) !important;
                    font-size: 1em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    top: 0px;
                  "
                  class="bgimgcardband"
                >
                  {{ categorys[5].categoryTH }}
                </div>
              </Transition>
              <img
                v-if="show5"
                style="
                  position: absolute;
                  top: 5em;
                  height: 5em;
                  margin-bottom: 1em;
                "
                :src="categorys[5].categoryLink"
              />
              <span v-if="show5">{{ categorys[5].categoryName }}</span>

              <img
              v-else
                :src="categorys[5].categoryLink"
                style="height: 5em; margin-bottom: 1em;"
              />
              <div  v-if="show5"  style="height: 5em; margin-bottom: 1em;"></div>
              {{ categorys[5].categoryName }}
            </div>
          </nuxt-link>

          <!-- <a :href="categorys[1].categoryLink" target="_blank">
            <div
              class="grid-items"
              @mouseenter="slideText(true)"
              @mouseleave="slideText(false)"
            >
              <img :src="categorys[1].categoryLink" style="height: 5em;" />{{
                categorys[1].categoryName
              }}
            </div></a
          >
          <a :href="categorys[2].categoryLink" target="_blank">
            <div
              class="grid-items"
              @mouseover="slideText('Cholesterol Blood Sugar control')"
            >
              <img :src="categorys[2].categoryLink" style="height: 5em;" />
              {{ categorys[2].categoryName }}
            </div></a
          >
          <a :href="categorys[3].categoryLink" target="_blank">
            <div class="grid-items" @mouseover="slideText('Digestive System')">
              <img :src="categorys[3].categoryLink" style="height: 5em;" />
              {{ categorys[3].categoryName }}
            </div></a
          >

          <a :href="categorys[4].categoryLink" target="_blank">
            <div class="grid-items" @mouseover="slideText('Skin Health')">
              <img :src="categorys[4].categoryLink" style="height: 5em;" />
              {{ categorys[4].categoryName }}
            </div></a
          >

          <a :href="categorys[5].categoryLink" target="_blank"
            ><div class="grid-items" @mouseover="slideText('Relaxation')">
              <img :src="categorys[5].categoryLink" style="height: 5em;" />
              {{ categorys[5].categoryName }}
            </div></a
          > -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PvCarousel from "~/components/features/PvCarousel";
import { brandSlider } from "~/utils/data/carousel";

export default {
  components: {
    PvCarousel,
  },
  props: {
    categorys: Array,
  },
  data: function () {
    return {
      brandSlider: brandSlider,
      isHovered: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show: false,
    };
  },
  methods: {
    slideText(hovered) {
      this.isHovered = hovered;
    },
  },
};
</script>

<style>
.bgimgband {
  background-image: url("static/bgcolor.png");
  padding-bottom: 5em;
  padding-top: 7em;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.bgimgcardband {
  background-image: url("static/bgcardbrand.png");
  font-size: 1.2em;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.bg-custom {
  background: linear-gradient(
    45deg,
    rgba(209, 209, 209, 1),
    rgba(255, 255, 255, 1)
  );
  font-size: 1.2em;
}
.slide-fade-hover-active {
  transition: all 2s ease-in;
}

.slide-fade-leave-active {
  transition: all 2s ease-in;
}

.slide-fade-leave-to {
  transform: translateY(-100%);
  opacity: 1;
}
.slide-fade-hover-from {
  transform: translateY(100%);
  opacity: 1;
}
.category-section .header-text {
  text-align: center;
  font-weight: bold;
  font-size: 2.5em;
  color: #ab0011;
  position: relative;
  font-family: "SCG";
}

@media only screen and (max-width: 600px) {
  .category-section .header-text {
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
    color: #ab0011;
    position: relative;
    font-family: "SCG";
  }
}

.category-section .header-text .icon {
  margin-right: 8px;
}

.category-section .grid-container {
  display: grid;
  grid: auto auto / auto auto auto;
  grid-gap: 85px;

  padding: 40px;
  justify-content: center;
}
@media only screen and (max-width: 900px) {
  .category-section .grid-container {
    display: grid;
    /* grid: none; */
    grid-gap: 4em;

    padding: 1em;
    justify-content: center;
  }
}
@media only screen and (max-width: 600px) {
  .category-section .grid-container {
    display: grid;
    /* grid: none; */
    grid-gap: 2em;
    /* background-color: white; */
    padding: 1em;
    justify-content: center;
  }
}

.category-section .grid-container .grid-items {
  background-color: #771219;
  color: white;
  text-align: center;
  height: 360px;
  width: 300px;
  font-size: 25px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  position: relative;
  overflow: hidden;
}

@media only screen and (max-width: 900px) {
  .category-section .grid-container .grid-items {
    background-color: #771219;
    color: white;
    text-align: center;
    height: 200px;
    width: 170px;
    font-size: 1em;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    position: relative;
    overflow: hidden;
  }
}

@media only screen and (max-width: 600px) {
  .category-section .grid-container .grid-items {
    background-color: #771219;
    color: white;
    text-align: center;
    height: 130px;
    width: 100px;
    font-size: 0.75em;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    position: relative;
    overflow: hidden;
  }
}

/* .category-section .grid-container .grid-items::before {
  content: "บำรุงสมองและระบบประสาท";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  color: #777777;
  padding: 10px;
  box-sizing: border-box;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  z-index: 1;
  font-size: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
} */

.category-section .grid-container .grid-items:hover::before {
  transform: translateY(0);
}

.category-section .grid-container .grid-items .icon {
  margin-bottom: 10px;
  transition: color 0.3s ease;
}

.category-section .grid-container .grid-items:hover .icon {
  color: #771219;
}
</style>
