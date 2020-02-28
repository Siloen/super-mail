<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      @click="tabItemClick(index)"
    >
      <span :class="{active:index === currentIdex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIdex: 0
    };
  },
  methods: {
    tabItemClick(index) {
      this.currentIdex = index;
      this.$emit("tabItemClick",index)
      
    }
  },
  props: {
    titles: {
      type: Array
    }
  }
};
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background: #fff;
  }

  .tab-control-item{
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    border-bottom: 2px solid var(--color-tint);
    color: var(--color-high-text);
  }

</style>
