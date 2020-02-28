<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" @load="imgload" />
    <div class="goods-info">
      <p>{{goods_items.title}}</p>
      <span class="price">{{goods_items.price}}</span>
      <span class="collect">{{goods_items.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods_items: {
      type: Object
    }
  },
  data() {
    return {
      iid: null
    };
  },
  computed:{
     showImage(){
          return this.goods_items.image || this.goods_items.show.img
      },
  },
  methods: {
    imgload() {
      this.$bus.$emit("imgload")
      //this.$emit("imgload")
    },
    itemClick() {
      // console.log(this.goods_items);
      
      this.iid = this.goods_items.iid;

      this.$router.push("/detail/" + this.iid);
      // this.$router.push("/detail?id=iid");
    }
  }
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 45%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
}
</style>
