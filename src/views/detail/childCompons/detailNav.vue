<template>
  <navbar class="home_nav">
    <div slot="left">
      <img src="~assets/images/common/back.svg" alt @click="backClick" />
    </div>
    <div slot="center" class="navlist">
      <div
        v-for="(item,index) in titles"
        :key="index"
        class="navitem"
        :class="{active:currentIndex==index}"
        @click="itemclick(index)"
      >{{item}}</div>
    </div>
  </navbar>
</template>


<script>
import navbar from "components/common/navbar/navbar.vue";
export default {
  components: {
    navbar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    backClick() {
      this.$router.go(-1);
    },
    itemclick(index){
        this.currentIndex = index
        this.$emit("navclick",index)
    }
  }
};
</script>

<style scoped>
.home_nav img {
  margin-top: 11px;
  margin-left: 10px;
}
.navlist {
  display: flex;
}
.navitem {
  flex: 1;
}
.active{
    color:var(--color-high-text)
}
</style>