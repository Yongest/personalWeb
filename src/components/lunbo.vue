<template>
  <mt-swipe :auto="4000" class="lunboimgs">
  
    <mt-swipe-item v-for="(img,index) in lunbo" :key="index">
  
      <a :href='img.link?img.link:"javascript:void(0)"'>
  
        <img :class="{lunboimg:true,radius:radius}" :src="img[k]" alt="有料生活">
  
      </a>
  
    </mt-swipe-item>
  
  </mt-swipe>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

  export default {
  
    name: "lunbo",
  
    /**
  
    k:图片的键
  
    lunbo:[{k:'1.png'}],
  
    radius:是否有圆角，默认没有
  
    link:跳转的路由
  
     */
  
    props: ['lunbo', 'k', 'radius', 'link'],
  
  
  
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .lunboimgs {
     .mint-swipe-item {
       height: 100%;
     }
    a {
  
      display: block;
  
      width: 100%;
  
      height: 100%;
  
    }
  
  }
  
  
  
  .lunboimg {
  
    height: 100%;
  
  }
  
  
  
  .mint-swipe-indicator {
  
    background: #a3dafe;
  
    opacity: 1;
  
    margin: 0 6px;
  
  }
  
  
  
  .radius {
  
    border-top-left-radius: .4rem;
  
    border-top-right-radius: .4rem;
  
  }
</style>