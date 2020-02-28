<template>
  <div class="detail">
    <detialNav class="detail-nav" @navclick="navClick" ref="nav"></detialNav>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detialSwiper :topImages="topImage"></detialSwiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-param-info :paramInfo="paramInfo" ref="params"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
      <good-list :goods="recommends" ref="recommend" @imgload="imageload"></good-list>
    </scroll>
    <back-top class="back-top" @click.native="backClick" v-show="isShowBackTop"></back-top>
    <DetailBottomBar @addCart="addCart"></DetailBottomBar>
  </div>
</template>

<script>
import detialNav from "./childCompons/detailNav";
import detialSwiper from "./childCompons/detailSwiper";
import DetailBaseInfo from "./childCompons/DetailBaseInfo";
import DetailShopInfo from "./childCompons/DetailShopInfo";
import DetailCommentInfo from "./childCompons/DetailCommentInfo";
import DetailParamInfo from "./childCompons/DetailParamInfo";
import DetailBottomBar from "./childCompons/DetailBottomBar";
import GoodList from "components/content/goods/GoodsList";
import { backTopMixin } from "common/mixin.js";

import * as detailNetwork from "network/detail.js";
import * as utils from "common/util.js";
import scroll from "components/common/scroll/scroll.vue";
export default {
  name: "detail",
  components: {
    detialNav,
    detialSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailCommentInfo,
    DetailParamInfo,
    DetailBottomBar,
    GoodList,

    scroll
  },
  mixins: [backTopMixin],
  data() {
    return {
      iid:null,
      topImage: [],
      goods: {},
      shop: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0
    };
  },
  async created() {
    this.iid=this.$route.params.id;
    let detailData = await this.getDetailData(this.$route.params.id);
    this.topImage = detailData.result.itemInfo.topImages;
    this.goods = new detailNetwork.Goods(
      detailData.result.itemInfo,
      detailData.result.columns,
      detailData.result.shopInfo.services
    );

    this.shop = new detailNetwork.Shop(detailData.result.shopInfo);

    this.paramInfo = new detailNetwork.GoodsParam(
      detailData.result.itemParams.info,
      detailData.result.itemParams.rule
    );

    if (detailData.result.rate.list) {
      this.commentInfo = detailData.result.rate.list[0];
    }

    let recommendData = await this.getRecommendData();
    this.recommends = recommendData.data.list;

    this.getThemeTopY = utils.debounce(() => {
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      console.log(this.themeTopYs);
    }, 300);

    // this.topImage =detailData.topImages
  },

  mounted() {
    this.$bus.$on("imgload", () => {
      this.getThemeTopY();
    });
  },
  methods: {
    getDetailData(id) {
      let detailData = detailNetwork.getDetailData(id);
      return detailData;
    },
    getRecommendData() {
      let recommendData = detailNetwork.getRecommendData();
      return recommendData;
    },
    imageload() {
      this.getThemeTopY();
    },
    navClick(index) {
      this.currentIndex = index;
      // console.log("the current index is " + index);
      // console.log("the current themeTopYs is " + this.themeTopYs);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    contentScroll(position) {
      const positionY = -position.y;
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          ((i < length - 1 &&
            positionY >= this.themeTopYs[i] &&
            positionY < this.themeTopYs[i + 1]) ||
            (i === length - 1 && positionY >= this.themeTopYs[i]))
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      this.isShowBackTop = -position.y > 400;
    },

    addCart() {
      const product = {};
      product.image = this.topImage[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      product.count = 1;
      product.checked = true;   
      // this.$store.state.cartlist.push(0) 
      //console.log(this.$store.state.cartlist);
      
      //this.$store.dispatch("addCart", product)   
      //this.$store.commit('addCart',product)
      this.$store.dispatch("addCart", product).then(res => {
        console.log(this.$toast);
        this.$toast.show(res, 10000);
      });
    }
  }
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 9999;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  background-color: #fff;
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

