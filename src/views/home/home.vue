<template>
  <div id="home">
    <navbar class="home_nav">
      <div slot="center">购物车</div>
    </navbar>
    <tabcontrol
      :titles="['流行','新品','优惠']"
      class="tabcon"
      @tabItemClick="tabitemClick"
      ref="tabcontrol2"
      v-show="topTabControl"
    ></tabcontrol>

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentscroll"
      :pullUpLoad="true"
      @pullingUp="contentpullUpLoad"
    >
      <cw_swiper :banners="banner" @swiperimageLoad="swiperimageLoad"></cw_swiper>
      <recommendview :recommed="recommend"></recommendview>
      <featureview></featureview>
      <tabcontrol
        :titles="['流行','新品','优惠']"
        class="tabcon"
        @tabItemClick="tabitemClick"
        ref="tabcontrol1"
      ></tabcontrol>
      <goodsList :goods="showGoods"></goodsList>
    </scroll>
    <backtop @click.native="backtopclick" v-show="isShowBackTop"></backtop>
  </div>
</template>

<script>
import navbar from "components/common/navbar/navbar.vue";
import scroll from "components/common/scroll/scroll.vue";
import backtop from "components/common/backTop/BackTop.vue";
import * as home_request from "network/home.js";
import swiper from "components/common/swiper/swiper.vue";
import cw_swiper from "components/content/swiper/main_swiper.vue";
import recommendview from "./childComps/RecommendViews.vue";
import featureview from "./childComps/FeatureView";
import tabcontrol from "components/content/tab_control/tab_control.vue";
import goodsList from "components/content/goods/GoodsList.vue";
export default {
  components: {
    name: "home",
    navbar,
    swiper,
    cw_swiper,
    recommendview,
    featureview,
    tabcontrol,
    goodsList,
    scroll,
    backtop
  },
  data() {
    return {
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      topTabControl: false,
      saveY: 0,
      test: 0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  async created() {
    this.getMultidata();
    this.getHomedata("pop");
    this.getHomedata("new");
    this.getHomedata("sell");
    // this.$bus.$on('imgload',()=>{
    //   scroll.refresh
    // })
    
    console.log("active时的test " + this.test);
  },
  mounted() {
    //加载事件监听 最开始图片未加载 offsetTop远小于正常
    //应为swiper影响较大在swiper加载完成后
    // console.log(this.$refs.tabcontrol1.$el.offsetTop);
  },

  activated() {

    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    //加一个刷新
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getY();

  },
  methods: {
    async getMultidata() {
      var udata = await home_request.getMultidata();
      console.log(udata);
      this.banner = udata.data.banner.list;
      this.dKeyword = udata.data.dKeyword.list;
      this.keywords = udata.data.keywords.list;
      this.recommend = udata.data.recommend.list;
    },

    async getHomedata(type) {
      let page = this.goods[type].page + 1;
      var homedata = await home_request.getHomedata(type, page);
      console.log(homedata);
      this.goods[type].list.push(...homedata.data.list);

      this.goods[type].page = homedata.data.page;
      this.$refs.scroll.finishPullUp();
    },
    tabitemClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
        // default:
        //   this.currentType = "pop";
        //   break;
      }
      this.$refs.tabcontrol1.currentIdex = index;
      this.$refs.tabcontrol2.currentIdex = index;
    },
    backtopclick() {
      this.$refs.scroll.scrollToOrigin(0, 0, 500);
    },
    contentscroll(position) {
      this.isShowBackTop = -position.y > 1000;
      this.topTabControl = -position.y > 547;
    },
    contentpullUpLoad() {
      // console.log("目前的type为" + this.currentType);
      this.getHomedata(this.currentType);
      // const refresh = this.debounce(this.$refs.scroll.refresh);
      // this.$bus.$on('itemimagloda',()=>{refresh()})
    },
    swiperimageLoad() {
      //547px
      // console.log("current offsettop " + this.$refs.tabcontrol1.$el.offsetTop);
    }

    // debounce(func, delay) {
    //   let timer = null;
    //   return function(...arg) {
    //     if (timer) {
    //       clearTimeout(timer);
    //     }
    //     timer = setTimeout(() => {
    //       func.apply(this, arg);
    //     }, delay);
    //   };
    // }
  }
};
</script>
   
<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home_nav {
  position: sticky;
  right: 0;
  left: 0;
  top: 0;
  z-index: 99;
  background-color: var(--color-tint);
  color: #eee;
}

.tabcon {
  display: flex;
  position: relative;
  z-index: 999;
}

.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>