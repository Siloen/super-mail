<template>
    <div class="tabbar">
        <slot name="tabbar"></slot>
    </div>
 
</template>
<script>


export default {

};
</script>

<style scoped>
@import url("../../../assets/css/base.css");
.tabbar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 1px rgb(100, 100, 100, 0.1);
}

</style>