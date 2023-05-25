<script>
import AppMain from './components/AppMain.vue'

// import axios from 'axios';
import { store } from './data/store';

export default {
  components: {
    AppMain,
  },

  data() {
    return {
      store: store
    }
  },
  methods: {},

}
</script>

<template>
  <h2>io sono vue</h2>
  <AppMain />
</template>

<style scoped lang="scss">
h2 {
  color: orange;
}
</style>
