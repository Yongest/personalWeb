<template>
  <div class="home c pd" id="home">
      <h1>每天来点冷笑话！</h1>
        <ol>
          <li v-for="(item,i) in info" :key="item._id">{{i+1+"."+item.introduction}}</li>
        </ol>
  </div>
</template>

<script>

// import {Indicator } from 'mint-ui';
import app from '../assets/js/tool'
export default {

  data(){
    return {
      info :[]
    }
  },
  created() {
    this.getJoke()
  },
  methods:{
    getJoke(){
      let me = this;
            app.get({
            url:'/student/list',
            success:function(data){
                me.info = data
               
            },
            fail(){
              me.info = ['小时候的一个雨夜，哥哥和弟弟在床上聊天，越聊越亲，我俩感觉应该更亲近一些，然后我俩就结拜成把兄弟了……','系统休息中！']
            }
        })
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .home {
   padding-top: 1.5rem;
 }
</style>
