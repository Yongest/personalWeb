<template>
  <div class="home c" id="home">
        <div>222</div>
  </div>
</template>

<script>

// import {Indicator } from 'mint-ui';
import axios from 'axios'
export default {

  
  created() {
    // this.getJoke()
  },
  methods:{
    getJoke(){
       axios.get('http://v.juhe.cn/joke/content/list.php?sort=2018&page=1&pagesize=10&time=1418816972&key=47a5d685ad33dee0b4724a3acb1ac002').then(data=>{
         console.log(data)
       })
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
