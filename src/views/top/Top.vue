<template lang="pug" src="./Top.pug">
</template>

<script>
import Clock from '../../components/Clock';

export default {
  name: 'hello',
  components: { Clock },
  data() {
    return {
      msg: 'マークダウンでレジュメを書こう',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
