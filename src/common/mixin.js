import BackTop from 'components/common/backTop/BackTop'
export const backTopMixin = {
    data: function () {
      return {
        isShowBackTop: false
      }
    },
    components:{
        BackTop
    },
    methods: {
      backClick: function () {
        this.$refs.scroll.scrollTo(0, 0, 300);
      }
    }
  }