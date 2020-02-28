<template>
  <div class="tabbar_item" :class="{active:isActive}" @click="btnclick">
    <div class="special">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="iconTagClass" />
      </svg>
    </div>
    <div>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
require("../../../assets/js/iconfont");
export default {
  props:{
      iconClass:{
          type:Array,
          required:true
      },
      path:{
        type:String,
        default:"/"
      }
  },
  computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      iconTagClass(){
          if(this.isActive){
              return `#${this.iconClass[1]}`;
          }
          else{
              return `#${this.iconClass[0]}`;
          }
      },
      activeStyle(){
        return this.isActive?{color:"orange"}:{}
      }
  },
  methods:{
    btnclick(){
      this.$router.currentRoute.path == this.path || this.$router.replace(this.path)   
    }
  }
};
</script>

<style scoped>
@import url("../../../assets/css/base.css");

.tabbar_item {
  flex: 1;
  text-align: center;
  height: 49px;
  cursor: pointer;
} 
.active {
  color: orange;
}
</style>