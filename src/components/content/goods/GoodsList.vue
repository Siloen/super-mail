<template>
    <div class="goods_list">
        <GoodsList_Item v-for="(item,index) in goods" :key="index" :goods_items="item"></GoodsList_Item>
    </div>
</template>

<script>
import GoodsList_Item from "./GoodsList_Item"
export default {
     props:{
         goods:{
             type:Array
         }
     },
     components:{
         GoodsList_Item
     }
}
</script>


<style scoped>
  .goods_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }


</style>