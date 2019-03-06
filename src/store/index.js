import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
//1. 应用初始状态
const state = {
  isLogin:false
}
// 定义所需的 mutations  status 传过来的数据
const mutations = {
    /*checkLogin(state,status) {
      state.isLogin = status;
    }*/
}
//定义action 通常跟api接口打交道
const actions = {



}
// 创建 store 实例
export default new Vuex.Store({
  actions,
  state,
  mutations
})

