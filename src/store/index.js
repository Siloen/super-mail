import Vue from 'vue'
import Vuex from 'vuex'
import toast from 'components/common/Toast/index.js'

Vue.use(Vuex)
Vue.use(toast)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  getters:{
    cartLength(state){
      return state.cartList.length
    }
  },
  mutations: {
    //所有修改state的方法都要通过mutations 但mutations要注意单一职责性
    addCart(state, payload) {
      // => {自己要带return}
      //let oldProduct = state.cartlist.find((item) => {item.iid === payload.iid})
      let oldProduct = state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        oldProduct.count += 1
      } else {
        payload.count = 1;
        payload.checked=true
        state.cartList.push(payload)
      }
    },
    addCounter(state,payload){
      payload.count++
    },

    addToCart(state,payload){
      payload.checked=true
      state.cartList.push(payload)
    } 


  },
  actions: {
    addCart(context,payload){
      return new Promise((resolve,reject)=>{
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
        console.log(oldProduct)
        if (oldProduct){
          // oldProduct.count += 1
          context.commit('addCounter',oldProduct)
          resolve('当前数量加1')
        }else{
          payload.count = 1
          // context.state.cartList.push(payload)
          context.commit('addToCart',payload)
          resolve('添加了新的商品')
        }
      })
    }
  },
  modules: {
  }
})
