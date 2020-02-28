<template>
  <div class="main_tabbar">
    <tabbar>
      <tabbaritem slot="tabbar" :icon-class="['icon-home-copy','icon-home']" path="/home">
        <div slot="item-text">
          <span>Home</span>
        </div>
      </tabbaritem>
      <tabbaritem
        slot="tabbar"
        :icon-class="['icon-categoryselected','icon-categoryselected-copy']"
        path="/category"
      >
        <div slot="item-text">
          <span>Category</span>
        </div>
      </tabbaritem>
      <tabbaritem slot="tabbar" :icon-class="['icon-car','icon-car-copy']" path="/car">
        <div slot="item-text">
          <span>Car</span>
        </div>
      </tabbaritem>
      <tabbaritem slot="tabbar" :icon-class="['icon-profile','icon-profile-copy']" path="/profile">
        <div slot="item-text">
          <span>Profile</span>
        </div>
      </tabbaritem>
    </tabbar>
  </div>
</template>

<script>
import tabbaritem from "./tabbar_item";
import tabbar from "./tabbar";
export default {
  components: {
    tabbar,
    tabbaritem
  },
  data() {
    return {
      iconClass: ["icon-m_asm-copy", "icon-m_asm"]
    };
  }
};
</script>

<style scoped>
.main_tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>