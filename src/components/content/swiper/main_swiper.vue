<template>
  <div class="main_swiper">
    <Swiper>
      <SwiperItem v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="swiperimageLoad"/>
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/cw_swiper/index.js";
export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array
    }
  },
  methods:{
    swiperimageLoad(){
      this.$emit("swiperimageLoad")
    }
  }
};
</script>