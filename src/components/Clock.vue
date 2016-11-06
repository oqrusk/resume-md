<template lang="pug">
  p It's {{ time }} now!!
</template>

<script>
import moment from 'moment';

const TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export default {
  name: 'clock',
  data() {
    return {
      time: '',
    };
  },
  mounted() {
    this.time = moment().format();
    setInterval(() => { this.time = moment().format(TIME_FORMAT); }, 1000);
  },
};
</script>

<style>
</style>
