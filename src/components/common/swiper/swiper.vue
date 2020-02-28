<template>
  <div class="block">
    <el-carousel trigger="click" height="390px">
      <el-carousel-item v-for="(item,index) in banners" :key="index" class="indicator">
        <el-row>
          <el-col :span="24">
            <a :href="item.link">
              <img :src="item.image"/>
            </a>
          </el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props:{
    banners:{
      type:Array
    }
  }
  
}
</script>
<style scoped>
.indicator img{
  width: 100%;
  height: 390px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
