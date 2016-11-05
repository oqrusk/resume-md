<template>
  <div id="app">
    <p>
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- <router-link> will be rendered as an `<a>` tag by default -->
      <router-link to="/hello">Go to hello</router-link>
      <router-link to="/edit">Go to Edit</router-link>
      <router-link to="/top">Go to top</router-link>
    </p>
    <img src="./assets/logo.png">
    <router-view class="view"></router-view>
    <!--<editor></editor>-->
  </div>
</template>

<script>
import Hello from './components/Hello';
import Editor from './components/Editor';

export default {
  name: 'app',
  components: {
    Hello,
    Editor,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
