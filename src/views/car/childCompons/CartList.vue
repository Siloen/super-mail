<template>
    <div class="cart-list">
      <scroll class="content">
         <cart-list-item v-for="(item,index) in cartList" :key = "index" :itemInfo="item"></cart-list-item>
      </scroll>
       
    </div>

</template>

<script>
import scroll from 'components/common/scroll/scroll'
import CartListItem from './CartListItem'

export default {
  name: 'CartList',
  components:{
    CartListItem ,
    scroll
  },
  computed:{
    cartList(){
      return this.$store.state.cartList
    }
  }
}
</script>

<style scoped>
.cart-list{
    height:calc(100% );
}
.content{
    height: 100%;
    overflow: hidden;
}
</style>