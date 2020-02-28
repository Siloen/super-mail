<template>
  <div class="nav">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "navbar"
};
</script>
<style scoped>
.nav {
  display: flex;
  height: 44px;
  line-height: 44px;

}
.left {
  width: 60px;

}
.right {
  width: 60px;
}
.center {
  text-align: center;
  flex: 1;
}
</style>