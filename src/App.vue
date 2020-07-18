<template>
  <div id="app">
    <!-- 标题栏 -->
    <navbar v-show="$route.meta.topShow" :title='$route.meta.title'></navbar>

    <router-view/>

    <!-- 导航栏 -->
    <Tabbar v-show="$route.meta.navShow"></Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'
import navbar from './components/navbar '


export default {
  name: 'App',
  components:{Tabbar,navbar}
}
</script>

<style>
@import './common/font.css';
body{
  font-family:小米兰亭;
}
</style>
