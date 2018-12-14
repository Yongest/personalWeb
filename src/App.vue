<template>
  <div id="app">
              <span>{{time}}</span>
    <router-view></router-view>
  </div>
</template>

<script>
//    导入公共的bus Vue 实例
// import {bus} from './assets/js/bus'

export default {
  
 data(){
   return {
     time:''
   }
 },
 created(){
   let time =new Date().getHours();

   if(time>=22){
     this.time = '夜深了，早点休息！'
   }else if(time>=18){
     this.time = '天冷了，照顾好自己！'
   }else if(time>=13){
     this.time = '下午好！'
   }else if(time>=12){
     this.time = '中午吃点好吃的！'
   }else if(time>=8){
     this.time = '一日之计在于晨！'
   }else if(time>5){
     this.time = '早起是治家之本！'
   }else {
     this.time = '夜深了，早点休息！'
   }
 }



};
</script>

<style lang="scss">
  span {
    position: fixed;
    right: .2rem;
    top:.5rem;
    font-size: 10px;
    text-decoration:underline
  }
</style>

