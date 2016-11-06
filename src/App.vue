<template lang="pug" src="./App.pug">
</template>

<script>
import Top from './views/top/Top';
import Editor from './views/edit/Editor';

export default {
  name: 'app',
  components: {
    Top,
    Editor,
  },
  data() {
    return {
      path: '....Hello!!',
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
.top-header{
  position: relative;
  width:100%;
  height:400px;
  background-image: url('./assets/top/pc.jpg');
  background-size:cover;
  .intro-text {
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
  }
}

</style>
