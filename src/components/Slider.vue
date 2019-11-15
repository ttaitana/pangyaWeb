<template>
  <div class="slide">
    <vueper-slides>
      <vueper-slide v-for="i in 4" :key="i">
        <div slot="slideContent">
          <img src="@/images/slider/ex_slider.png" />
        </div>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import "vueperslides/dist/vueperslides.css";
import { VueperSlides, VueperSlide } from "vueperslides";

export default {
  components: {
    VueperSlides,
    VueperSlide
  }
};
</script>

<style lang="scss">
.slide {
  padding: 8px 0;
  * {
    border-radius: 8px;
  }
}
</style>
