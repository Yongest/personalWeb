import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     download:false,   //控制下载弹框
     top:true,
     bottom:true,
     selectedAddr:{

     }
  },
  mutations: {

    // 切换地区，改变状态。
    changeSelectedAddr(state,selectedAddr){
      state.selectedAddr = selectedAddr;
      
    },
    // 下载弹框控制
    downloadShow(state){
      state.download = true;
    },
    downloadHide(state){
      state.download = false;
    },

    // 顶部控制
    topShow(state){
      state.top = true;
    },
    topHide(state){
      state.top = false;
    },

    // 底部控制
    bottomShow(state){
      state.bottom = true;
    },
    bottomHide(state){
      state.bottom = false;
    },
  },
  actions: {

  }
})
