import Toast from "./toast.vue"

const obj = {}

// 在Vue.use(obj)后首先调用的就是 obj.install(Vue) 默认参数有个Vue对象
obj.install = (Vue) => {
    //1.创建组件构造器
    const toastconstructor = Vue.extend(Toast)
    //2.new的方式，根据组件构造器，可以创建出一个组件对象
    const toast = new toastconstructor()
    //3.将组件对象手动挂载到某一个元素上
    toast.$mount(document.createElement('div'))
    //4.toast.$el对应的就是div
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast;
}

export default obj