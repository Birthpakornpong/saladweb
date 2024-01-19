<template>
  <div class="row">
    <div class="col-12">
      <div class="category-section">
        <div class="header-text">
          <div>SHOP BY CATEGORY</div>
        </div>
        <div class="grid-container" v-if="categorys.length > 0">
          <a :href="categorys[0].categoryLink" target="_blank">
            <div class="grid-items" @mouseover="slideText('Immunity')">
              <img :src="categorys[0].categoryLink" style="height: 5em;" />
              {{ categorys[0].categoryName }}
            </div>
          </a>

          <a :href="categorys[1].categoryLink" target="_blank">
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
          >
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
.category-section .header-text {
  text-align: center;
  font-weight: bold;
  font-size: x-large;
  color: #ab0011;
  position: relative;
}

.category-section .header-text .icon {
  margin-right: 8px;
}

.category-section .grid-container {
  display: grid;
  grid: auto auto / auto auto auto;
  grid-gap: 50px;
  background-color: white;
  padding: 40px;
  justify-content: center;
}

.category-section .grid-container .grid-items {
  background-color: #771219;
  color: white;
  text-align: center;
  height: 240px;
  width: 200px;
  font-size: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  position: relative;
  overflow: hidden;
}

.category-section .grid-container .grid-items::before {
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
}

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
